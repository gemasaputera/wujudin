import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="g-container flx">
                    <div className="desc">
                    <h2>WujudIn</h2>
                    <p>Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="nav-footer">
                    <ul>
                        <li> <p className="footer-title">Navigasi</p> </li>
                        <li><Link href="#" to="/">beranda</Link></li>
                        <li><Link href="#" to="/cons">program</Link></li>
                        <li><Link href="#" to="/cons">testimoni</Link></li>
                    </ul>
                    </div>
                    <div className="nav-footer">
                    <ul>
                        <li> <p className="footer-title">Legal</p> </li>
                        <li><Link href="#" to="/cons">term</Link></li>
                        <li><Link href="#" to="/cons">legal</Link></li>
                        <li><Link href="#" to="/cons">privacy</Link></li>
                    </ul>
                    </div>
                    <div className="nav-footer-last">
                    <ul>
                        <li> <p className="footer-title">Contact Us</p> </li>
                        <li><a href="#">term</a></li>
                        <li><a href="#">legal</a></li>
                        <li><a href="#">privacy</a></li>
                    </ul>
                    </div>
                </div>
            </footer>
        )
    }
}
