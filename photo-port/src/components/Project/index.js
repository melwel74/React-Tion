import React from 'react';


function Project(props) {

    return (
        <div>
            <img src={props.image}alt=""/>
            <a href={props.link} className="my-5">
                <div>
                    <h2>{props.title}</h2>
                </div>
            </a>
        </div>



    );
}

export default Project;
