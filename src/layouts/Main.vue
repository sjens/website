<template>
  <div>
    <navigator />
    <div class="flex">
      <slot name="pageTitle" />
      <div class="flex-grow" />
      <mobile-navigator />
    </div>
    <div class="py-6">
      <slot />
    </div>
  </div>
</template>

<script>
import Navigator from "../components/Navigator.vue";
import MobileNavigator from "../components/MobileNavigator.vue";
export default {
  components: { Navigator, MobileNavigator },
};
</script>