<template>
  <div class="text-box">
    <input type="text" :placeholder="placeholder">
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class TextBox extends Vue {
  @Prop({ default: "" })
  placeholder!: string;
}
</script>

<style lang="scss">
@import "../scss/color";
@import "../scss/size";

.text-box {
  margin: 5px;
  border-radius: $common-border-radius;
  overflow: hidden;
  border: 1px solid $border-color;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  > input {
    border: none;
    outline: none;
  }
}
</style>
