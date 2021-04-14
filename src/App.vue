<template>
  <div id="app">
    <transition
      appear
      appear-active-class="transition-opacity duration-500 ease-in"
      appear-class="opacity-0"
      appear-to-class="opacity-100"
    >
      <div class="p-6">
        <AboutPage />
      </div>
    </transition>
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
