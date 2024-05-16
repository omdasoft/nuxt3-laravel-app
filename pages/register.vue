<template>
    <Title>User Register</Title>
    <div class="container mx-auto w-1/2 py-8">
        <ul v-if="errors.length > 0" class="mb-4 list-disc list-inside text-sm  text-red-600">
            <li v-for="(error, key) in errors" :key="key">
                {{ error }}
            </li>
        </ul>
        <form action="#" class="space-y-6" @submit.prevent="register">
            <div>
                <label for="name" class="block font-semibold">Name</label>
                <input type="text" v-model="name" id="name" class="w-full px-2 py-2 rounded shadow mt-2">
            </div>
            <div>
                <label for="email" class="block font-semibold">Email</label>
                <input type="text" v-model="email" id="email" class="w-full px-2 py-2 rounded shadow mt-2">
            </div>
            <div>
                <label for="password" class="block font-semibold">Password</label>
                <input type="password" v-model="password" id="password" class="w-full px-2 py-2 rounded shadow mt-2">
            </div>
            <div>
                <label for="password_confirm" class="block font-semibold">Password Confirm</label>
                <input type="password" v-model="passwordConfirm" id="password_confirm"
                    class="w-full px-2 py-2 rounded shadow mt-2">
            </div>
            <div>
                <button type="submit" class="inline-block bg-blue-600 hover:bg-blue-700 text-white rounded py-2 px-2">
                    <span v-if="isLoading">Loading</span>
                    <span v-else>Register</span>
                </button>
            </div>
        </form>
    </div>
</template>
<script setup>
definePageMeta({
    middleware: ["guest"]
})
const name = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const isLoading = ref(false)
const errors = ref([])

async function csrf() {
    return await useNuxtApp().$apiFetch('/sanctum/csrf-cookie');
}

async function register() {
    isLoading.value = true
    await csrf()
    try {
        await useNuxtApp().$apiFetch('/register', {
            method: 'POST',
            body: {
                name: name.value,
                email: email.value,
                password: password.value,
                password_confirmation: passwordConfirm.value
            }
        });
        const user = await useNuxtApp().$apiFetch('/api/user')
        const {setUser} = useAuth()
        setUser(user.name)
        window.location.pathname = '/profile'
    } catch (error) {
        isLoading.value = false
        errors.value = Object.values(error.data.errors).flat()
    }
}
</script>