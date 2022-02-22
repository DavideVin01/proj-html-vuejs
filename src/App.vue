<template>
  <div id="app">
    <Header :navLinks="navLinks" />
    <Main />
    <Footer :footerSocials="footerSocials" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
  data() {
    return {
      navLinks: [
        {
          id: 1,
          text: "Home",
          active: true,
        },
        {
          id: 2,
          text: "Culinary History",
          active: false,
        },
        {
          id: 3,
          text: "Our Team",
          active: false,
        },
        {
          id: 4,
          text: "Our Menu",
          active: false,
        },
        {
          id: 5,
          text: "Takeout",
          active: false,
        },
        {
          id: 6,
          text: "Bulletin",
          active: false,
        },
        {
          id: 7,
          text: "Reservations",
          active: false,
        },
      ],
      footerSocials: [
        {
          name: "facebook",
        },
        {
          name: "twitter",
        },
        {
          name: "youtube",
        },
        {
          name: "instagram",
        },
        {
          name: "linkedin",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
