import React from 'react';
import Joke from '../components/Joke';
import { JokesContainer } from '../styles';

export default (props) => {
    return (
        <JokesContainer>
            {props.jokes.map(joke => 
                <Joke
                    key={joke.id}
                    id={joke.id}
                    joke={joke.joke}
                />
            )}
        </JokesContainer>
    );
}