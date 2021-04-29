<template>
  <main-layout>
    <template #pageTitle>
      <h2>Words</h2>
    </template>
    <p>
      Look, I know that I said that there would be some kind of writing here.
      However, I have not really gotten to that part yet. This is all part of my
      plan for self-improvement and I am working towards a goal which includes
      creating more projects and writing about them. If you come back in a
      couple of weeks, I am sure there will be something here. Perhaps it will
      even be a kind of meta post describing building this very website, who
      knows‽
    </p>
    <ul v-bind="loadArticles">
      <li class="py-1 md:py-0" v-for="article in loadArticles" :key="article">
        {{ article.date }}
        <a class="underline" :href="article.location">{{
          article.pageTitle
        }}</a>
      </li>
    </ul>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
export default {
  components: { MainLayout },
  computed: {
    loadArticles() {
      let files = require.context("@/pages/words", true, /^.*\.vue$/);
      let articles = [];
      let i = 0;
      files.keys().forEach((file) => {
        file = "./words" + file.substring(1, file.length - 4);
        const componentData = require("" + file).default.data();
        articles[i] = {
          location: file,
          pageTitle: componentData.pageTitle,
          date: componentData.date,
        };
        i++;
      });
      return articles.reverse();
    },
  },
};
</script>