import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { NavInfo } from '../NavInfo';
import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';
import { IconContext } from 'react-icons';
import './Nav.css';

const Nav = () => {
    const [sidebar, setSidebar] = useState(false);

    // const showSidebar = () => setSidebar(!sidebar);

    return (
        <div>
            <h2 className="title">Chris's Portfolio</h2>
                <div className="navbar">
                    {NavInfo.map((item, i) => {
                        return (
                            <li key={i} className={item.className}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span className="item-span">{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </div>
        </div>
    );
};

export default Nav;