import React from 'react';
import { useHistory } from 'react-router-dom';

const Nav = ({}) => {
    const history = useHistory();

    const navigate = (path) => {
        history.push(path);
    };

    return (
        <div>
            <h1>Navbar</h1>
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/resume")}>Resume</button>
            <button>Home</button>
        </div>
    );
};

export default Nav;