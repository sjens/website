<template>
  <transition
    appear
    appear-active-class="transition-opacity duration-500 ease-in"
    appear-class="opacity-0"
    appear-to-class="opacity-100"
  >
    <div>
      <navigator />
      <div class="mx-auto max-w-2xl p-6">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
import Navigator from "../components/Navigator.vue";
export default {
  components: { Navigator },
};
</script>