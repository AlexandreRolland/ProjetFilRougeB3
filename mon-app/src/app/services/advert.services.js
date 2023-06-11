import { TokenServices } from "./token.services";

async function createAdvert(advert) {
    return await fetch(`${process.env.REACT_APP_API_URL}/annonce`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + TokenServices.getToken()
            
        },
        body: JSON.stringify(advert)
    })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(error => console.log(error));
}

async function getAdverts() {
    return await fetch(`${process.env.REACT_APP_API_URL}/annonce`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + TokenServices.getToken()
        },
    })
        .then(response => response.json())
        .catch(error => console.log(error));
        
}


export const AdvertService = {
    getAdverts,
    createAdvert,
}

