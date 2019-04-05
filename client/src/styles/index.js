import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';

export const SubmitBtn = styled.input`
    border: 1px solid black;
`;

export const NavbarBrandStyled = styled(NavbarBrand)`
    font-size: 24px;
    color: #fff !important;
`;

export const NavbarStyled = styled(Navbar)`
    margin-bottom: 5rem;
    border-bottom: 1px solid #4c8bf5;
    background: #4c8bf5;
`;

export const LinkStyled = styled(Link)`
    color: white !important;
`;

export const CardSingle = styled.div`
    width: 45%;
    margin: 20px auto
`

export const Title = styled.h3`
    text-align: center;
    color: ${props => props.formTitle ? 'white' : 'black'};
    background: ${props => props.formTitle ? '#4c8bf5' : 'none'};
    text-decoration: none;
    margin-bottom: 0;
    padding: 10px;
`;

export const cardBorder = {
    border: '1px solid black',
    borderRadius: '6px'
};

export const FormComponent = styled.form`
    width: 18rem;
    margin: 0 auto;
`;

export const SearchBar = styled.div`
    width: 24rem;
    max-width: 24rem;
    min-width: 8rem;
    margin: 0 auto;
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 0 2rem;
    border-radius: 20px;

    &::placeholder {
        text-align: center;
    }
`;

export const JokesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const JokeDiv = styled.div`
    margin: 20px 0;
    width: 300px;
    height: 200px;
    position: relative; 
    perspective: 800px;
    border-radius: 4px;
`;

export const JokeCard = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 6px;
    box-shadow: 0 6px 16px rgba(0,0,0,0.15);
    cursor: pointer;
    transform: ${props => props.flip ? 'rotateY(180deg)' : ''};
`;

export const JokeCardSide = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 6px;
    background: #4c8bf5;
    display: flex;
    justify-content: center;
    align-items: center;
    font: 16px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-smoothing: antialiased;
    color: #fff;
    padding: 20px;
    text-align: center;
    
    transform: ${props => props.back ? 'rotateY(180deg)' : ''};
`;