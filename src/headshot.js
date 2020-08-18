import React, { Component } from 'react';
import styled from 'styled-components';

import CatPanic from './assets/CatPanic.jpg';

const CircularImage = styled.img`
    border-radius: 50%;
    width: 10vh;
    height: 10vh;
    object-fit: cover;
`;

const HeadshotContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const IconContainer = styled.div`
    padding: 0 2vw;
    margin-right: 2vw;
    border-style:none solid none none;

    @media (max-width: 800px) {
        border-style: none;
    }
`;

class Headshot extends React.Component {
    render() {
        return(
            <HeadshotContainer>
                <CircularImage src={CatPanic}/>
                <IconContainer>
                    <p style={{ whiteSpace: 'pre' }}> Nicholas Kwong </p>
                </IconContainer>
            </HeadshotContainer>
        )
    }
}

export default Headshot;