<template>
  <main py-md px-xl bg-bluegray-50 :style="{ height: props.height }">
    <slot />
  </main>
</template>

<script setup lang="ts">
import type MainPropsInterface from "@/components/organisms/layout/Main/types/PropsInterface";
const props = defineProps<MainPropsInterface>();
</script>
