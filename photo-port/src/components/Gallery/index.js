import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helper';
import photo from "../../assets/small/commercial/1.jpg";

function Gallery() {
    const currentCategory = {
        name: "Commercial",
        description:
            "Photos of grocery stores, food trucks, and other commercial projects",
    };
    return (
        <section>
            <h1>{currentCategory.name}</h1>
            <p>{currentCategory.name}</p>
            <div>
                
                
            </div>
            

        </section>
    );
}
export default Gallery;