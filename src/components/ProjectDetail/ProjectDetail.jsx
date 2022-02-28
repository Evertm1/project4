import React from 'react';

import { Item, Image, Segment } from 'semantic-ui-react'
export default function ProjectDetail({project}){

    return (
        <>
    
      <Item.Image size='large' id="detail-image" src={`${project.coverArtUrl}`}/>
       <h3 id="detail-title">{project.title}</h3>
       <Segment id="detail-segment" raised>
        <span>Project Started by: (project.user.username) </span>
        {/* <div>{project.user.username}</div> */}
        <div id="project-description"><em>{project.description}</em></div>
        <a href={`${project.trackUrl}`} download><strong>Download {project.trackName}</strong></a>
        
        </Segment>
        </>
    )
}
