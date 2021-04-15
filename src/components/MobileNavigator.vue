<template>
  <div class="md:hidden">
    <div class="pt-6 pr-6 pb-1 flex justify-end">
      <button class="w-8 h-8" v-on:click="toggleNavigation">
        <img src="../assets/menu.svg" v-if="!showNav" />
        <img src="../assets/close.svg" v-if="showNav" />
        </button>
    </div>
    <transition
      enter-active-class="transition-opacity duration-75 ease-in"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-75 ease-in"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        class="w-screen h-screen fixed bg-background-light dark:bg-background-dark"
        v-if="showNav"
      >
        <h1 class="flex flex-col p-6">
          <nav-link href="/" class="my-4">Home</nav-link>
          <nav-link href="/about" class="my-4">About</nav-link>
          <nav-link href="/words" class="my-4">Words</nav-link>
        </h1>
      </div>
    </transition>
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";
export default {
  props: {
    showNav: Boolean,
  },
  components: { NavLink },
  methods: {
    toggleNavigation() {
      this.showNav = !this.showNav;
    },
  },
};
</script>