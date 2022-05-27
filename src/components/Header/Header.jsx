import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment } from "semantic-ui-react";

export default function PageHeader({ user, handleLogout }) {
    console.log(user, 'user in header')
  return (
    <Segment clearing id="header"> 
      <Header as="h2" floated="right">
        {/* <Link to="/">
          <Icon name="home"></Icon>
        </Link> */}
        <Link to="/login" onClick={handleLogout} id='logout'>
          Logout {user?.username ? user.username : null }
        </Link>
      </Header>
      <Header as="h2" floated="left">
        <Link to="/">
          {/* <Image
            src="../../images/jam.png"
            fluid
            size= 'mini'
          ></Image> */}
          <div id="header-logo-text">JF</div>
        </Link>
      </Header>
    </Segment>
  );
}
