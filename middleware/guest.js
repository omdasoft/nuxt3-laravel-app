export default defineNuxtRouteMiddleware((to, from) => {
    const { isLoggedIn } = useAuth()
    if (isLoggedIn) {
        // return navigateTo('/profile')
        if (process.client) {
            window.location.pathname = '/profile'
        }
    }
  })
  