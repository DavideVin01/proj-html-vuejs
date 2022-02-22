<template>
  <footer>
    <div
      class="
        mini-container
        text-white
        d-flex
        align-items-center
        justify-content-center
        text-center
        flex-column
      "
    >
      <div class="py-4">
        <img
          src="../assets/imgs/logo-restaurant.png"
          alt="AVADA RESTAURANT LOGO"
        />
      </div>
      <p class="paragraph-text text-silver">
        Quam eu proin sit massa condimentum. Volupat non pulvinar aliquet nunc.
        Quam eu proin sit massa condimentum.
      </p>
      <div id="logos" class="py-5 mb-5">
        <img
          v-for="social in footerSocials"
          :key="social.index"
          class="logo"
          :src="require(`../assets/imgs/logos/${social.name}.png`)"
          :alt="social.name"
          role="button"
        />
      </div>
    </div>
    <div
      id="copyright"
      class="
        bg-black
        text-center text-small text-silver
        d-flex
        justify-content-center
        align-items-center
        h-25
      "
    >
      Copyright 2012 - 2019 Avada | All Rights Reserved | Powered by
      <strong class="text-white" role="button"> WordPress | ThemeFusion</strong>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["footerBaseUri", "footerSocials"],
  name: "Footer",
};
</script>

<style>
footer {
  background-image: url("../assets/imgs/footer2x.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
  height: 550px;
  width: 100%;
  padding: 100px 0;
}
.logo {
  width: 50px;
  margin: 0 10px;
}
</style>