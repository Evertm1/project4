import React from 'react';
import { Card, Dimmer, Segment, Image } from "semantic-ui-react";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function ProjectFeed({
    projects,
    user
}) {
    return (
       // <span> Project Feed, this will render out each project as a card</span>
        <Card.Group itemsPerRow= {1} stackable>
        
          <Segment>
            <Dimmer active inverted>
            </Dimmer>
            {/* <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" /> */}
          </Segment>
          
        {projects.map((project) => {
          return (
            <ProjectCard
              project={project}
              key={project._id}
              user={user}
              
            />
          );
        })}
      </Card.Group>

    );
}

