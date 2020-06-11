import React from 'react';
import {Header} from '../elements/StyledHeader';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <Header>
            <h1>Logo?</h1>{' '}
            <nav>
                <Link to='/'>Example</Link> <Link to='/another'>Another</Link> <Link to='/frontpage'>Frontpage -
                Test</Link> <Link to='/demopage'>Demopage</Link>
            </nav>
        </Header>
    );
};

export default NavBar;
