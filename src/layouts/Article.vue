<template>
  <main-layout>
    <template #pageTitle>
      <h2>{{ pageTitle }}</h2>
    </template>
    <component v-bind:is="viewComponent" />
  </main-layout>
</template>

<script>
import MainLayout from "./Main.vue";
export default {
  components: {
    MainLayout,
  },
  computed: {
    pageTitle() {
      try {
        return this.viewComponent.data().pageTitle;
      } catch {
        return "";
      }
    },
    viewComponent() {
      const matchingView = this.$route.params;
      try {
        return require("../pages/words/" + matchingView.articleId + ".vue")
          .default;
      } catch {
        return require("../pages/NotFound.vue").default;
      }
    },
  },
};
</script>