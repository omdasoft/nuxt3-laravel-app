<template>
    <div class="bg-gray-100 min-h-screen text-gray-900">
        <Title>{{ title }}</Title>
        <nav class="bg-white shadow text-lg px-6 py-6">
            <div class="container mx-auto flex items-center justify-between">
                <div>
                    <NuxtLink to="/">Logo</NuxtLink>
                </div>
                <div>
                    <ClientOnly>
                        <ul class="flex space-x-12">
                            <li>
                                <NuxtLink to="/">Home</NuxtLink>
                            </li>
                            <li v-if="isLoggedIn">
                                <NuxtLink to="/create">Create</NuxtLink>
                            </li>
                            <li v-if="!isLoggedIn">
                                <NuxtLink to="/login">Login</NuxtLink>
                            </li>
                            <li v-if="!isLoggedIn">
                                <NuxtLink to="/register">Register</NuxtLink>
                            </li>
                            <li v-if="isLoggedIn">
                                <NuxtLink to="/profile">Profile</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/about">About</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/contact">Contact</NuxtLink>
                            </li>
                            <li v-if="isLoggedIn">
                                <button @click="logout">Logout</button>
                            </li>
                            <li v-if="isLoggedIn">
                                {{ getUser()?.name }}
                            </li>
                        </ul>
                    </ClientOnly>
                </div>
            </div>
        </nav>
        <slot />
    </div>
</template>
<script setup>
const title = useState('title', () => 'Nuxt3 Laravel Blog');
const { $apiFetch } = useNuxtApp();
const { removeUser, isLoggedIn, getUser } = useAuth()

async function logout() {
    try {
        await $apiFetch('/logout', {
            method: 'POST'
        });
        window.location.pathname = '/'
    } catch (error) {
        console.log(error.messege.error);
    } finally {
        removeUser()
        window.location.pathname = '/'
    }
}
</script>
<style scoped>
.router-link-active {
    font-weight: bold;
}
</style>