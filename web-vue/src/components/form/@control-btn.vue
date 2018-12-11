<template>
  <div :class="[type, 'control-btn']">
    <i :class="['fa', `fa-${iconType}`]"></i>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop, Component } from "vue-property-decorator";
import { Dict } from "../../types";

type ControlBtnType = "close" | "min" | "max";
type WindowBtnType = "window-maximize" | "close" | "minus";

const iconMap: Dict<WindowBtnType> = {
  close: "close",
  min: "minus",
  max: "window-maximize"
};

@Component({})
export default class ControlBtn extends Vue {
  @Prop()
  type!: ControlBtnType;

  iconType!: WindowBtnType;

  created(): void {
    this.iconType = iconMap[this.type];
  }
}
</script>

<style lang="scss">
.control-btn {
  height: 100%;
  padding: 0 5px;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;

  .fa {
    font-weight: 100;
    font-size: 16px;
  }
}
</style>
