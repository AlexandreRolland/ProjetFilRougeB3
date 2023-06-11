function getToken() {
    return localStorage.getItem('access_token')
}

function setToken(token) {
    return localStorage.setItem('access_token', token)
}

function removeToken() {
    return localStorage.removeItem('access_token')
}

export const TokenServices = {
    getToken,
    setToken,
    removeToken,
}

