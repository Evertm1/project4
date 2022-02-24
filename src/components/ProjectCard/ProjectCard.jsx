import React from 'react';

import { Image, Item } from 'semantic-ui-react'
import { Link } from "react-router-dom";

function ProjectCard({project, user}) {

    <Item>
      <Item.Image size='tiny' src='/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>{project.title}</Item.Header>
        <Item.Meta></Item.Meta>
        <Item.Description>
          <Image src={`${project.coverArtUrl}`} />
        </Item.Description>
        <Item.Extra>{project.user.username},{project.description}</Item.Extra>
      </Item.Content>
    </Item>

}

export default ProjectCard;

