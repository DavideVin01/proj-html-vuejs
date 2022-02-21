<template>
  <section id="jumbotron-1">
    <div class="container-fluid">
      <div class="row">
        <div class="col-7 p-0">
          <div id="first-jumbotron"></div>
        </div>
        <div class="col-5 bg-black py-5 ps-2">
          <div class="p-5 ms-5">
            <div class="subtitle pb-3 pt-5">FINE DINING EXPERIENCE</div>
            <div class="section-title text-white py-3">
              THE BEST TABLE<br />
              IN TOWN
            </div>
            <p class="text-silver py-3 paragraph-text">
              Pellentesque vitae viverra risus, sagittis. <br />Venenatis
              ridiculus scelerisque nisi in urna nulla.<br />
              Sit tempor a et nisl, ac felis.
            </p>
            <div class="pt-3 pb-5">
              <button class="text-white border-white">EXPLORE THE MENU</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FirstJumbotron",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/style.scss";
#first-jumbotron {
  background-image: url("../assets/imgs/slider32x.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
}
</style>