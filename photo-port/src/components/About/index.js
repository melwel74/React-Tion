import image from '../../assets/small/commercial/Cartoonify.png';
import React from 'react';

function About() {
    return (
        <section className="my-5">

            <div className="my-2" style={{ width: "125%", backgroundColor: 'green', height: '400px' }}  ></div>
            <h2 id='about'>
                Web Developer

            </h2>
            <img src={image} />
        </section>

    );
}

export default About;