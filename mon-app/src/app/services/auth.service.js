async function signIn (credentials) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    const data = await response.json() 
    return data
}


async function signUp (credentials) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    const data = await response.json() 
    return data
}

async function getUserFromToken(token) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/user`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    const userData = await response.json() 
    return userData
}

export const AuthServices = {
    signIn,
    signUp,
    getUserFromToken
}
