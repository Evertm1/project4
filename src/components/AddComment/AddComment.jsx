import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import * as commentApi from '../../utils/commentApi'; //* is export, not export default

export default function AddCommentForm(){

const [selectedFile, setSelectedFile] = useState('')
    const params = useParams()
    console.log(params)
  const [state, setState] = useState({
    textContent: '',
    responseTrackUrl: '',
    responseTrackName: '',

  })

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }



  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  async function handleAddComment(commentInfo){  // modified handleAddProject on homePage
    console.log(commentInfo, "<- commentInfo")
try {
    const data = await commentApi.create(commentInfo)
    console.log(data, '<- this is the response from the server, this will contain data we want to update our project state')
}catch(err){
    console.log(err)
}
}

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    formData.append('track', selectedFile); // this key matches the key in multer in the 
	// routes/api/posts create route upload.single('photo')
    formData.append('textContent', state.textContent)
    formData.append('responseTrackName', state.responseTrackName)
    formData.append('projectId', params.project_id)
   
	handleAddComment(formData)
    // Have to submit the form now! We need a function!
    
  }



return (
    <Grid textAlign='center' verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Segment>
      
          <Form  autoComplete="off" onSubmit={handleSubmit}>
          
            <Form.Input
                className="form-control"
                name="textContent"
                fluid label= 'Comment'
                value={state.textContent}
                placeholder="Leave a comment for this track or project"
                onChange={handleChange}
                required
            />   
             <Form.Input
                    className="form-control"   //change this- track 1 name
                    name="responseTrackName"
                    value={state.responseTrack1Name}
                    fluid label= 'Response Track'
                    placeholder="Name Your Track (e.g Jazz Flute Solo)"
                    onChange={handleChange}
                    required
            />
            <Form.Input
              className="form-control"
              type="file"
              name="track"
              placeholder="upload track"
              onChange={handleFileInput}
            />   
            <Button
              type="submit"
              className="btn"
            >
              Add Your Track!
            </Button>
          </Form>
        </Segment>
    </Grid.Column>
  </Grid>
    
)
}