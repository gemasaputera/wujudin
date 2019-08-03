import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div id="myTopnav"  className="g-container topnav">
                <Link href="#" to="/" className="logo">WujudIn</Link>
                <nav>
                    <ul>
                        <li>
                            <Link href="#" to="/">beranda</Link>
                        </li>
                        <li>
                            <Link href="#" to="/cons">program</Link>
                        </li>
                        <li>
                            <Link href="#" to="/cons">tentang kami</Link>
                        </li>
                        <li>
                            <Link href="#" to="/cons">hubungi</Link>
                        </li>
                        <li className="last-menu">
                            <Link href="#" to="/cons">donasi</Link>
                        </li>
                    </ul>
                </nav>
                </div>
            </header>
        )
    }
}
