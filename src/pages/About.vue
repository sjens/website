<template >
  <main-layout>
    <template #pageTitle>
      <h2>About</h2>
    </template>
    <p>
      Hello and welcome to my website, my name is Simon. I am a Software
      Engineer who lives in Copenhagen. I have a masters degree in Computer
      Science and Engineering from the Technical University of Denmark, with a
      focus on software engineering and computer security.
    </p>
    <p>
      Professionally, I have been working on both front end and full stack
      systems. For front end, I have mainly been using JavaScript and React.
      Full stack has been mainly Java Swing for the front end and a bunch of
      company specific libraries for the backend, most written in Java.
    </p>
    <p>
      Experience from education, side projects, and personal interest includes:
      Python, C#, TypeScript, Android development, and a tiny bit of C++.
    </p>
    <p>
      Throughout I have had a focus on Agile development in Scrum teams and
      automatic testing of software.
    </p>
    <div>
      <p>You can contact me on:</p>
      <p>
        <a href="mailto:mail@simonjensen.net">mail@simonjensen.net</a> or
        <a href="http://linkedin.com/in/sjens">linkedin.com/in/sjens</a>
      </p>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
export default {
  components: {
    MainLayout,
  },
};
</script>
