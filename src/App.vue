<template>
  <div
    id="app"
    class="font-serif subpixel-antialiased container mx-auto max-w-2xl"
  >
    <AboutPage />
  </div>
</template>

<script>
import AboutPage from "./components/About.vue";

export default {
  name: "App",
  components: {
    AboutPage,
  },
};
</script>
