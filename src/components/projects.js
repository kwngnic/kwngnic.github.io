import React, { Component } from 'react';
import styled from 'styled-components';

import ProjectsSquare from './projectsSquare';

import { faShoppingBasket, faHeadphones } from '@fortawesome/free-solid-svg-icons';

const ProjectsTitle = styled.div`
    margin: 3vh 30vw;
    font-size: 30px;
`;

class Projects extends React.Component {
    render() {
        return(
            <div>
                <ProjectsTitle id="project_section"> Projects </ProjectsTitle>
                <ProjectsSquare 
                    title="Music By Mood" 
                    icon={faHeadphones}
                    description="Application that analyzed a users' music library utilizing the EchoNest music analysis api, and sorted them in folders, based on the song's tempo and volume. Used: Python, EchoNest API, TkInter."
                    link="https://github.com/Will-Lo/Music-by-Mood"
                />
                <ProjectsSquare
                    title="Recipe Finder"
                    icon={faShoppingBasket}
                    description="Application that would provide a list of recipes that the user could make, once given a list of ingredients. Used: Python, Edamam API, Kivy."
                    link="https://github.com/Will-Lo/Food-Finder"
                />
            </div>
        )
    }
}

export default Projects;