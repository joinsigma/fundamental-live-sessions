<script setup>

// Props = Properties
const props = defineProps(["title", "prefix"])
const content = props.prefix + props.title

</script>

<template>
    <!--Template syntax-->
    <button>{{ content }}</button>
</template>

<style>
button {
    padding: 12px;
    background-color: darkslategray;
    color: white;
}
</style>