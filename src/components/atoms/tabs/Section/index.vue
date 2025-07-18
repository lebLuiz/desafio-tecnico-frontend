<template>
  <section
    v-bind="attrs"
    grid
    h-full
    h-auto
    overflow-x-auto
    overflow-y-hidden
    border
    border-solid
    border-bluegray-100
    b-t-none
    rounded-md
    rounded-tl-0
    bg-white
  >
    <slot />
  </section>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";

const attrs = useAttrs();
</script>

<style scoped>
section {
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
}
</style>
