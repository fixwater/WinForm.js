<template>
  <div :class="['drag-block', ...directions]" v-gesture="{handlePan}"></div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Direction } from "./@share-types";
import { GestureDirective } from "../../directives";

@Component({
  directives: {
    gesture: GestureDirective
  }
})
export default class DragBlock extends Vue {
  @Prop()
  directions!: Direction[];
  @Prop()
  handlePan!: (e: HammerInput) => void;
}
</script>

<style lang="scss">
@mixin block-direction($direction) {
  @if ($direction == "horizontal") {
    height: 10px;
    width: 100%;
  } @else {
    height: 100%;
    width: 10px;
  }
}

@mixin direction-judge($direction) {
  @if $direction == "left" {
    top: 0;
    left: 0;
    cursor: w-resize;
    @include block-direction("vertical");
  } @else if ($direction == "right") {
    top: 0;
    right: 0;
    cursor: e-resize;
    @include block-direction("vertical");
  } @else if ($direction == "top") {
    top: 0;
    left: 0;
    cursor: n-resize;
    @include block-direction("horizontal");
  } @else {
    bottom: 0;
    left: 0;
    cursor: s-resize;
    @include block-direction("horizontal");
  }
}

.drag-block {
  position: absolute;
  background: black;
  z-index: 3;
}

.left {
  @include direction-judge("left");
}

.right {
  @include direction-judge("right");
}

.top {
  @include direction-judge("top");
}

.bottom {
  @include direction-judge("bottom");
}
</style>
