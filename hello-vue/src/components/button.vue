<template>
  <div :class="['button', buttonSize, type]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonType =
  | "danger"
  | "warning"
  | "positive"
  | "success"
  | "default";

@Component({})
export default class Button extends Vue {
  @Prop({
    default: "small"
  })
  buttonSize!: ButtonSize;

  @Prop({
    default: "default"
  })
  type!: ButtonType;
}
</script>

<style lang="scss">
@import "../scss/color";
@import "../scss/size";

@mixin trigger($background, $hover-background) {
  color: white;
  background: $background;

  &:hover {
    background: $hover-background;
  }
}

.button {
  width: fit-content;
  background: white;
  border-radius: $common-border-radius;
  border: 1px solid $border-color;
  margin: 5px;
  cursor: pointer;
  transition: background 0.3s;
  text-align: center;
}

.danger {
  @include trigger($red, $deep-red);
}
.positive {
  @include trigger($blue, $deep-blue);
}
.warning {
  @include trigger($yellow, $deep-yellow);
}
.success {
  @include trigger($green, $deep-green);
}
.default {
  color: #000 !important;
  @include trigger(white, $shallow-gray);
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
