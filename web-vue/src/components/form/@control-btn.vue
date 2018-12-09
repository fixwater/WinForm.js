<template>
  <div :class="type" @mouseover="handleMouseOver()"></div>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop, Component, Emit } from "vue-property-decorator";

type ControlBtnType = "close" | "min" | "max";

@Component({})
export default class ControlBtn extends Vue {
  @Prop()
  type!: ControlBtnType;

  @Emit()
  handleMouseOver() {
    console.info("aa");
  }
}
</script>

<style lang="scss">
@import "../../scss/color";

@mixin control-btn($color) {
  width: 15px;
  height: 15px;
  background: $color;
  border-radius: 50%;
  margin: 0 5px;
  border: 1px solid $border-color;
  cursor: pointer;
}

.close {
  @include control-btn($control-btn-close);
}

.min {
  @include control-btn($control-btn-min);
}

.max {
  @include control-btn($control-btn-max);
}
</style>
