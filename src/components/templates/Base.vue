<template>
  <Header
    :id="ID_HEADER"
    :cascade-routes="cascadeRoutes"
    :name-route-active="nameRouteActive"
  />

  <Main :height="heightMain">
    <RouterView />
  </Main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { RouterView, useRoute } from "vue-router";
import Header from "@/components/organisms/layout/Header.vue";
import Main from "@/components/organisms/layout/Main.vue";

const ID_HEADER = "header-base-template";
const heightHeader = ref(0);

const route = useRoute();
const cascadeRoutes = computed(() => route.matched);
const nameRouteActive = computed(() => route.name);
const heightMain = computed(() => `calc(100vh - ${heightHeader.value}px)`);

onMounted(() => {
  const headerElement = document.getElementById(ID_HEADER);
  if (headerElement) heightHeader.value = headerElement.offsetHeight;
});
</script>
