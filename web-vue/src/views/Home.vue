<template>
  <div class="home">
    <Form text="aaa">
      <span>Hello</span>
    </Form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Form } from "../components/form";

@Component({
  components: {
    Form
  }
})
export default class Home extends Vue {}
</script>
