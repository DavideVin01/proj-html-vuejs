<template>
  <header>
    <!-- Navigation bar | New Component -->
    <!-- TODO // Generate elements using props -->
    <nav
      class="d-flex justify-content-between align-items-center py-3 container"
    >
      <div>
        <img
          src="../assets/imgs/logo-restaurant.png"
          alt="AVADA RESTAURANT LOGO"
        />
      </div>
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
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">
@import ".././assets/scss/style.scss";
header {
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
</style>