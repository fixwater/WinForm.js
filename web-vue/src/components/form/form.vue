<template>
  <div class="form">
    <HeaderBar>My Form</HeaderBar>
  </div>
</template>

<script lang="ts">
import { Prop } from "vue-property-decorator";
import HeaderBar from "./header-bar.vue";
import Component from "vue-class-component";
import Vue from "vue";

@Component({
  components: {
    HeaderBar
  }
})
export default class Form extends Vue {
  @Prop()
  text!: string;
}
</script>

<style lang="scss">
@import "../../scss/size";
@import "../../scss/color";

.form {
  width: $form-width;
  height: $form-height;
  overflow: hidden;
  border-radius: $common-border-radius;
  border: 1px solid $border-color;
}
</style>
