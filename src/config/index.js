const API_URL = 'http://localhost:8000/api/'

function apiUrl (path) {
    return API_URL + path
}

export default {
    api: {
      loginUrl: apiUrl('auth/login/'),
      areasUrl: apiUrl('areas/'),
      usersUrl: apiUrl('users/'),
      subjectsUrl: apiUrl('subjects/')
    }
}
