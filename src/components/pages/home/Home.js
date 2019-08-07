import React, { Component } from 'react';
import './css/styles.css';
import { Link } from 'react-router-dom';
import Button from './../../elements/Button'
import Card from '../../elements/MiniCard'
import imgHome from './../../../img/banner/banner-01.webp';
import imgProgram from './../../../img/banner/banner-02.webp';
import icSeminar from './../../../img/icons/seminar.png';
import icStudent from './../../../img/icons/student.png';
import icGoodwill from './../../../img/icons/goodwill.png';

export class Home extends Component {
    render() {
        const slider = ('hello'
        );

        return (
            <>
                <section className="home-banner">
                    <img className="bnr-slide" src={imgHome} alt="home page"></img>
                    <div className="home-caption">
                        <h1 className="title-cap">cerita sukses</h1>
                        <p className="subtitle-cap">Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a 
                        type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining 
                        essentially unchanged.</p>
                        <a href="#started">
                            <Button className={'btn-primary'} title={'Get Started'}>get started </Button>
                        </a>
                    </div>
                </section>
                <div className="g-container">
                    <section id="started" className="default-mid">
                        <div className="title-wrapper">
                            <h2 className="title-section">
                                <span className="font-bold">Wujud</span>kan mimpi,<br /> 
                                berkolaborasi membangun negeri
                            </h2>
                            <div className="separator"></div>
                            <p className="subtitle-section">Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of 
                                type and scrambled it to make a type specimen 
                                book. It has survived not only five centuries.</p>
                        </div>
                    </section>
                    <section className="default-mid justify-content-around" style={{ paddingBottom: '10rem'}}>
                        <Card 
                            ic={icSeminar} 
                            mainStatus={18} 
                            mainCategory={'pengajar'} />
                        <Card 
                            ic={icStudent} 
                            mainStatus={20} 
                            mainCategory={'siswa'} />
                        <Card 
                            ic={icGoodwill} 
                            mainStatus={2} 
                            mainCategory={'donatur'} />
                    </section>
                </div>
                <section className="blue-fluid">
                    <div className="g-container">
                        <div className="wrapper-fluid">
                            <div className="item1">
                                <h1><span className="font-bold">Ayo</span> bersama wujudkan mimpi,<br />
                                    para anak bangsa!</h1>
                            </div>
                            <div className="item2">
                                <Link to="/cons">
                                    <Button className={'btn-primary btn-big'} title={'Get Started'}>
                                        donasi
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="g-container">
                    <section className="default-mid">
                        <div className="title-wrapper">
                            <h2 className="title-section">
                                Program Kami
                            </h2>
                            <div className="separator"></div>
                            <p className="subtitle-section">Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of 
                                type and scrambled it to make a type specimen 
                                book. It has survived not only five centuries.</p>
                        </div>
                    </section>
                    <section className="default-mid justify-content-around" style={{ paddingBottom: '10rem'}}>
                        <div className="wrapper-imgprogram">
                            <img className="img-program" src={imgProgram} alt="Program bimbel gratis" />
                        </div>
                        <div className="program-caption">
                            <h3><span className="font-bold">Bimbel</span> Gratis</h3>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <Link to="/cons">
                                    <Button className={'btn-primary blue'} title={'Get Started'}>
                                        lihat program
                                    </Button>
                                </Link>
                        </div>
                    </section>
                </div>
                {slider}
            </>
        )
    }
}

export default Home;