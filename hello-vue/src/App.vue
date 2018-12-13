<template>
  <Form1></Form1>
</template>

<script>
import Form1 from "@/views/Form1.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Form1
  }
})
export default class App extends Vue {}
</script>

<style>
</style>
