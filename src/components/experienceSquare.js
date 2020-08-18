import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: row;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.3);
    padding: 10px;
    transition: 0.3s;
    margin: 3vh 30vw;
    height: 10vh;
    overflow-y: auto;

    &:hover {
        box-shadow: 0 3px 5px 0 rgba(0,0,0,0.5);
    }
`;

const CardImage = styled.img`
    object-fit: contain;
    min-width: 15%;
    max-width: 15%;
    padding-right: 5%;

    @media (max-width: 800px) {
        display: none;
    };
`;

const CardTitle = styled.div`
    font-size: 1.7vh;
    font-weight: bold;
    padding-bottom: 3px;
`;

const CardDesc = styled.div`
    display:flex;
    flex-direction: column;
    font-size: 1.2vh;
`;

class ExperienceSquare extends React.Component {

    constructor(props) {
        super(props);
        this.state = {src: ""};
    };

    checkImg() {
        try {
            const src = require(`../assets/${this.props.title}.png`);
            this.setState({imgSrc: src});
        } catch (e) {
            this.setState({imgSrc: require("../assets/CatPanic.jpg")});
        }
    };

    componentDidMount() {
        this.checkImg();
    };

    render() {
        return (
            <Card>
                <CardImage src={this.state.imgSrc}/>

                <CardDesc>
                    <CardTitle>
                        {this.props.title}
                    </CardTitle>
                    <br/>
                    {this.props.description}
                </CardDesc>
            </Card>
        )
    };
};

export default ExperienceSquare;
