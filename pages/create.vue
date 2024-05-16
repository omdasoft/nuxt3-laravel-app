<template>
    <Title>Create Post</Title>
    <div class="container mx-auto w-1/2 py-8">
        <ul v-if="errors.length > 0" class="mb-4 list-disc list-inside text-sm  text-red-600">
            <li v-for="(error, key) in errors" :key="key">
                {{ error }}
            </li>
        </ul>
        <form action="#" class="space-y-6" @submit.prevent="createPost">
            <div>
                <label for="title" class="block font-semibold">Title</label>
                <input type="text" v-model="title" id="title" class="w-full px-2 py-2 rounded shadow mt-2">
            </div>
            <div>
                <label for="body" class="block font-semibold">Body</label>
                <textarea name="body" v-model="body" id="body" cols="30" rows="10"
                    class="w-full rounded shadow mt-2 px-2 py-2">
                </textarea>
            </div>
            <div>
                <button type="submit" class="inline-block bg-blue-600 hover:bg-blue-700 text-white rounded py-2 px-2">
                    <span v-if="isLoading">Loading</span>
                    <span v-else>Create Post</span>
                </button>
            </div>
        </form>
    </div>
</template>
<script setup>
definePageMeta({
    middleware: ["auth"]
})
const title = ref('')
const body = ref('')
const isLoading = ref(false)
const errors = ref([])

async function createPost() {
    isLoading.value = true
    try {
        const post = await useNuxtApp().$apiFetch('/api/posts', {
            method: 'POST',
            body: {
                title: title.value,
                body: body.value
            }
        });

        isLoading.value = false
        title.value = ''
        body.value = ''
        navigateTo('/')
    } catch (error) {
        isLoading.value = false
        errors.value = Object.values(error.data.errors).flat()
        console.log(errors.value)
    }
}
</script>