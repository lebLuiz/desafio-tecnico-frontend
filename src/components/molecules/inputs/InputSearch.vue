<template>
  <InputGroup>
    <InputGroupAddon bg-white>
      <div i-mdi:search color-blue-500 size-6 />
    </InputGroupAddon>
    <InputText
      v-model="vModel"
      :placeholder="props.placeholder"
      :readonly="props.readonly"
    />
  </InputGroup>
</template>

<script setup lang="ts">
import InputText from "@/components/atoms/inputs/InputText.vue";
import InputGroup from "@/components/atoms/inputs/InputGroup/InputGroup.vue";
import InputGroupAddon from "@/components/atoms/inputs/InputGroup/InputGroupAddon.vue";
import type InputSearchPropsInterface from "@/entities/interfaces/components/molecules/inputs/InputSearch/PropsInterface";

const vModel = defineModel<string>({
  required: true,
});
const props = defineProps<InputSearchPropsInterface>();
</script>
