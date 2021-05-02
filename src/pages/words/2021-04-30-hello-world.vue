<template>
  <div>
    <p>
      First post in this non blog style format, which is mostly for myself
      anyway. As a start, here is a bit of information about this new website of
      mine. The previous iteration was made entirely without JavaScript, with a
      focus on simplicity. I even made sure it worked correctly in the Lynx
      browser. I did this because I believe that the best software is usually
      the least complicated.
    </p>
    <p>
      So, why make a new website in an SPA framework? The simple reason is that
      I wanted to have a place to reflect on things that I find interesting, and
      at the moment I think that putting it somewhere public will encourage me
      to be more productive in my spare time. Even if I am the only one who will
      ever read this, my hope is that I can use it to improve my writing skills.
      Putting ones thoughts in writing is also a good way to reflect on things.
      In any case, this solution lets me create an overall design which can
      change over time, while decoupling the textual pages so the change only
      needs to happen in one place.
    </p>
    <p>
      This new iteration is made using the Vue.js framework, with Tailwind CSS
      for styling. I chose this partly because I wanted to have some experience
      with another frontend JavaScript framework than React, which I have worked
      with before, and partly because Vue is comparatively simple and I feel it
      better suits the purpose for a simple personal website. Tailwind is in a
      similar boat, where I have experience with Bootstrap, and wanted to know a
      bit about another CSS framework. Additionally, Tailwind also seems to have
      a focus on only the core functionality needed to create responsive
      websites and not include loads of unnecessary things.
    </p>
    <p>
      So far, this combination seems to suit my needs nicely. Let's see if it
      holds up in the future.
    </p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageTitle: "Hello World",
      date: "2021-04-30",
    };
  },
};
</script>