<template>
  <article overflow-y-auto>
    <slot />
  </article>
</template>

<style scoped>
article {
  scroll-snap-align: start;
  overscroll-behavior-y: contain;
}
</style>
