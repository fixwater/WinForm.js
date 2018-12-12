<template>
  <div :class="['direction', position]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

export type Position = "row" | "colum";

@Component({})
export default class Direction extends Vue {
  @Prop()
  position!: Position;
}
</script>

<style lang="scss">
.direction {
  display: flex;
  align-items: center;
}

.row {
  flex-direction: row;
}

.column {
  flex-direction: column;
}
</style>
