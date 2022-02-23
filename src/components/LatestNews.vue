<template>
  <section id="latest-news">
    <div class="container">
      <h2 class="my-5 py-4 font-lora text-center">Latest news & promotions</h2>
      <div class="row mb-5 pb-3">
        <!-- Left col -->
        <div class="col-4 d-flex flex-column align-items-center">
          <img
            src="../assets/imgs/blog92x-400x458.jpg"
            class="mb-4 perspective"
            alt="Coffee"
          />
          <div class="h4 font-bebas">THE BEST COFFEE IN TOWN</div>
          <figcaption class="text-small">
            By admin | January 7th, 2020 | Categories: News
          </figcaption>
        </div>

        <!-- Center col -->
        <div class="col-4 d-flex flex-column align-items-center">
          <img
            src="../assets/imgs/blog72x-400x458.jpg"
            class="mb-4 perspective"
            alt="Coffee"
          />
          <div class="h4 font-bebas">DISCOVER OUR NEW MENU</div>
          <figcaption class="text-small">
            By admin | January 7th, 2020 | Categories: News
          </figcaption>
        </div>

        <!-- Right col -->
        <div class="col-4 d-flex flex-column align-items-center">
          <img
            src="../assets/imgs/blog82x-400x458.jpg"
            class="mb-4 perspective"
            alt="Coffee"
          />
          <div class="h4 font-bebas">WE NOW ACCEPT SQUARE!</div>
          <figcaption class="text-small">
            By admin | January 7th, 2020 | Categories: News
          </figcaption>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LatestNews",
};
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";
</style>