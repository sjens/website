<template>
  <main-layout>
    <not-found />
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import NotFound from "../pages/NotFound.vue";
export default {
  components: {
    MainLayout,
    NotFound,
  },
};
</script>