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