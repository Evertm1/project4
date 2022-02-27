import React from 'react';

export default function ProjectDetail({project}){

    return (
        <>
        
        <div>Project details display</div>
        <div>{project.title}</div>
        <div>{project.user}</div>
        <div>{project.description}</div>
        <div>{project.coverArtUrl}</div>
        <div>{project.trackUrl}</div>
        <div>{project.trackName}</div>
        </>
    )
}
