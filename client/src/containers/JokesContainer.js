import React from 'react';
import Joke from '../components/Joke';

export default (props) => {
    return (
        <>
            {props.jokes.map(joke => 
                <Joke
                    key={joke.id}
                    id={joke.id}
                    joke={joke.joke}
                />
            )}
        </>
    );
}