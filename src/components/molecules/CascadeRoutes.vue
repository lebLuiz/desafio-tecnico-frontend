<template>
  <WrapCascadeRoute>
    <Cascade>
      <Route
        v-for="(cascadeRoute, index) in props.cascadeRoutes"
        :key="cascadeRoute.name"
        :name-route-active="props.nameRouteActive"
        :last-route="index === props.cascadeRoutes.length - 1"
        :route="{
          label: (cascadeRoute.meta?.label as unknown as string) || '--',
          name: cascadeRoute.name,
        }"
      />
    </Cascade>
  </WrapCascadeRoute>
</template>

<script setup lang="ts">
import WrapCascadeRoute from "@/components/atoms/cascadeRoute/WrapCascadeRoute.vue";
import Cascade from "@/components/atoms/cascadeRoute/Cascade.vue";
import Route from "@/components/atoms/cascadeRoute/Route.vue";

import type CascadeRoutePropsInterface from "@/entities/interfaces/components/molecules/CascadeRoute/PropsInterface";
const props = defineProps<CascadeRoutePropsInterface>();
</script>
