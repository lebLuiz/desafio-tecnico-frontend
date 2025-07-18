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
import WrapCascadeRoute from "@/components/atoms/cascadeRoute/WrapCascadeRoute/index.vue";
import Cascade from "@/components/atoms/cascadeRoute/Cascade/index.vue";
import Route from "@/components/atoms/cascadeRoute/Route/index.vue";

import type CascadeRoutePropsInterface from "@/components/molecules/CascadeRoute/types/PropsInterface";
const props = defineProps<CascadeRoutePropsInterface>();
</script>
