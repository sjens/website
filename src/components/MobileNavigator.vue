<template>
  <div class="md:hidden">
    <button class="w-8 h-8" v-on:click="toggleNavigation">
      <menu-icon />
    </button>
    <transition
      enter-active-class="transition-opacity duration-75 ease-in"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-75 ease-in"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        class="top-0 left-0 w-screen h-screen fixed bg-background-light dark:bg-background-dark p-6"
        v-if="showNav"
      >
        <div class="flex justify-end">
          <button class="w-8 h-8" v-on:click="toggleNavigation">
            <close-icon />
          </button>
        </div>
        <h1 class="flex flex-col">
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
import MenuIcon from "../icons/Menu.vue";
import CloseIcon from "../icons/Close.vue";
export default {
  props: {
    showNav: Boolean,
  },
  components: { NavLink, MenuIcon, CloseIcon },
  methods: {
    toggleNavigation() {
      this.showNav = !this.showNav;
    },
  },
};
</script>