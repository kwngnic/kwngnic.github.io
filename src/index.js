import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Header from './header';
import Intro from './intro';
import HeadShot from './headshot';
import Experience from './components/experience';
import Projects from './components/projects';
import Notes from './components/notes';

import css from './styles/main.css';

const MasterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const IntroContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5vh 25vw;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const App = () => (
    <MasterContainer>
        <Header/>
        <IntroContainer>
            <HeadShot/>
            <Intro/>
        </IntroContainer>
        <Experience/>
        <Projects/>
        <Notes/>
    </MasterContainer>
)

ReactDOM.render(<App/>, document.getElementById('root'));
