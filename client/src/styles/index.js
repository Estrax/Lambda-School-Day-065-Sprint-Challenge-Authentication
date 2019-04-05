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
    color: black;
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

    &::placeholder {
        text-align: center;
    }
`;
