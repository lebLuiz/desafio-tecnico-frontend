<template>
  <li flex items-center justify-center>
    <router-link
      :to="{ name: props.route.name }"
      v-text="props.route?.label || ''"
      :class="[
        'text-fonts-regular-400 text-lg-bold decoration-none',
        {
          'text-fonts-semibold-600': props.route.name == props.nameRouteActive,
        },
      ]"
    />

    <div v-if="!props?.lastRoute" i-mdi:chevron-right color-gray-400 size-6 />
  </li>
</template>

<script setup lang="ts">
import type RoutePropsInterface from "@/entities/interfaces/components/atoms/cascadeRoute/Route/PropsInterface";
const props = defineProps<RoutePropsInterface>();
</script>

<style scoped>
li {
  list-style: none;
}
</style>
