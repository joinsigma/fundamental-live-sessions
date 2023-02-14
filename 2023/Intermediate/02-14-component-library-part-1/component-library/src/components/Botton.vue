<script setup>

const props = defineProps(["title"])

</script>

<template>
    <button type="button"
        class="px-3 py-2 shadow-lg self-center bg-blue-400 rounded-lg text-white font-medium hover:bg-green-500">{{
    props.title
        }}</button>
</template>