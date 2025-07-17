<template>
  <main py-md px-xl bg-bluegray-50 :style="{ height: props.height }">
    <slot />
  </main>
</template>

<script setup lang="ts">
import type MainPropsInterface from "@/entities/interfaces/components/organisms/layout/Main/PropsInterface";
const props = defineProps<MainPropsInterface>();
</script>
