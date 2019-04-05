import React from 'react';
import PropTypes from 'prop-types';

import {
    CardSingle,
    Title,
    cardBorder,

} from '../styles';

const Joke = (props) => {
    return (
        <>
            <CardSingle className="card" style={cardBorder}>
                <Title>{props.joke}</Title>
            </CardSingle>
        </>
    );
}


Joke.propTypes = {
    joke: PropTypes.string.isRequired
}

export default Joke;