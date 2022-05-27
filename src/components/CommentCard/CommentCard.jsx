import React from 'react';
import { Segment } from 'semantic-ui-react'
export default function CommentCard({comment}){

    return (
      <>
        <Segment id="detail-segment" raised>
        
        <div> <strong>Response from {comment.user?.username ? comment.user.username : null }</strong></div>
        <div id="project-description"><em>{comment.textContent}</em></div>
        <a href={`${comment.responseTrackUrl}`} download><strong>{comment.responseTrackName}</strong></a>
        
        </Segment>
        </>
    )
}
