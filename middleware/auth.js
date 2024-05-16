
export default defineNuxtRouteMiddleware((to, from) => {
    const { isLoggedIn } = useAuth()
    if (!isLoggedIn) {
      // return navigateTo('/login')
      if (process.client) {
        window.location.pathname = '/login'
      }
    }
  })
  