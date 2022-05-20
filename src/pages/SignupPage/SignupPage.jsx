import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";


export default function SignUpPage(props) {

  const [error, setError] = useState('')
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConf: '',
  })

  const navigate = useNavigate(); // navigate hook from reac-router

  function handleChange(e){
    setState({
      ...state, //tranferring all of the keys from the state object defined above (username, email, etc)
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e){
    e.preventDefault();

    try {

      await userService.signup(state)
      props.handleSignUpOrLogin() // <-- will get token from local storage and decode, set the user state in app.js component

      navigate('/') // route the user to our home compoenent
    } catch(err){
      setError(err.message)
    }
  }

  return (
    <body id="login-signup-body">
    <br></br>
    <h1 id="login-signup-title">Jam Factory</h1>
    <br></br>
    <br></br>
    
    
    <div id="login-container">
    <Grid textAlign="center" 
    verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          <Image src="../../images/jam.png" /> Sign Up
        </Header>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              name="username"
              placeholder="username"
              value={state.username}
              onChange={handleChange}
              required
            />
            <Form.Input
              type="email"
              name="email"
              placeholder="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="passwordConf"
              type="password"
              placeholder="confirm password"
              value={state.passwordConf}
              onChange={handleChange}
              required
            />

            <Button type="submit" className="btn">
              Signup
            </Button>
          </Segment>
          {error ? <ErrorMessage error={error} /> : null}
        </Form>
      </Grid.Column>
    </Grid>
    </div>
    
    
    </body>
      );
}
