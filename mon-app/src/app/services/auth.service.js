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

export const AuthServices = {
    signIn,
} 