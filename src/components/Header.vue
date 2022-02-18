<template>
  <header class="container-fluid">
    <!-- Navigation bar | New Component -->
    <!-- TODO // Generate elements using props -->
    <div id="jumbo-nav" class="big-container">
      <div class="row d-flex">
        <div class="col-5 bg-black">
          <div class="py-4">
            <img
              src="../assets/imgs/logo-restaurant.png"
              alt="AVADA RESTAURANT LOGO"
            />
          </div>
          <div class="p-5 ms-5">
            <div class="subtitle pb-3 pt-5">THE BEST TABLE IN TOWN</div>
            <div class="section-title text-white py-3">
              FINE DINING EXPERIENCE
            </div>
            <p class="text-silver py-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              unde quaerat molestiae iste error? Dolore animi iure minus
              eligendi, quaerat velit soluta.
            </p>
            <div class="pt-3 pb-5">
              <button class="text-white border-white">EXPLORE THE MENU</button>
            </div>
          </div>
        </div>
        <div class="col-7">
          <div id="jumbotron-right-side">
            <nav class="d-flex align-items-center py-4">
              <ul class="d-flex">
                <li><a href="#" class="active">Home</a></li>
                <li><a href="#">Culinary History</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Our Menu</a></li>
                <li><a href="#">Takeout</a></li>
                <li><a href="#">Bulletin</a></li>
                <li><a href="#">Reservations</a></li>
                <li>
                  <a href="#"><i class="fas fa-shopping-cart"></i></a>
                </li>
              </ul>
            </nav>
            <div class="d-flex flex-column align-items-end">
              <div
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
                <i class="fas fa-caret-square-up fa-2x"></i>
                <div>Demos</div>
              </div>
              <div class="square-white rounded mx-2 my-1 text-black">A</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";
header {
  background-color: $black;
}
.big-container {
  background-color: $black;
}

nav {
  ul {
    li {
      padding: 0 15px;
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

#jumbotron-right-side {
  background-image: url("../assets/imgs/slider52x.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
}

button {
  padding: 10px 15px;
  background-color: transparent;
}
</style>