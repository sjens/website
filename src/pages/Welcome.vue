<template>
  <main-layout>
    <h1 class="text-9xl">Hello.</h1>
    <h2 class="flex justify-end">You've found my website!</h2>
    <h4 class="mt-8">
      Here you can find a bit of information about me, Simon Jensen. I am a
      Software Engineer in the Copenhagen area, and here are a couple of ways to
      see what I am about:
    </h4>
    <h4>
      <ul class="my-4">
        <li>
          <a href="https://github.com/sjens" class="underline">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sjens/" class="underline"
            >LinkedIn</a
          >
        </li>
        <li>
          <a href="mailto:mail@simonjensen.net" class="underline">E-mail</a>
        </li>
      </ul>
    </h4>
    <h4>
      You can read a bit more <a href="/about" class="underline">about</a> me.
    </h4>
    <h4>
      I also try to <a href="words" class="underline">write</a> a bit sometimes.
    </h4>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main";
export default {
  components: { MainLayout },
};
</script>