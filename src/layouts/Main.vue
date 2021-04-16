<template>
  <transition
    appear
    appear-active-class="transition-opacity duration-300 ease-in"
    appear-class="opacity-0"
    appear-to-class="opacity-100"
  >
    <div>
      <navigator />
      <div class="flex">
        <slot name="pageTitle"></slot>
        <div class="flex-grow" />
        <mobile-navigator />
      </div>
      <div class="py-6">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
import Navigator from "../components/Navigator.vue";
import MobileNavigator from "../components/MobileNavigator.vue";
export default {
  components: { Navigator, MobileNavigator },
};
</script>