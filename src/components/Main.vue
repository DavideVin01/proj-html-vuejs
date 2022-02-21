<template>
  <main>
    <!-- Food is our common ground section -->
    <CommonGround />

    <!-- THE BEST TABLE IN TOWN - JUMBOTRON -->
    <FirstJumbotron />

    <!-- WHAT CRITICS SAYS ABOUT US -->
    <Critics />

    <!-- KUNG PAO CHICKEN - FULL JUMBOTRON -->
    <SecondJumbotron />

    <!-- LATEST NEWS & PROMOTIONS -->
    <LatestNews />

    <!-- TAKEOUT NOW AVAILABLE -->
    <Takeout />

    <!-- MENUS -->
    <Menus />

    <!-- FINAL JUMBOTRON -->
    <ThirdJumbotron />
  </main>
</template>

<script>
import CommonGround from "./CommonGround.vue";
import FirstJumbotron from "./FirstJumbotron.vue";
import Critics from "./Critics.vue";
import SecondJumbotron from "./SecondJumbotron.vue";
import LatestNews from "./LatestNews.vue";
import Takeout from "./Takeout.vue";
import Menus from "./Menus.vue";
import ThirdJumbotron from "./ThirdJumbotron.vue";
export default {
  name: "Main",
  components: {
    CommonGround,
    FirstJumbotron,
    Critics,
    SecondJumbotron,
    LatestNews,
    Takeout,
    Menus,
    ThirdJumbotron,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/style.scss";
</style>