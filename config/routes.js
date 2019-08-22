const axios = require('axios');
const bcrypt = require('bcryptjs');
const db = require('../database/dbConfig');
const generateToken = require('../auth/generateToken');

const { authenticate } = require('../auth/authenticate');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

async function register(req, res) {
  let user = req.body;
  user.password = bcrypt.hashSync(user.password, 12);
  await db('users')
    .insert({username: user.username, password: user.password})
    .then(res => res[0])
    .then(id => {
      res
        .status(201)
        .json({id});
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ message: 'There was an error saving user to the database!' });
    })
}

async function login(req, res) {
  const userData = req.body;
  await db
          .select('*')
          .from('users')
          .where('username', req.body.username)
          .first()
          .then(user => {
            if(user && bcrypt.compareSync(userData.password, user.password)){
              const token = generateToken(user);
              res
                .status(200)
                .json({ token });
            }else{
              res
                .status(404)
                .json({ message: 'Invalid credentials' });
            }
          })
          .catch(error => {
            res
              .status(500)
              .json({ error });
          });
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
