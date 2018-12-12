<template>
  <!-- <Editable :directions="['right', 'bottom']" :size="{width:500,height:350}"> -->
  <div class="form">
    <HeaderBar>My Form</HeaderBar>
    <div class="content">
      <slot/>
    </div>
  </div>
  <!-- </Editable> -->
</template>

<script lang="ts">
import { Prop } from "vue-property-decorator";
import HeaderBar from "./header-bar.vue";
import Component from "vue-class-component";
import Vue from "vue";

@Component({
  components: {
    HeaderBar
  }
})
export default class Form extends Vue {
  @Prop()
  text!: string;
}
</script>

<style lang="scss">
@import "../../scss/size";
@import "../../scss/color";

.form {
  width: $form-width;
  height: $form-height;
  position: relative;
  overflow: hidden;
  border-radius: $common-border-radius;
  border: 1px solid $border-color;
  box-shadow: 2px 2px 5px $shallow-translucent-black;
}

.content {
  width: 100%;
  height: 100%;
  padding-top: $header-bar-height;
}

.drag {
  width: 10px;
  height: $form-height - 10px;
  background: #000;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
}
</style>
