import React, { Component } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardButton = styled.a`
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.3);
    padding: 10px;
    transition: 0.3s;
    margin: 3vh 30vw;

    color: inherit;
    text-decoration: none;

    &:hover {
        box-shadow: 0 3px 5px 0 rgba(0,0,0,0.5);
    }
`;

const ProjectTitle = styled.div`
	display: flex;
`;

const Icon = styled.div`
	padding-left: 3px;
`;

class ProjectsSquare extends React.Component {
	render() {
		return (
			<div>
				<CardButton href={this.props.link}>
					<ProjectTitle>
						<FontAwesomeIcon style={{paddingRight: "5px"}} icon={this.props.icon}/>
						{this.props.title}
					</ProjectTitle>
					<br/>
					{this.props.description}
				</CardButton>
			</div>
		)
	}
};

export default ProjectsSquare;