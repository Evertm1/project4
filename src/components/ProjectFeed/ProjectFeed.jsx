import React from 'react';
import { Card, Dimmer, Segment, Image, Divider } from "semantic-ui-react";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function ProjectFeed({
    projects,
    user
}) {
    return (
       // <span> Project Feed, this will render out each project as a card</span>
        <>
        <h2 id="feed-title">Assembly Line</h2>
        <Card.Group itemsPerRow= {1} stackable centered >
          
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
      </>
    );
}

