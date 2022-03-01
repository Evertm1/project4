import tokenService from "./tokenService"

const BASE_URL = '/api/projects/'

export function create(projectInfoFromForm){
    console.log(projectInfoFromForm, "<- projectinfo from form")
    return fetch(BASE_URL, {
        method: 'POST',
        body: projectInfoFromForm,
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken(),
            
        }
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Error submitting the form');
    }) 
}

export function getAll() {
	return fetch(BASE_URL, {
	  headers: {
		'Authorization': 'Bearer ' + tokenService.getToken()
	  }
	})
	.then(res => {
		if(res.ok) return res.json()
		throw new Error('Problem Fetching Gel All')
	})	
  }

export function getProject(project_id) {

    return fetch(BASE_URL + project_id, {
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
          }
    }).then(res => {
        if(res.ok) return res.json()
        throw new Error('Project not found')
    })

}

export function deleteProject(project_id){
    console.log(project_id, "<- project_id from projectapi")
    return fetch(BASE_URL + project_id, {
        method: 'DELETE',
        body: project_id,
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken(),
            
        }
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Error deleting project');
    }) 
}