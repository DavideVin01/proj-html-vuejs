<template>
  <section id="third-jumbotron">
    <div class="container p-5">
      <div class="row">
        <div class="col-4">
          <div id="third-jumbotron-box" class="bg-black text-white">
            <div class="d-flex justify-content-between py-3">
              <span class="section-title">BRAISED ABALONE</span>
              <span class="cost text-medium">$52</span>
            </div>
            <hr class="border-white w-25" />
            <p class="paragraph-text text-silver py-4">
              Pretium accumsan porttitor viverra leo gravida mollis imperdiet.
              Fringilla nibh pharetra sociis leo amet.
            </p>
            <div class="py-3 font-worksans">
              <button class="button-black">VIEW IN THE MENU</button>
            </div>
          </div>
        </div>
        <div class="offset-8"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ThirdJumbotron",
};
</script>

<style scoped lang="scss">
#third-jumbotron {
  background-image: url("../assets/imgs/hero42x.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  padding: 30px 0;
}
#third-jumbotron-box {
  width: 500px;
  padding: 80px;
}
</style>