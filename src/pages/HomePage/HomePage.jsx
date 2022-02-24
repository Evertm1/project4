import React, { useState } from "react";
import Header from '../../components/Header/Header';
import AddProject from '../../components/AddProject/AddProject';
import ProjectFeed from '../../components/ProjectFeed/ProjectFeed';
import * as projectApi from '../../utils/projectApi'; //* is export, not export default
import userService from "../../utils/userService";
import { Grid } from "semantic-ui-react";
export default function HomePage() {
    
    const [projects, setProjects] = useState([])
    // all api calls to crud projects should be defined here, then passed down to a componenet
    //if they need to be invoked after some ui

    async function handleAddProject(projectInfo){
            console.log(projectInfo, "<- projectInfo")
        try {
            const data = await projectApi.create(projectInfo)
            console.log(data, '<- this is the respinse from the server, this will contain data we want to update our project state')
            setProjects(projects => [data.project, ...projects])
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
        <Header />
        <AddProject handleAddProject={handleAddProject}/>
        <ProjectFeed projects={projects}/>
        </>

    );
    
}