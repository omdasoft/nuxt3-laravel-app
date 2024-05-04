<template>
    <div class="post-container py-8">
        <h3 class="text-3xl font-bold"><NuxtLink :to="`/posts/1`">Title Of Post</NuxtLink></h3>
        <div class="post-meta text-gray-700 flex space-x-2 items-center">
            <div>May, 4, 2024</div>
            <div>&middot;</div>
            <div>Emad Aldin Ali</div>
        </div>
        <div class="post-preview leading-relaxed mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, molestias. Aliquam voluptatem enim quam quia
            maxime similique explicabo quaerat hic unde animi, nostrum ex saepe necessitatibus adipisci tenetur autem
            ratione magnam debitis quas consequuntur quasi natus accusantium, nihil earum. Natus?
        </div>
        <div class="mt-4">
            <NuxtLink :to="`/posts/1`" class="bg-blue-700 hover:bg-blue-800 text-white rounded inline-block px-4 py-2">Read More</NuxtLink>
        </div>
    </div>
</template>