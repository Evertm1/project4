import React, { useState } from 'react';

import { Button, Form, Grid, Header, Image,  Segment } from 'semantic-ui-react'


export default function AddProjectForm(props){

    const [selectedFiles, setSelectedFiles] = useState([])
    const [state, setState] = useState({
        title: '',
        description: '',  //make sure these match project model
        track1Name: '',
        track2Name: '',


    })
  
    function handleFileInput(e){
        console.log(e.target.files[0], '<- e.target.files[0')
        // let tempArr = [...selectedFiles]
        // tempArr.push(e.target.files[0])
        // console.log(tempArr, '<-tempArr')
        
      setSelectedFiles([...selectedFiles, e.target.files[0]])
      
    }
  
  
    function handleChange(e){
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    }
  
    function handleSubmit(e){
      e.preventDefault()
      console.log(typeof selectedFiles, "<-selectedFiles")         
      const formData = new FormData()
      formData.append('title', state.title)
      formData.append('description', state.description)
      formData.append('track1Name', state.track1Name)
    //   formData.append('track1File', selectedFile)
    //   formData.append('track2Name', state.track2Name)
    //   formData.append('track2File', selectedFile)
    //   formData.append('coverArt', selectedFile)
      formData.append('tracks[]', selectedFiles[0]) // switch this to an array
      formData.append('tracks[]', selectedFiles[1])
    //   formData.append('tracks[]', selectedFiles[2])

      props.handleAddProject(formData)
      // Have to submit the form now! We need a function!
    }
  
  
    return (
      
      <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Segment>
          
              <Form  autoComplete="off" onSubmit={handleSubmit}>
              
                <Form.Input
                    className="form-control"
                    name="title"
                    value={state.title}
                    fluid label= 'Project Title'
                    placeholder="Project Title"
                    onChange={handleChange}
                    required
                />
                 <Form.Input
                    className="form-control"
                    name="description"
                    value={state.description}
                    fluid label= 'Description'
                    placeholder="Describe This Jam"
                    onChange={handleChange}
                    required
                />      
                
                <Form.Input
                    className="form-control"   //change this- track 1 name
                    name="track1Name"
                    value={state.track1Name}
                    fluid label= 'Starter Track'
                    placeholder="Name your starter track (e.g. Blues Guitar Riff)"
                    onChange={handleChange}
                    required
                /> 
                <Form.Input
                  className="form-control"
                  type="file"
                  name="track1File"
                  onChange={handleFileInput}
                  required
                />     
                {/* <Form.Input
                    className="form-control"   //change this- track 1 name
                    name="track2Name"
                    value={state.track2Name}
                    fluid label= 'Track 2'
                    placeholder="Track 2 Name (e.g. Keyboard Chords)"
                    onChange={handleChange}
                    
                />  */}
                {/* <Form.Input
                  className="form-control"
                  type="file"
                  name="track2File"
                  onChange={handleFileInput}
                /> 
                 */}
                <Form.Input
                  className="form-control"
                  type="file"
                  name="coverArt"
                  fluid label= 'Cover Art Image'
                  onChange={handleFileInput}
                  required
                />       
                     
                <Button
                  type="submit"
                  className="btn"
                >
                  Let's jam!
                </Button>
              </Form>
            </Segment>
        </Grid.Column>
      </Grid>
     
    ); 
  }