<template>
  <div class="hidden md:flex justify-end pb-10">
    <nav-link href="/">Home</nav-link>
    <span class="px-2" />
    <nav-link href="/about">About</nav-link>
    <span class="px-2" />
    <nav-link href="/words">Words</nav-link>
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";
export default {
  components: { NavLink },
};
</script>