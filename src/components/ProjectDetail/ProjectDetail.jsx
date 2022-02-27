import React from 'react';

import { Item, Image } from 'semantic-ui-react'
export default function ProjectDetail({project}){

    return (
        <>
        <div id="detail">
        
      <Item.Image size='large' id="detail-image" src={`${project.coverArtUrl}`}/>
        <div id="project-title">{project.title}</div>
        {/* <div>{project.user.username}</div> */}
        <div id="project-description">{project.description}</div>
        <div>{project.trackName}</div>
        <a href={`${project.trackUrl}`} download>Click to Download {project.trackName}</a>
        </div>
        </>
    )
}
