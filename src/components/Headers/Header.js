import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="header">
                <h1>
                    <Link to="/">Posts</Link>
                </h1>
            </div>
            <ul >
                <li><Link to="/"> Posts</Link></li>
                <li><Link to="/create/">Create Post</Link></li>
            </ul>
        </header>
    )
};
export default Header;