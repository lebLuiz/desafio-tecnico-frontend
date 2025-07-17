<template>
  <div flex items-center p-y-smx p-x-sm v-bind="attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";
const attrs = useAttrs();
</script>
