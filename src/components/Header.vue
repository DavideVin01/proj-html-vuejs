<template>
  <header class="container-fluid">
    <div id="jumbo-nav">
      <div class="row d-flex">
        <div class="col-5 bg-black px-5">
          <div class="py-4">
            <img
              src="../assets/imgs/logo-restaurant.png"
              alt="AVADA RESTAURANT LOGO"
            />
          </div>
          <div class="p-5 ms-5">
            <div class="subtitle pb-3 pt-5">THE BEST TABLE IN TOWN</div>
            <div class="header-title text-white py-3">
              FINE DINING EXPERIENCE
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
        <div class="col-7 p-0">
          <div id="jumbotron">
            <nav class="d-flex justify-content-center align-items-center py-4">
              <ul class="d-flex">
                <li v-for="link in navLinks" :key="link.id">
                  <a href="#" :class="{ active: link.active }">{{
                    link.text
                  }}</a>
                </li>
                <li>
                  <a href="#"><i class="fas fa-shopping-cart"></i></a>
                </li>
              </ul>
            </nav>
            <div class="d-flex flex-column align-items-end">
              <div
                role="button"
                class="
                  square-white
                  rounded
                  mx-2
                  d-flex
                  flex-column
                  justify-content-center
                  align-items-center
                  text-clear-blue
                "
              >
                <i class="fas fa-caret-square-up"></i>
                <div class="text-small">Demos</div>
              </div>
              <div
                class="square-white rounded mx-2 my-1 text-black text-small"
                role="button"
              >
                $39
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ["navLinks"],
  name: "Header",
};
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";
header {
  background-color: $black;
}

#jumbo-nav {
  min-height: 800px;
}

.big-container {
  background-color: $black;
}

nav {
  ul {
    li {
      padding: 0 20px;
      list-style-type: none;
      margin-top: 15px;
      a {
        text-decoration: none;
        color: $silver;
        font-size: 14px;
        &:active,
        &:hover {
          color: $white;
        }
      }
      .active {
        color: $white;
      }
    }
  }
}

#jumbotron {
  background-image: url("../assets/imgs/slider52x.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 800px;
  width: 100%;
}

.fa-caret-square-up {
  font-size: 26px;
}
</style>