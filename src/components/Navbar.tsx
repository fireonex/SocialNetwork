import React from "react";
import '../App.css';

export const Navbar = () => {
    return (
        <nav className={'nav'}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
        </nav>
    )
}