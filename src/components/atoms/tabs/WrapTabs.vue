<template>
  <div v-bind="attrs" overflow-hidden relative rounded-md flex flex-col>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";
const attrs = useAttrs();
</script>
