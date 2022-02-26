import React from 'react';

import { Image, Item } from 'semantic-ui-react'
import { Link } from "react-router-dom";

function ProjectCard({project}) {

    return (
    <Item.Group>
    <Item key={project._id}>
      <Item.Image size='tiny' src={`${project.coverArtUrl}`}/>

      <Item.Content>
          <Link to={`/${project._id}`}>
        <Item.Header as='a'>{project.title}</Item.Header>
        </Link>
        <Item.Meta></Item.Meta>
        <Item.Description>
        {project.description}
        </Item.Description>
        <Item.Extra>{project.user.username},</Item.Extra>
      </Item.Content>
    </Item>
    </Item.Group>



    )

}

export default ProjectCard;

