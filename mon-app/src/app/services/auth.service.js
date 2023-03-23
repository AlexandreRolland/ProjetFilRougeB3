
async function signIn (credentials) {
    const response = await fetch('http://localhost:8000/api/auth/signin', {
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