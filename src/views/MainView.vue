<script setup lang="ts">
import { computed, onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import Button from "@/components/atoms/buttons/Button.vue";
import Message from "@/components/atoms/Message.vue";
import BasicCard from "@/components/atoms/cards/BasicCard.vue";
import ListCard from "@/components/atoms/cards/ListCard.vue";
import Tabs from "@/components/molecules/Tabs.vue";
import InputText from "@/components/atoms/inputs/InputText.vue";
import InputGroup from "@/components/atoms/inputs/InputGroup/InputGroup.vue";
import InputGroupAddon from "@/components/atoms/inputs/InputGroup/InputGroupAddon.vue";
import CascadeRoutes from "@/components/molecules/CascadeRoutes.vue";

const API_URL = import.meta.env.VITE_API_URL;

const mockServerError = ref();
const mockServerResp = ref();
const v_model_tabs = ref("tab2");
const v_model_input = ref("");

const route = useRoute();
const routes = computed(() => {
  return route.matched?.map((route) => ({
    label: route?.meta?.label || "--",
    name: route.name,
  }));
});

const testMockServer = async () => {
  try {
    const req = await fetch(`${API_URL}/tasks?_page=1&per_page=10`);
    mockServerResp.value = await req.json();
  } catch (e: unknown) {
    mockServerError.value = e;
  }
};

onBeforeMount(async () => {
  await testMockServer();
});
</script>

<template>
  <div pa-6 bg-white w-full>
    <CascadeRoutes :cascade-routes="routes" />

    <div flex gap-2>
      <Button
        text="Assumir"
        @on-click="() => console.log('Botão Primário clicado!')"
      />

      <Button
        severity="secondary"
        @on-click="() => console.log('Botão Secundário clicado!')"
      >
        Visualizar
      </Button>

      <Message severity="danger"
        ><div i-mdi:user-clock color-status-danger-main size-4 />
        Pendente</Message
      >
      <Message severity="warning"
        ><div i-mdi:clock color-status-warning-main size-4 />
        Aguardando</Message
      >
      <Message severity="success"
        ><div i-mdi:check color-status-success-main size-4 />
        Preenchida</Message
      >
      <Message severity="danger"
        ><div i-mdi:alert-outline color-status-danger-main size-4 />
        Cancelada</Message
      >
    </div>

    <div flex flex-col gap-2>
      <ListCard>
        <BasicCard severity="success" class="flex-col px-3 py-1">
          <div i-mdi:identifier color-blue-800 size-4 />
          14</BasicCard
        >
      </ListCard>

      <Tabs
        :tabs="[
          { id: 'tab1', label: 'Abertas' },
          { id: 'tab2', label: 'Finalizadas' },
        ]"
        v-model="v_model_tabs"
        no-scroll
      >
        <template #tab1>
          <div p-4>
            <h2>Conteúdo da Tab 1</h2>
            <p>Este é o conteúdo da primeira aba.</p>
          </div>
        </template>

        <template #tab2>
          <div p-4>
            <h2>Conteúdo da Tab 2</h2>
            <p>Este é o conteúdo da segunda aba.</p>
          </div>
        </template>
      </Tabs>

      <InputGroup>
        <InputGroupAddon>
          <div i-mdi:search color-blue-500 size-6 />
        </InputGroupAddon>
        <InputText
          v-model="v_model_input"
          placeholder="Busque por nome do fluxo, nome da etapa ou etiqueta"
        />
      </InputGroup>
    </div>

    <hr />

    <h1>Olá!</h1>
    <p>Leia o README.md e implemente as funcionalidade aqui.</p>
    <p>Boa sorte :)</p>

    <div flex flex-col>
      <h3>Mock Server Teste:</h3>
      <div v-if="mockServerResp">
        <p>
          <span color-teal font-bold> Sucesso! </span>
          O Servidor mock está rodando corretamente no caminho
          <b>{{ API_URL }}</b
          >! 🎉
        </p>
      </div>
      <div v-else-if="mockServerError">
        <p>
          <span color-red font-bold> Erro! </span>
          Não foi possível carregar corretamente os dados do mock server,
          verifique se você está rodou corretamente o comando
          <code>pnpm mock-server</code>
        </p>
        <p>Erro retornado:</p>
        <pre>{{ mockServerError }}</pre>
      </div>
      <div v-else>
        <span> Carregando dados do MockServer... </span>
      </div>
    </div>

    <div flex flex-col gap-1>
      <h3>UnoCSS Teste:</h3>
      <span
        >Se tiver ícones abaixo quer dizer que o UnoCSS está funcionando!</span
      >
      <div flex gap-2>
        <div i-mdi:success color-teal size-6 />
        <div i-mdi:user color-blue size-6 />
        <div i-mdi:source-branch color-red size-6 />
      </div>
    </div>
  </div>
</template>
