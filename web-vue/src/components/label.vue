<template>
  <div class="label">
    <slot/>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component({})
export default class Label extends Vue {}
</script>

<style lang="scss">
.label {
  margin: 5px;
}
</style>
