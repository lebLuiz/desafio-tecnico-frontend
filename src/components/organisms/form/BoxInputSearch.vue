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
import WrapCard from "@/components/atoms/cards/WrapCard.vue";
import InputSearch from "@/components/molecules/inputs/InputSearch.vue";
import type BoxInputSearchPropsInterface from "@/entities/interfaces/components/organisms/form/BoxInputSearch/PropsInterface";

const vModel = defineModel<string>({
  required: true,
});
const props = defineProps<BoxInputSearchPropsInterface>();
</script>
