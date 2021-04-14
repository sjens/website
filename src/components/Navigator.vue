<template>
  <ul class="mt-20 px-4 border-r-2 border-solid border-gray-300">
    <li><nav-link href="/">About</nav-link></li>
    <li><nav-link href="/words">Words</nav-link></li>
    <li><nav-link href="/projects">Projects</nav-link></li>
  </ul>
</template>

<script>
import NavLink from "./NavLink.vue";
export default {
  components: { NavLink },
};
</script>