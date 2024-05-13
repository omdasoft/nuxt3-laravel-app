<template>
    <Title>{{ post.title }} | {{ title }}</Title>
    <div class="container mx-auto w-1/2 py-8 text-justify">
        <h3 class="text-3xl font-bold">
            <NuxtLink :to="`/posts/1`">{{ post.title }}</NuxtLink>
        </h3>
        <div class="post-meta text-gray-700 flex space-x-2 items-center mt-2">
            <div>{{ format(new Date(post.created_at), 'MMMM dd, yyyy') }}</div>
            <div>&middot;</div>
            <div>{{ post.user.name }}</div>
        </div>
        <div class="post-content mt-4 leading-loose">
            {{ post.body }}
        </div>
    </div>
</template>
<script setup>
import { format } from "date-fns";

const title = useState('title');
const { id } = useRoute().params;
const post = await useNuxtApp().$apiFetch(`/api/posts/${id}`);
</script>