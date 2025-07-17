<template>
  <nav
    flex
    h-auto
    overflow-x-auto
    overflow-y-hidden
    border-solid
    border-t
    border-l
    border-r
    border-b-0
    rounded-t-md
    border-bluegray-100
  >
    <slot />
  </nav>
</template>

<style scoped>
nav {
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
}
</style>
