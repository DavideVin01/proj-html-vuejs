<template>
  <section id="kung-pao-chicken-jumbo">
    <div class="container-fluid p-0">
      <div class="jumbotron d-flex justify-content-center align-items-end">
        <div class="text-white pb-3 font-worksans text-small" role="button">
          KUNG PAO CHICKEN - $32
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SecondJumbotron",
};
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";
#kung-pao-chicken-jumbo {
  .container-fluid {
    .jumbotron {
      background-image: url("../assets/imgs/page52x.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: bottom center;
      height: 500px;
      width: 100%;
    }
  }
}
</style>