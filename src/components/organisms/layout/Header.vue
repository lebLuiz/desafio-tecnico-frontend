<template>
  <header
    v-bind="attrs"
    w-full
    py-4
    px-5
    border
    border-solid
    border-bluegray-200
  >
    <CascadeRoutes
      :cascade-routes="props.cascadeRoutes"
      :name-route-active="props.nameRouteActive"
    />
  </header>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";
import CascadeRoutes from "@/components/molecules/CascadeRoutes.vue";
import type CascadeRoutePropsInterface from "@/entities/interfaces/components/molecules/CascadeRoute/PropsInterface";
const props = defineProps<CascadeRoutePropsInterface>();
const attrs = useAttrs();
</script>
