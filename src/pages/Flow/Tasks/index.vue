<template>
  <Tabs :tabs="tabs" v-model="vModelTabs">
    <template #section>
      <RouterView />
    </template>
  </Tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterView, useRoute } from "vue-router";
import Tabs from "@/components/molecules/Tabs.vue";
import RouteFlowTasksOpen from "@/router/Flow/Tasks/Open";
import RouteFlowTasksFinalized from "@/router/Flow/Tasks/Finalized";

import type TabInterface from "@/entities/interfaces/components/molecules/Tabs/TabInterface";

const route = useRoute();
const tabs = ref<Array<TabInterface>>([
  {
    id: RouteFlowTasksOpen.meta.tab,
    label: "Abertas",
    route: RouteFlowTasksOpen,
  },
  {
    id: RouteFlowTasksFinalized.meta.tab,
    label: "Finalizadas",
    route: RouteFlowTasksFinalized,
  },
]);

const vModelTabs = ref((route.meta.tab as string) || "open");
</script>
