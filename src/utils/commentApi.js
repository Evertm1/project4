import tokenService from "./tokenService"

const BASE_URL = '/api/comments/'

export function create(commentInfoFromForm){
    console.log(commentInfoFromForm, "<- comment info from form")
    return fetch(BASE_URL, {
        method: 'POST',
        body: commentInfoFromForm,
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken(),
            
        }
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Error submitting the form');
    }) 
}