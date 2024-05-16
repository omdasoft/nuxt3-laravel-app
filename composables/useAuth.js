export function useAuth() {
    function setUser(name) {
        localStorage.setItem('user', JSON.stringify({name}))
    }

    function getUser() {
        return JSON.parse(localStorage.getItem('user'))
    }

    function removeUser() {
        localStorage.removeItem('user')
    }

    function checkIsLoggedIn() {
        if (process.client) {
            return localStorage.getItem('user')
        } else {
            return false
        }
    }
    
    const isLoggedIn = checkIsLoggedIn()
    
    return {setUser, getUser, removeUser, isLoggedIn}
}