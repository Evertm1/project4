import React from 'react';

import { Image, Item, Card, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";




function ProjectCard({project, handleDeleteProject, user}) {

  function clickHandler() {

    console.log( project._id, '<- click handler invoked projectId')
    handleDeleteProject(project._id)
  }


    return (
    <Card>
    <Item.Group>
    <Item key={project._id}>
      <Item.Image size='tiny' id="card-image" src={`${project.coverArtUrl}`}/>

      <Item.Content>
          <Link to={`/${project._id}`}>
        <Item.Header as='a'><strong>{project.title}</strong></Item.Header>
        </Link>
        <Item.Meta></Item.Meta>
        <Item.Description>
        {/* By {project.user.username} */}
        By {project.user?.username ? project.user.username : null }
        </Item.Description>
        {user?.username === project.user.username ? <Button onClick={clickHandler} id="delete-button">Delete</Button> : null }
        
        
        {/* <Item.Extra>{project.user.username},</Item.Extra> */}
      </Item.Content>
    </Item>
    </Item.Group>
    </Card>


    )

}

export default ProjectCard;

