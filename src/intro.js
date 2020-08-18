import React, { Component } from 'react';
import styled from 'styled-components';

const IntroPara = styled.p`
    text-align: center;
    font-size: 2vh;
    margin: 0 auto;
    padding: 5px;
`;

class Intro extends React.Component {
    render() {
        return(
            <IntroPara> Welcome to my personal website! I am a graduate from the University of Waterloo with a Bachelors in Computer Science.
                Enjoy browsing through and hopefully you can learn something about me or find something interesting!
            </IntroPara>
        );
    }
}

export default Intro;