import React from 'react';

import { Image, Item, Card } from 'semantic-ui-react'
import { Link } from "react-router-dom";

function ProjectCard({project}) {

    return (
    <Card>
    <Item.Group>
    <Item key={project._id}>
      <Item.Image size='tiny' src={`${project.coverArtUrl}`}/>

      <Item.Content>
          <Link to={`/${project._id}`}>
        <Item.Header as='a'><strong>{project.title}</strong></Item.Header>
        </Link>
        <Item.Meta></Item.Meta>
        <Item.Description>
        By {project.user.username}
        </Item.Description>
        {/* <Item.Extra>{project.user.username},</Item.Extra> */}
      </Item.Content>
    </Item>
    </Item.Group>
    </Card>


    )

}

export default ProjectCard;

