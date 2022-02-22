<template>
  <section id="takeout">
    <div class="container-fluid">
      <div class="row">
        <div class="col-7 p-0">
          <div id="takeout-jumbotron"></div>
        </div>
        <div class="col-5 bg-black py-5 ps-2">
          <div class="p-5 ms-5">
            <div class="section-subtitle pb-3 pt-5">
              ENJOY YOUR MEAL AT HOME
            </div>
            <div class="section-title text-white py-3">
              TAKEOUT NOW<br />
              AVAILABLE
            </div>
            <p class="text-silver py-3 paragraph-text">
              Pellentesque vitae viverra risus, sagittis. <br />Venenatis
              ridiculus scelerisque nisi in urna nulla.<br />
              Sit tempor a et nisl, ac felis.
            </p>
            <div class="pt-3 pb-5 font-worksans text-small">
              <button class="button-black">
                <i class="fas fa-car"></i>
                <span class="ps-2">VIEW TAKEOUT MENU</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Takeout",
};
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";
#takeout-jumbotron {
  background-image: url("../assets/imgs/slider72x-scaled.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 100%;
  width: 100%;
}
</style>