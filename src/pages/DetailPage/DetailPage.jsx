import { useState, useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import Header from '../../components/Header/Header'
import ProjectDetail from '../../components/ProjectDetail/ProjectDetail'
import CommentFeed from '../../components/CommentFeed/CommentFeed'
import AddComment from '../../components/AddComment/AddComment'
import * as projectApi from '../../utils/projectApi'
import { useParams } from 'react-router-dom'

export default function DetailPage(){

    const [project, setProject] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    //grab the param from the browser
    // we define project_id in the app.js /:project_id 
    const { project_id } = useParams()

    console.log(project_id, "<-project_id")

    async function getProject(){
        try {
            const data = await projectApi.getProject(project_id)
            console.log(data, "<- data")
            
            setLoading(()=> false)
            setProject(() => data.project)

        } catch(err){
            console.log(err);
            setLoading(()=> false)
            setError('Project does not exist')
        }

    }

    useEffect(() => {
        getProject()
    }, [])

    if(loading){
        return(
            <>
            <Header/>
            <h1>Loading...</h1>
            </>
        )
    }

    if(error){
        return (
            <>
            <Header/>
            <h1>This project does not exist</h1>
            </>
        )
    }
return (
    <>
    <Header />
    <ProjectDetail project= {project}/>
    <CommentFeed/>
    <AddComment/>
    </>
)
}