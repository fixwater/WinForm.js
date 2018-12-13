<template>
  <div class="home">
    <Form>
      <div class="container">
        <Label :fontSize="30">Hello WinForm.js !</Label>
        <div class="button-container">
          <Button>Exit</Button>
        </div>
      </div>
    </Form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Form } from "../components/form";
import Label from "../components/label.vue";
import Button from "../components/button.vue";
@Component({
  components: {
    Form,
    Label,
    Button
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #cecece;
}
.button-container {
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0;
  > div {
    width: auto;
  }
}
</style>
