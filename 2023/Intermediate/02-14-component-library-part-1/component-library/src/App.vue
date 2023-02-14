<script setup>

import Button from "./components/Botton.vue"

function printB() {
  console.log("B")
}

</script>

<template>
  <div class="h-96 w-full bg-gray-200 flex flex-col gap-y-4 justify-center items-center">
    <Button title="Button Top" @click="printB" />
    <Button title="Button Bottom" />
  </div>
</template>