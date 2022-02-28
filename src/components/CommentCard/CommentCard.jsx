import React from 'react';
import { Segment } from 'semantic-ui-react'
export default function CommentCard({comments}){

    return (
        <Segment raised id="comment">
        <div>Contents of a comment rendered inside of a card</div>
        {comments?.[0]?.textContent ? comments[0].textContent : null }
        </Segment>
    )
}
