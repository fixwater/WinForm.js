<template>
  <div class="header-bar">
    <slot/>
    <div class="control-btns">
      <ControlBtn type="close"/>
      <ControlBtn type="min"/>
      <ControlBtn type="max"/>
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

$left-distance: 2px;
$top-distance: 5px;

.header-bar {
  width: 100%;
  padding: $left-distance $top-distance;
  background: $header-bar-color;
  text-align: center;
  position: relative;
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
