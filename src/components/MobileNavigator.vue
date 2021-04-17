<template>
  <div class="md:hidden flex">
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
        <h1 class="flex flex-col p-">
          <router-link to="/" class="my-4">Home</router-link>
          <router-link to="/about" class="my-4">About</router-link>
          <router-link to="/words" class="my-4">Words</router-link>
        </h1>
      </div>
    </transition>
  </div>
</template>

<script>
import MenuIcon from "../icons/Menu.vue";
import CloseIcon from "../icons/Close.vue";
export default {
  data: function () {
    return {
      showNav: this.showNav,
    };
  },
  components: { MenuIcon, CloseIcon },
  methods: {
    toggleNavigation() {
      this.showNav = !this.showNav;
    },
  },
};
</script>