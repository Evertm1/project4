import React from 'react';
import { Segment } from 'semantic-ui-react'
import { Item, Card } from 'semantic-ui-react'
export default function CommentCard({comment}){

    return (
        <Card>
        <Item.Group> 
       <Item key={comment?._id ? comment._id : null}>
          
    
          <Item.Content>
            {comment?.textContent ? comment.textContent : null}
            {comment?.responseTrackName ? comment.responseTrackName : null}
            
            <Item.Meta></Item.Meta>
            <Item.Description>
            {/* By {project.user.username} */}
            
            </Item.Description>
            {/* <Item.Extra>{project.user.username},</Item.Extra> */}
          </Item.Content>
        </Item>
        </Item.Group>
        </Card>
    
    )
}
