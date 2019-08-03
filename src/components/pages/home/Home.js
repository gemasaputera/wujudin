import React, { Component } from 'react';
import './css/styles.css';
import Button from './../../elements/Button'
import Card from '../../elements/MiniCard'
import imgHome from './../../../img/banner/banner-01.webp';
import icSeminar from './../../../img/icons/seminar.png';
import icStudent from './../../../img/icons/student.png';
import icGoodwill from './../../../img/icons/goodwill.png';

export class Home extends Component {
    render() {
        return (
            <React.Fragment>
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
                        <Button className={'btn-go'} title={'Get Started'}>GET STARTED </Button>
                    </div>
                </section>
                <div className="g-container">
                    <section className="default-mid">
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
            </React.Fragment>
        )
    }
}

export default Home
