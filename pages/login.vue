<template>
    <Title>User Login</Title>
    <div class="container mx-auto w-1/2 py-8">
        <ul v-if="errors.length > 0" class="mb-4 list-disc list-inside text-sm  text-red-600">
            <li v-for="(error, key) in errors" :key="key">
                {{ error }}
            </li>
        </ul>
        <form action="#" class="space-y-6" @submit.prevent="login">
            <div>
                <label for="email" class="block font-semibold">Email</label>
                <input type="text" v-model="email" id="email" class="w-full px-2 py-2 rounded shadow mt-2">
            </div>
            <div>
                <label for="password" class="block font-semibold">password</label>
                <input type="password" v-model="password" id="email" class="w-full px-2 py-2 rounded shadow mt-2">
            </div>
            <div>
                <button type="submit" class="inline-block bg-blue-600 hover:bg-blue-700 text-white rounded py-2 px-2">
                    <span v-if="isLoading">Loading ..</span>
                    <span v-else>Login</span>
                </button>
            </div>
        </form>
    </div>
</template>
<script setup>
const email = ref('')
const password = ref('')
const isLoading = ref(false)
const errors = ref([])

async function csrf() {
    return await useNuxtApp().$apiFetch('/sanctum/csrf-cookie');
}

async function login() {
    isLoading.value = true
    await csrf()
    try {
        await useNuxtApp().$apiFetch('/login', {
            method: 'POST',
            body: {
                email: email.value,
                password: password.value
            }
        });
        window.location.pathname = '/profile'
    } catch (error) {
        isLoading.value = false
        if (error) {
            errors.value = Object.values(error.data.errors).flat()
        }
    }
}
</script>