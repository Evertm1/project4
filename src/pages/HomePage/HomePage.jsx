import React, { useState, useEffect } from "react";
import Header from '../../components/Header/Header';
import AddProject from '../../components/AddProject/AddProject';
import ProjectFeed from '../../components/ProjectFeed/ProjectFeed';
import * as projectApi from '../../utils/projectApi'; //* is export, not export default
import Accordion from '../../components/Accordion/Accordion';
import Banner from '../../components/Banner/Banner';
import userService from "../../utils/userService";
import { Grid, Divider } from "semantic-ui-react";

export default function HomePage({user, handleLogout}) {
    
    const [projects, setProjects] = useState([])
    const [error, setError] = useState("");
    // all api calls to crud projects should be defined here, then passed down to a componenet
    //if they need to be invoked after some ui

    async function handleAddProject(projectInfo){
            console.log(projectInfo, "<- projectInfo")
        try {
            const data = await projectApi.create(projectInfo)
            console.log(data, '<- this is the response from the server, this will contain data we want to update our project state')
            setProjects(projects => [data.project, ...projects]) //if any posts exist, they will be emptied into new array
        }catch(err){
            console.log(err)
        }
    }

    async function getProjects() {
        try {
          const data = await projectApi.getAll();
          console.log(data, " this is data,");
          setProjects([...data.projects]);
          //setLoading(false);
        } catch (err) {
          console.log(err.message, " this is the error");
          setError(err.message);
        }
      }
    

    async function handleDeleteProject(projectId){
        console.log(projectId, "<- projectId")
    try {
        const data = await projectApi.deleteProject(projectId)
        console.log(data, '<- this is the response from the server, this will contain data we want to delete')
        // setProjects(projects => [data.project, ...projects]) //if any posts exist, they will be emptied into new array
    }catch(err){
        console.log(err)
    }
}





      // useEffect runs once
      // the component is first rendered (whenever you first view the component)
      // Component Lifecycle in react
      useEffect(() => {
        getProjects();
      }, []); //[handleDeleteProject]
    
    if (error) {
        return (
          <>
            <Header handleLogout={handleLogout} user={user} />
            {/* <ErrorMessage error={error} />; */}
          </>
        );
      }

    return(
        <>
        <Header user={user} handleLogout={handleLogout} />
        <Banner/>
     
        {/* <AddProject handleAddProject={handleAddProject}/> */}
        <Accordion handleAddProject={handleAddProject}/>
        {/* <Divider/> */}

        <div id="project-feed">
        
        <Grid centered>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                <ProjectFeed
                    projects={projects}
                    user={user}
                    handleDeleteProject={handleDeleteProject}
                />
                </Grid.Column>
            </Grid.Row>
        </Grid>

        </div>
    </>
  );
} 