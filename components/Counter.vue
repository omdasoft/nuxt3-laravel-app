<template>
    <div>
        <button @click="increase">+</button>
            Counter: {{ count }}
        <button @click="decrease">-</button>
    </div>
</template>
<script setup>
const count = ref(0);
function increase () {
    count.value ++;
}

function decrease() {
    count.value -- ;
}

</script>
