import React from 'react';
import Carousel from './Carousel';
import Header from './Header';





const Skills = (props) => {

    const { title } = props

    return (
        <div>
            <div className="content-body">
                <div className="skills-background banner">
                    <Header title={title} />
                    <div className="top-banner-title">
                        <h1 className="page-title">Skills</h1>
                        <p>Here are my skills</p>
                    </div>
                </div>
                <p className="content content-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div>
                    <Carousel/>
                </div>
            </div>
        </div>
    )
}

export default Skills;
