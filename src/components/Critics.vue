<template>
  <section id="critics-score">
    <div class="container">
      <h2 class="my-5 py-4 cursive-text text-center">
        What critics are saying about us
      </h2>
      <div class="row mb-5">
        <div class="col-6 p-0">
          <img src="../assets/imgs/blog72x.jpg" alt="Critics" />
        </div>
        <div
          class="col-6 bg-black p-5 d-flex flex-column justify-content-center"
        >
          <div class="subtitle px-5 py-3">MEGGY STEWART</div>
          <div class="section-title text-white px-5 py-3">NEW YORK TIMES</div>
          <div class="d-flex text-white px-5 py-3">
            <i v-for="star in 5" :key="star.index" class="fas fa-star"></i>
          </div>
          <hr class="border-white w-25 ms-5" />
          <p class="paragraph-text text-silver px-5 py-3">
            Non arcu mauris tortor ultrices mollis tellus euismod fermentum.
            Habitant amet tincidunt id sapien accumsan sed at.
          </p>
          <p class="paragraph-text text-silver px-5 py-3">
            Mmalesuada ullamcorper amet. Pretium pretium dignissim nisi.
          </p>
          <div class="pt-3 px-5 py-3">
            <button class="text-white border-white">READ FULL ARTICLE</button>
          </div>
        </div>
      </div>

      <div class="row d-flex justify-content-between mb-5 pb-5">
        <div
          class="col-6 p-5 d-flex flex-column justify-content-center"
          id="critics-left"
        >
          <div class="subtitle px-5 py-3 text-white">MARY MAXEY</div>
          <div class="section-title text-white px-5 py-3">THE GUARDIAN</div>
          <div class="d-flex text-white px-5 py-3">
            <i v-for="star in 5" :key="star.index" class="fas fa-star"></i>
          </div>
          <hr class="border-white w-25 ms-5" />
          <p class="paragraph-text text-silver px-5 py-3 text-white">
            Non arcu mauris tortor ultrices mollis tellus euismod fermentum.
            Habitant amet tincidunt id sapien accumsan sed at.
          </p>
          <p class="paragraph-text text-silver px-5 py-3 text-white">
            Mmalesuada ullamcorper amet. Pretium pretium dignissim nisi.
          </p>
          <div class="pt-3 px-5 py-3">
            <button class="text-white border-white">READ FULL ARTICLE</button>
          </div>
        </div>

        <div
          class="col-6 bg-black p-5 d-flex flex-column justify-content-center"
          id="critics-right"
        >
          <div class="subtitle px-5 py-3 text-white">PATRICK MONROE</div>
          <div class="section-title text-white px-5 py-3">GLOBE AND MAIL</div>
          <div class="d-flex text-white px-5 py-3">
            <i v-for="star in 5" :key="star.index" class="fas fa-star"></i>
          </div>
          <hr class="border-white w-25 ms-5" />
          <p class="paragraph-text text-silver px-5 py-3 text-white">
            Non arcu mauris tortor ultrices mollis tellus euismod fermentum.
            Habitant amet tincidunt id sapien accumsan sed at.
          </p>
          <p class="paragraph-text text-silver px-5 py-3 text-white">
            Mmalesuada ullamcorper amet. Pretium pretium dignissim nisi.
          </p>
          <div class="px-5 py-3">
            <button class="text-white border-white">READ FULL ARTICLE</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Critics",
};
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";
#critics-left {
  background-image: url("../assets/imgs/info52x.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 640px;
  box-shadow: inset 1px 300px 250px 0 #000000;
}
#critics-right {
  background-image: url("../assets/imgs/info12x.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 640px;
  height: 100%;
  box-shadow: inset 1px 300px 250px 0 #000000;
}
</style>