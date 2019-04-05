import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    JokeDiv,
    JokeCard,
    JokeCardSide
} from '../styles';

const Joke = (props) => {
    const [flip, setFlip] = useState(false);
    return (
        <>
            <JokeDiv>
                <JokeCard flip={flip} onClick={() => setFlip(!flip)}>
                    <JokeCardSide>Click to flip #{props.id}</JokeCardSide>
                    <JokeCardSide back>{props.joke}</JokeCardSide>
                </JokeCard>
            </JokeDiv>
        </>
    );
}


Joke.propTypes = {
    joke: PropTypes.string.isRequired
}

export default Joke;