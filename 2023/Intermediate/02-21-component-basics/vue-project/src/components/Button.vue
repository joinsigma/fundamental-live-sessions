<script setup>

// Props = Properties
const props = defineProps(["title", "prefix"])
const content = props.prefix + props.title

// Emits
const emits = defineEmits(["buttonClicked", "hover"])

</script>

<!--Template syntax-->
<template>
    <button @click="emits('buttonClicked')" @mouseover="emits('hover')">{{ content }}</button>
</template>

<style>
button {
    padding: 12px;
    background-color: darkslategray;
    color: white;
}
</style>