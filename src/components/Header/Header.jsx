import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";

export default function PageHeader({ user, handleLogout }) {
    console.log(user, 'user in header')
  return (
    <Segment clearing id="header"> 
      <Header as="h2" floated="right">
        {/* <Link to="/">
          <Icon name="home"></Icon>
        </Link> */}
        <Link to="/login" onClick={handleLogout}>
          Logout
        </Link>
      </Header>
      <Header as="h2" floated="left">
        <Link to="/">
          <Image
            src="../../images/jam.png"
            fluid
            size= 'mini'
          ></Image>
        </Link>
      </Header>
    </Segment>
  );
}
