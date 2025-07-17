<template>
  <article w-full inline-flex justify-end mb>
    <small text-desc><strong v-text="props.quantityTasks" /> tarefas</small>
  </article>
</template>

<script setup lang="ts">
import type ContentInfoBannerPropsInterface from "@/entities/interfaces/components/templates/pages/Flow/Tasks/Content/InfoBanner/PropsInterface";
const props = defineProps<ContentInfoBannerPropsInterface>();
</script>
