<template>
  <div class="hidden md:flex">
    <nav-link href="/">Home</nav-link>
    <nav-link href="/about">About</nav-link>
    <nav-link href="/words">Words</nav-link>
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";
export default {
  components: { NavLink },
};
</script>