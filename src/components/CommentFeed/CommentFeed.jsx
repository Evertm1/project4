import React from 'react';
import CommentCard from "../CommentCard/CommentCard";
export default function CommentFeed({comments}){

    return (
        <CommentCard comments={comments}/>
    )
}
