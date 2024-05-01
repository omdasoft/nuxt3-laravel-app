<template>
    <div>
        <Head>
            <Title>Nuxt 3 & laravel blog</Title>
        </Head>
        <nav>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/posts">Posts</NuxtLink></li>
                <li><NuxtLink to="/contact">Conatc Us</NuxtLink></li>
            </ul>
        </nav>
        <slot/>
    </div>
</template>