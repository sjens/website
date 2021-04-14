<template>
  <transition
    appear
    appear-active-class="transition-opacity duration-500 ease-in"
    appear-class="opacity-0"
    appear-to-class="opacity-100"
  >
    <div class="p-6">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {};
</script>