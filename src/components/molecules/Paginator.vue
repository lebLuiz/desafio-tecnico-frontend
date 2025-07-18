<template>
  <WrapPaginator>
    <ButtonBackNext
      :disabled="currentPage === 1"
      @on-click="() => goToPage(currentPage - 1)"
    >
      <div i-mdi:chevron-left size-4 />
    </ButtonBackNext>

    <ButtonPaginate
      v-for="page in pages"
      :key="page"
      :page="page"
      :current-page="currentPage"
      @on-click="goToPage(page)"
    />

    <ButtonBackNext
      :disabled="currentPage === totalPages"
      @on-click="() => goToPage(currentPage + 1)"
    >
      <div i-mdi:chevron-right size-4 />
    </ButtonBackNext>
  </WrapPaginator>
</template>

<script setup lang="ts">
import { computed } from "vue";
import WrapPaginator from "@/components/atoms/paginator/WrapPaginator.vue";
import ButtonBackNext from "@/components/atoms/paginator/buttons/ButtonBackNext.vue";
import ButtonPaginate from "@/components/atoms/paginator/buttons/ButtonPaginate.vue";
import type PaginatorPropsInterface from "@/entities/interfaces/components/molecules/Paginator/PropsInterface";

const props = defineProps<PaginatorPropsInterface>();

const emit = defineEmits<{
  onPage: [payload: { page: number }];
}>();

const pages = computed(() => {
  const arr: Array<number> = [];
  for (let i = 1; i <= props.totalPages; i++) {
    arr.push(i);
  }
  return arr;
});

const goToPage = (page: number) => {
  if (page >= 1 && page <= props.totalPages && page !== props.currentPage)
    emit("onPage", { page });
};
</script>
