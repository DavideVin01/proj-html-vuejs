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

// #first-jumbotron {
//   background-image: url("../assets/imgs/slider32x.jpg");
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
//   height: 100%;
//   width: 100%;
// }

// #takeout-jumbotron {
//   background-image: url("../assets/imgs/slider72x-scaled.jpg");
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: bottom;
//   height: 100%;
//   width: 100%;
// }

// #critics-left {
//   background-image: url("../assets/imgs/info52x.jpg");
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
//   height: 100%;
//   width: 640px;
//   box-shadow: inset 1px 300px 250px 0 #000000;
// }
// #critics-right {
//   background-image: url("../assets/imgs/info12x.jpg");
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
//   width: 640px;
//   height: 100%;
//   box-shadow: inset 1px 300px 250px 0 #000000;
// }

// #kung-pao-chicken-jumbo {
//   .container-fluid {
//     .jumbotron {
//       background-image: url("../assets/imgs/page52x.jpg");
//       background-size: cover;
//       background-repeat: no-repeat;
//       background-position: bottom center;
//       height: 500px;
//       width: 100%;
//     }
//   }
// }

// #center-menu {
//   background-image: url("../assets/imgs/misc22x.jpg");
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: bottom center;
//   box-shadow: inset 1px 390px 250px 0 #000000;
// }

// #third-jumbotron {
//   background-image: url("../assets/imgs/hero42x.jpg");
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
//   width: 100%;
//   padding: 30px 0;
// }
// #third-jumbotron-box {
//   width: 500px;
//   padding: 80px;
// }
</style>