import React, { Component } from 'react';
import JokesContainer from '../containers/JokesContainer';
import { connect } from 'react-redux';
import { fetchJokes } from '../actions';
import { Title, SearchBar, SearchInput } from '../styles';
import PropTypes from 'prop-types';

class JokesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.returnFilteredObjects = this.returnFilteredObjects.bind(this);
    }
    componentDidMount() {
        if(this.props.authenticated){
            if(this.props.jokes.length === 0){
                this.props.fetchJokes();
            }
        }
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    returnFilteredObjects() {
        return this.state.search.trim().length > 0 ? this.props.jokes.filter(elem => elem.joke.toLowerCase().includes(this.state.search.toLowerCase())) : this.props.jokes;
    }

    render() {
        const objects = this.returnFilteredObjects();
        return (
            <>
                <Title>Jokes:</Title>
                <SearchBar>
                    <SearchInput type="text" name="search" placeholder="What joke would you like to find today?" onChange={this.handleChange} value={this.state.search} />
                </SearchBar>
                {this.props.authenticated && <JokesContainer userID={this.props.userID} jokes={objects} />}
            </>
        );
    }
}

JokesPage.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    fetchJokes: PropTypes.func.isRequired,
    jokes: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    return {
        authenticated: state.auth.authenticated || false,
        userID: state.auth.user ? state.auth.user.id : -1,
        jokes: state.jokes.jokes || []
    }
}

const mapDispatchToProps = {
    fetchJokes
}

export default connect(mapStateToProps, mapDispatchToProps)(JokesPage);