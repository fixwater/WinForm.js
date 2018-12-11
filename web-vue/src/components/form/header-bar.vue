<template>
  <div class="header-bar">
    <slot/>
    <div class="control-btns">
      <ControlBtn type="min"/>
      <ControlBtn type="max"/>
      <ControlBtn type="close"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import ControlBtn from "./@control-btn.vue";

@Component({
  components: {
    ControlBtn
  }
})
export default class HeaderBar extends Vue {
  @Prop()
  title!: string;
}
</script>

<style lang="scss">
@import "../../scss/color";
@import "../../scss/size";

$left-distance: 2px;
$top-distance: 5px;

.header-bar {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: $left-distance $top-distance;
  background: $header-bar-color;
  position: absolute;
  height: $header-bar-height;
  z-index: 5;
}

.control-btns {
  position: absolute;
  display: flex;
  flex-direction: row;
  margin-right: $left-distance;
  top: $top-distance;
  right: $left-distance;
}
</style>
