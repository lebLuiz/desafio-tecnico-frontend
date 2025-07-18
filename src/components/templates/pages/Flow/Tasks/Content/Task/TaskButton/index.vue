<template>
  <section>
    <div inline-flex items-center gap-x-4>
      <Button
        text="Assumir"
        @on-click="
          () =>
            console.log(
              '🤖 TODO: ESSE CONSOLE SÓ TÁ AQUI PRA TESTE.\n Clicou no botão Assumir!'
            )
        "
      />

      <Button
        severity="secondary"
        @on-click="
          () =>
            console.log(
              '🤖 TODO: ESSE CONSOLE SÓ TÁ AQUI PRA TESTE.\n Clicou no botão Visualizar!'
            )
        "
      >
        Visualizar
      </Button>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "@/components/atoms/buttons/Button/index.vue";
</script>
