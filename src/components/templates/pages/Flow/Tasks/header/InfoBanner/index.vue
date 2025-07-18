<template>
  <WrapCard w-full flex flex-col p-5>
    <h4 text-h4 m-0 text-fonts-semibold-600>{{ props.title }}</h4>
    <p text-body3 m-0 text-fonts-regular-400>{{ props.description }}</p>
  </WrapCard>
</template>

<script setup lang="ts">
import WrapCard from "@/components/atoms/cards/WrapCard/index.vue";
import type HeaderInfoBannerPropsInterface from "@/components/templates/pages/Flow/Tasks/header/InfoBanner/types/PropsInterface";
const props = defineProps<HeaderInfoBannerPropsInterface>();
</script>
