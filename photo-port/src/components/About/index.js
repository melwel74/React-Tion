import image from '../../assets/small/commercial/Cartoonify.png';
import React from 'react';

function About() {
    return (
        <section className="my-5">

            <div className="my-2" style={{ width: "100%", backgroundColor: '#090C9B', height: '300px' }}  ></div>
            <h2 id='about'>
                Just a newb trying to learn how to code
            
            </h2>
            <img src={image}/>
        </section>

    );
}

export default About;