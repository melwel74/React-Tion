import React from 'react';
import Project from '../Project';
import image1 from '../../assets/small/commercial/1.jpg';
import image2 from '../../assets/small/portraits/3.jpg';
import image3 from '../../assets/small/food/1.jpg';
import image4 from '../../assets/small/landscape/4.jpg';

function Gallery() {
    return (
        <section className="my-5">

           <h2>My Projects</h2>
           <Project image= {image1} title={'Run Buddy'} link={'https://melwel74.github.io/Run-Buddy-4.0/'}></Project>
           <Project image={image2} title={'React Tion'} link={'https://github.com/melwel74/React-Tion.git'}></Project>
           <Project image= {image3} title={'Taco-Loca-Locator'} link={'https://jamestw13.github.io/Taco-Loca-tor/'}></Project>
           <Project image={image4} title={'Social-Distance'} link={'https://melwel74.github.io/Social-Distance/'}></Project>
        </section>

    );
}

export default Gallery;