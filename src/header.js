import React, { Component } from 'react';
import styled from 'styled-components';

import Resume from './assets/NK_Resume.pdf';

const TitleBar = styled.h1`
    display: flex;
    justify-content: space-evenly;
    position: sticky;
    top: 0;

    width: 100%;
    z-index: 100;

    font-size: 3vh;
    background: white;
    opacity: 0.7;
    border-style: none none solid none;
    border-color: black;

    @media (max-width: 800px) {
        font-size: 3vw;
    };`;
//    background: #D3E3E8;

const Button = styled.a`
    border-radius: 3px;
    background: transparent;
    color: black;
    text-decoration: none;
`;

//#4c5c96

class Header extends React.Component {
    render() {
        return (
            <TitleBar>
                <Button href="#experience_section">
                    Experience
                </Button>
                <Button href="#project_section">
                    Projects
                </Button>
                <Button href="#note_section">
                    Notes
                </Button>
                <Button href={Resume} target="_blank">
                    Resume
                </Button>
                <Button href="mailto:kwng.nic@gmail.com">
                    Contact Me
                </Button>

            </TitleBar>
        );
    }
}

export default Header;