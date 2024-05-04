<template>
    <div class="container mx-auto w-1/2 py-8 text-justify">
        <h3 class="text-3xl font-bold">
            <NuxtLink :to="`/posts/1`">Title Of Post</NuxtLink>
        </h3>
        <div class="post-meta text-gray-700 flex space-x-2 items-center mt-2">
            <div>May, 4, 2024</div>
            <div>&middot;</div>
            <div>Emad Aldin Ali</div>
        </div>
        <div class="post-content mt-4 leading-loose">
            {{ $route.params.id }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel itaque enim
            consequuntur, hic nemo excepturi
            laborum pariatur labore obcaecati placeat laboriosam debitis nobis ratione aliquid quasi iste veniam
            corrupti
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse eos aliquam necessitatibus eum
            praesentium
            illum nam dolor eligendi, impedit placeat ad odit perspiciatis vero asperiores facilis optio facere
            nesciunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti tempora ut amet eum enim repellat,
            itaque rerum doloribus aliquam eos tempore reiciendis velit suscipit deserunt accusantium! Tempora, alias
            esse?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident distinctio natus eveniet nobis suscipit
            reprehenderit fugiat esse rerum at architecto debitis veniam repellat libero omnis, blanditiis accusantium!
            Explicabo, qui. Perspiciatis.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque accusamus dolorem saepe, dolor animi quos
            alias
            deleniti officia dicta rerum?
        </div>
    </div>
</template>