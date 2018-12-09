<template>
  <Home></Home>
</template>

<script>
import Home from "@/views/Home.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Home
  }
})
export default class App extends Vue {}
</script>

<style>
</style>
