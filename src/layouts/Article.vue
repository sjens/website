<template>
  <main-layout>
    <slot />
  </main-layout>
</template>

<script>
import MainLayout from "./Main.vue";
export default {
  components: {
    MainLayout,
  },
};
</script>