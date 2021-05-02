<template>
  <main-layout>
    <template #pageTitle>
      <h2>Words</h2>
    </template>
    <p>
      This is my not-a-blog, mainly since it will not be structured enough that
      one could call it a blog. I may use this space from time to time to write
      about things that interest me.
    </p>
    <ul v-bind="loadArticles">
      <li class="py-1 md:py-0" v-for="(article, id) in loadArticles" :key="id">
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