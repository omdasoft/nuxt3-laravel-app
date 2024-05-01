<template>
    <div>
        <h1>index page</h1>
        <div>
            <ul>
                <li v-for="user in users" :key="user.id">
                    {{ user.name }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
const {data:users} =  await useFetch('https://jsonplaceholder.typicode.com/users');
const {data:user} =  await useFetch('https://jsonplaceholder.typicode.com/users/1', 
{
    pick: ['id', 'name', 'email']
}
);
console.log(user);
</script>