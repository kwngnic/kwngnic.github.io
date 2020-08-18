import React, { Component } from 'react';
import styled from 'styled-components';

import CS_246 from '../assets/notes/CS_246.zip';
import CS_454 from '../assets/notes/CS_454.zip';
import PHIL_256 from '../assets/notes/PHIL_256.zip';
import PSYCH_232 from '../assets/notes/PSYCH_232.zip';
import SCI_238 from '../assets/notes/SCI_238.zip';

const NotesTitle = styled.div`
    margin: 3vh 30vw;
    font-size: 30px;
`;

const Card = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.3);
    padding: 10px;
    transition: 0.3s;
    margin: 3vh 30vw;
    height: 10vh;

    &:hover {
        box-shadow: 0 3px 5px 0 rgba(0,0,0,0.5);
    }
`;

const NotesLink = styled.a`
    padding: 5px;
    color: black;
`;

class Notes extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <NotesTitle id="note_section">Notes</NotesTitle>
                <Card>
                    <NotesLink href={CS_246}>CS 246</NotesLink>
                    <NotesLink href={CS_454}>CS 454</NotesLink>
                    <NotesLink href={PHIL_256}>PHIL 256</NotesLink>
                    <NotesLink href={PSYCH_232}>PSYCH 232</NotesLink>
                    <NotesLink href={SCI_238}>SCI 238</NotesLink>
                </Card>
            </div>
        )
    }
};

export default Notes;
