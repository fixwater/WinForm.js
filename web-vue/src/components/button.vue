<template>
  <div :class="['button', buttonSize]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

export type ButtonSize = "small" | "medium" | "large";

@Component({})
export default class Button extends Vue {
  @Prop({
    default: "small"
  })
  buttonSize!: ButtonSize;
}
</script>

<style lang="scss">
@import "../scss/color";
@import "../scss/size";

@mixin size($width, $height) {
  width: $width;
  height: $height;
}

.button {
  width: fit-content;
  background: white;
  border-radius: $common-border-radius;
  border: 1px solid $border-color;
  margin: 5px;
  cursor: pointer;
}

.small {
  padding: 10px;
  font-size: 12px;
}

.medium {
  padding: 13px 18px;
  font-size: 16px;
}

.large {
  padding: 18px 26px;
  font-size: 20px;
}
</style>
