import React, { Component } from 'react'
import imgConstruction from './../../../img/design/design_01.webp'

export class Construction extends Component {
    render() {
        return (
            <div className="g-container">
                <section className="default-sec" style={{ paddingTop: '6.2rem'}}>
                    <div>
                        <h2 className="title-sec">Easy! we're still working it!</h2>
                        <small>No worries. Try again later, we're already on it.</small>
                    </div>
                    <img className="img-construction" src={imgConstruction} alt="under construction" />
                </section>
            </div>
        )
    }
}

export default Construction
