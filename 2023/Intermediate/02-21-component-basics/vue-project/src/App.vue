<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Button from './components/Button.vue';
import Container from './components/Container.vue'
import Input from './components/Input.vue'

const message = "Press me"
const prefix = "Now!"

function print() {
  console.log("This function is being called")
}

function printAnother() {
  console.log("This print is being called by another function")
}

const print3 = () => {
  console.log("Voila")
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <!-- Default emits for HTMLS <div :onclick="print">Bla2</div>-->


    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main class="flex flex-col gap-y-5">
    <Button :title="message" :prefix="prefix" @button-clicked="print" @hover="() => {
      printAnother()
      print3()
    }"></Button>

    <Input placeholder="Test from App.vue" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
