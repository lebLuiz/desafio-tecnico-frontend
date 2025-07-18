<template>
  <WrapCard w-full py-2 px-5>
    <InputSearch
      v-model="vModel"
      :placeholder="props.placeholder"
      :readonly="props.readonly"
    />
  </WrapCard>
</template>

<script setup lang="ts">
import WrapCard from "@/components/atoms/cards/WrapCard/index.vue";
import InputSearch from "@/components/molecules/inputs/InputSearch/index.vue";
import type BoxInputSearchPropsInterface from "@/components/organisms/form/BoxInputSearch/types/PropsInterface";

const vModel = defineModel<string>({
  required: true,
});
const props = defineProps<BoxInputSearchPropsInterface>();
</script>
