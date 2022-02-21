<template>
  <section id="menus">
    <div class="big-container">
      <div class="row my-5 py-5">
        <!-- Left -->
        <div class="col-4 bg-light-gray p-5 mt-5 mb-3">
          <div class="h2 font-bebas fw-bold">HORS D'OEUVRES</div>
          <div class="menu py-3">
            <div class="d-flex justify-content-between">
              <span class="h4 font-bebas">AHI SALMON NIGIRI</span>
              <span class="cost text-small">$48</span>
            </div>
            <p class="paragraph-text">
              Eget vulputate vitae quis rutrum blandit sed. Quam nulla sit
              lacinia.
            </p>
          </div>
          <div class="menu py-3">
            <div class="d-flex justify-content-between">
              <span class="h4 font-bebas">AHI SALMON NIGIRI</span>
              <span class="cost text-small">$21</span>
            </div>
            <p class="paragraph-text">
              Mollis ornare sit sapien, sodales. Cursur duis proin semper
              quisque.
            </p>
          </div>
          <div class="menu py-3">
            <div class="d-flex justify-content-between">
              <span class="h4 font-bebas">AHI SALMON NIGIRI</span>
              <span class="cost text-small">$32</span>
            </div>
            <p class="paragraph-text">
              Ac vel, risus ornare senectus placerat duis amet dictumst tellus.
            </p>
          </div>
          <div class="menu py-3">
            <div class="d-flex justify-content-between">
              <span class="h4 font-bebas">AHI SALMON NIGIRI</span>
              <span class="cost text-small">$22</span>
            </div>
            <p class="paragraph-text">
              Ac vel, risus ornare senectus placerat duis amet dictumst tellus.
            </p>
          </div>
        </div>

        <!-- Center -->
        <div
          id="center-menu"
          class="col-4 bg-light-gray p-5 mt-2 mb-5 text-white"
        >
          <div class="h2 font-bebas fw-bold">MAIN COURSE</div>
          <div class="menu py-3">
            <div class="d-flex justify-content-between">
              <span class="h4 font-bebas">BRAISED ABALONE</span>
              <span class="cost text-small">$52</span>
            </div>
            <p class="paragraph-text">
              Mollis ornare sit sapien, sodales. Cursur duis proin semper
              quisque.
            </p>
          </div>
          <div class="menu py-3">
            <div class="d-flex justify-content-between">
              <span class="h4 font-bebas">TWICE COOKED PORK</span>
              <span class="cost text-small">$21</span>
            </div>
            <p class="paragraph-text">
              Ac vel, risus ornare senectus placerat duis amet dictumst tellus.
            </p>
          </div>
          <div class="menu py-3">
            <div class="d-flex justify-content-between">
              <span class="h4 font-bebas">KUNG PAO CHICKEN</span>
              <span class="cost text-small">$32</span>
            </div>
            <p class="paragraph-text">
              Quis duis sit dictum aliquam a velit enim.
            </p>
          </div>
          <div class="menu py-3">
            <div class="d-flex justify-content-between">
              <span class="h4 font-bebas">CHAR SIU & SUSHIS</span>
              <span class="cost text-small">$48</span>
            </div>
            <p class="paragraph-text">
              Feugiat rhoncus ipsum tristique purus diam, et dolor molestie.
            </p>
          </div>
        </div>

        <!-- Right -->
        <div class="col-4 bg-light-gray p-5 mt-5 mb-3">
          <div class="h2 font-bebas fw-bold">DESSERTS</div>
          <div class="menu py-3">
            <div class="d-flex justify-content-between">
              <span class="h4 font-bebas">CHOCOLATE BALL CAKE</span>
              <span class="cost text-small">$13</span>
            </div>
            <p class="paragraph-text">
              In pellentesque in felis massa vehicula. In sed euismod ut.
            </p>
          </div>
          <div class="menu py-3">
            <div class="d-flex justify-content-between">
              <span class="h4 font-bebas">LIME PIE WITH CRUST</span>
              <span class="cost text-small">$14</span>
            </div>
            <p class="paragraph-text">
              Mollis ornare sit sapien, sodales. Cursur duis proin semper
              quisque.
            </p>
          </div>
          <div class="menu py-3">
            <div class="d-flex justify-content-between">
              <span class="h4 font-bebas">RASBERRY PEAR CAKE</span>
              <span class="cost text-small">$18</span>
            </div>
            <p class="paragraph-text">
              Eget vulputate vitae quis rutrum blandit sed. Quam nulla sit
              lacinia.
            </p>
          </div>
          <div class="menu py-3">
            <div class="d-flex justify-content-between">
              <span class="h4 font-bebas">CAFE AU LAIT</span>
              <span class="cost text-small">$6</span>
            </div>
            <p class="paragraph-text">
              Eget vulputate vitae quis rutrum blandit sed. Quam nulla sit
              lacinia.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Menus",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/style.scss";
#center-menu {
  background-image: url("../assets/imgs/misc22x.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
  box-shadow: inset 1px 390px 250px 0 #000000;
}
</style>