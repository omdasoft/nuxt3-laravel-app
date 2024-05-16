<template>
    <Title>User Profile</Title>
    <div class="container mx-auto w-1/2 py-8">
        <div>
            <div>Name: {{ user.name }}</div>
            <div>Email: {{ user.email }}</div>
        </div>
        <div class="mt-4">
            <h3 class="text-2xl">My Posts</h3>
            <ul v-if="posts">
                <li v-for="(post, index) in posts" :key="index">
                    <NuxtLink :to="`/posts/${post.id}`" class="text-blue-600 hover:underline">{{ post.title }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    middleware: ["auth"]
})
const user = ref('')
const posts = ref([])
onMounted(async () => {
    user.value = await useNuxtApp().$apiFetch('/api/user')
    posts.value = await useNuxtApp().$apiFetch('/api/user/posts')
})
</script>