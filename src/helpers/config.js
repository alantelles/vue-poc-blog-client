export const urls = {
    typi: 'https://jsonplaceholder.typicode.com/posts/2',
    apiBase: 'http://localhost:3030/',
    e404: 'zika'
}
export const endpoints = {
    users: urls.apiBase + 'users',
    auth: urls.apiBase + 'authentication',
    posts: urls.apiBase + 'posts',
}
export const defHeaders = function () {
    return {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
    }
}

export function isAuthenticated () {
    return (
        (sessionStorage.getItem('accessToken') !== null) &&
        (sessionStorage.getItem('accessToken') !== '')
      )
}

