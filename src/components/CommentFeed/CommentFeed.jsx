import React from 'react';
import CommentCard from "../CommentCard/CommentCard";
import { Card } from "semantic-ui-react";
export default function CommentFeed({comments, user, key}){

    return (
        <>
        
        <h2 >Response Tracks</h2>
        <Card.Group itemsPerRow= {1} stackable centered >
          
        {comments?.map((comment) => {
          return (
            <CommentCard
              comment={comment}
              key={comment._id}
              user={user}
              
            />
          );
        })}
      </Card.Group>
      </>
    )
}
