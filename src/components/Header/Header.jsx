import React from 'react';

import {Header, Segment} from 'semantic-ui-react'

export default function pageHeader(){
    return(
        <Segment>
            <Header as ='h2' >
                This is the header
            </Header>
        </Segment>
    )
}