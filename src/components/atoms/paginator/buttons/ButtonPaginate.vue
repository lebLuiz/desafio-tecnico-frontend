<template>
  <button
    :class="[
      'border-none px-3 py-1 rounded text-fonts-regular-400 font-regular text-desc',
      {
        'bg-orange-100': page === currentPage,
        'bg-orange-50 hover:bg-orange-100': page !== currentPage,
      },
    ]"
    @click="onClick"
  >
    {{ page }}
  </button>
</template>

<script setup lang="ts">
import type ButtonPaginatePropsInterface from "@/entities/interfaces/components/atoms/paginator/buttons/ButtonPaginate/PropsInterface";

const props = defineProps<ButtonPaginatePropsInterface>();

const emit = defineEmits<{
  onClick: [payload: { page: number }];
}>();

const onClick = () => {
  emit("onClick", { page: props.page });
};
</script>
