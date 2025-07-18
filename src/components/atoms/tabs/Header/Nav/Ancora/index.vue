<template>
  <router-link
    :to="!props.value?.route ? `#${props.value.id}` : props.value.route"
    :href="`#${props.value.id}`"
    :active="props.activeId === props.value.id"
    :class="[
      'inline-flex items-center text-lg font-semibold whitespace-nowrap text-fonts-regular-400 no-underline py-4 px-5 w-auto hover:bg-blue-50 focus:outline-offset-[-0.5ch] cursor-auto select-none',
      {
        'text-blue-500! border-blue-300 border-b-0':
          props.activeId === props.value.id,
      },
    ]"
    @click.prevent="onClick"
  >
    <slot />
  </router-link>
</template>

<script setup lang="ts">
import type AncoraPropsInterface from "@/components/atoms/tabs/Header/Nav/Ancora/types/PropsInterface";

const props = defineProps<AncoraPropsInterface>();
const emit = defineEmits<{
  onClick: [payload: { $event: MouseEvent }];
}>();

const onClick = (event: MouseEvent): void => {
  emit("onClick", { $event: event });
};
</script>

<style scoped>
a {
  scroll-snap-align: start;
}
</style>
