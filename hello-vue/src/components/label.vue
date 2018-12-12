<template>
  <div class="label" :style="{fontSize:renderFontSize}">
    <slot/>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { Prop } from "vue-property-decorator";

@Component({})
export default class Label extends Vue {
  @Prop({ default: "16px" })
  fontSize!: string | number;

  renderFontSize!: string;

  created(): void {
    let fontSize = this.fontSize;

    this.renderFontSize =
      typeof fontSize === "string" ? fontSize : `${fontSize}px`;
  }
}
</script>

<style lang="scss">
</style>
