import React, { Component } from 'react';
import styled from 'styled-components';

import ExperienceSquare from './experienceSquare'

const ExperienceTitle = styled.div`
    margin: 3vh 30vw;
    font-size: 30px;
`;

class Experience extends React.Component {
    render() {
        return(
            <div>
                <ExperienceTitle id="experience_section"> Experience </ExperienceTitle>
                <ExperienceSquare 
                    title="XE" 
                    description={"At XE I worked as a Full Stack Developer for the Sites Team. Part of my responsibilities included helping to develop " +
                    "reusable and accessible React Components for use in XE's redesign of their Money Transfer Marketing Pages, and assisting in refactoring " +
                    "portions of their PHP backend code. I also created AWS Lambda scripts to improve developer quality of life by generating automatic merge requests for files that " +
                    "would require manual developer intervention and validation."}
                />
                <ExperienceSquare title="Accedo" description={"As a Full Stack Developer at Accedo, I developed an interactive web-based editor for clients to use in order to " +
                "design their desired multi-platform media applications, using AngularJS and Node.js. I also led the implementation of Google Analytics functionality into the editor " +
                "to track feature usage."}
                />
                <ExperienceSquare title="OANDA" description={"As a Software Developer at OANDA I was a part of the team in charge of their sign-up portal. I refactored their legacy AngularJS " +
                "codebase and also implemented end-to-end and unit tests with Protractor and Jasmine. I also facilitated a team-wide shift from Bower and npm to Yarn."}
                />
                <ExperienceSquare title="Next HealthCare Technologies Inc" description={"At Next Healthcare Technologies, my role as a Software Architect had me developing for CareCDS, an " +
                "online web and tablet application for use in medical waiting rooms using Javascript, Knockout and Durandal. Features I developed included supplementing the CareCDS medical " +
                "report builder with a rich text editor with CKEditor."}
                />
                <ExperienceSquare title="VideoStream" description={"As a Support Software Specialist at VideoStream, my responsibilities included facilitating user feedback and support requests " +
                "about the Videostream Chrome Extension, determining which features to add and which pressing bugs to prioritize based on these tickets. Among these features is one that allowed users to " +
                "easily modify or cancel their subscriptions, by using Javascript and the Paypal and Stripe APIs."}
                />
            </div>
        )
    }
}

export default Experience;