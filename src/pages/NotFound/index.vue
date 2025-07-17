<template>
  <Main height="100vh" flex flex-col items-center justify-center>
    <h1>404 - Not Found</h1>
    <p>A página que você está procurando não existe.</p>
  </Main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import Main from "@/components/organisms/layout/Main.vue";

const router = useRouter();
const redirectToHome = () => {
  router.replace("/");
};

onMounted(() => {
  setTimeout(() => {
    redirectToHome();
  }, 5000);
});
</script>
