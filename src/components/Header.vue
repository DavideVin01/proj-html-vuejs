<template>
  <header class="container-fluid">
    <div id="jumbo-nav">
      <div class="row d-flex">
        <div class="col-5 bg-black px-5">
          <div class="py-4">
            <img
              src="../assets/imgs/logo-restaurant.png"
              alt="AVADA RESTAURANT LOGO"
              role="button"
            />
          </div>
          <div class="p-5 ms-5">
            <div class="section-subtitle pb-3 pt-5">THE BEST TABLE IN TOWN</div>
            <div class="header-title text-white py-3 pulse">
              FINE DINING EXPERIENCE
            </div>
            <p class="text-silver py-3 paragraph-text">
              Pellentesque vitae viverra risus, sagittis. <br />Venenatis
              ridiculus scelerisque nisi in urna nulla.<br />
              Sit tempor a et nisl, ac felis.
            </p>
            <div class="pt-3 pb-5 font-worksans text-small">
              <button class="button-black border-white">
                EXPLORE THE MENU
              </button>
            </div>
          </div>
        </div>
        <div class="col-7 p-0">
          <div id="jumbotron">
            <nav class="d-flex justify-content-center align-items-center py-4">
              <ul class="d-flex font-worksans">
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
            <div id="boxes" class="d-flex flex-column align-items-end">
              <div
                id="first-square"
                role="button"
                class="
                  grow
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
                id="second-square"
                class="
                  grow
                  square-white
                  rounded
                  mx-2
                  my-1
                  text-black text-small
                "
                role="button"
              >
                <div class="text-forest-green text-big">$39</div>
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

#first-square {
  top: 120px;
  right: 0;
}
#second-square {
  top: 185px;
  right: 0;
}
</style>