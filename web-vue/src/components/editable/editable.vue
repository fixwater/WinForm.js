<template>
  <div
    :class="[...convertClassName(directions), 'editable']"
    v-size="{width:size.width, height:size.height}"
    v-increment-size="{origin, target:{
      width:100,
      height: 0
    }}"
  >
    <slot/>
    <DragBlock
      v-for="(direction, index) in directions"
      :key="index"
      :directions="direction"
      :handlePan="handlePan"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Direction } from "./@share-types";
import DragBlock from "./drag-block.vue";
import { SizeDirective, IncrementSizeDirective } from "../../directives";

interface Size {
  width: number;
  height: number;
}

@Component({
  components: {
    DragBlock
  },
  directives: {
    size: SizeDirective,
    "increment-size": IncrementSizeDirective
  }
})
export default class Editable extends Vue {
  @Prop()
  directions!: Direction[];

  @Prop({
    default: () => ({
      width: "100%",
      height: "100%"
    })
  })
  size!: Size;

  origin: Size = this.size;
  target: Size = {
    width: 0,
    height: 0
  };

  handlePan(e: HammerInput) {
    let { deltaX, deltaY } = e;

    console.info(this.target);

    this.target.width = deltaX;
    this.target.height = deltaY;
  }

  convertClassName(directions: Direction[]): string[] {
    return directions.map(className => `padding-${className}`);
  }
}
</script>

<style lang="scss">
@mixin padding-adder($directions) {
  @each $direction in $directions {
    padding-#{$direction}: 10px;
  }
}

.editable {
  position: relative;

  & > :first-child {
    width: 100%;
    height: 100%;
    z-index: 2;
  }
}

.pading-left {
  > * {
    @include padding-adder(left);
  }
}
.padding-right {
  > * {
    @include padding-adder(right);
  }
}
.padding-top {
  > * {
    @include padding-adder(top);
  }
}
.padding-bottom {
  > * {
    @include padding-adder(bottom);
  }
}
</style>
