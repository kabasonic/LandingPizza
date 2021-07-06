<template>
  <div>
    <b-navbar toggleable="md" class="mx-auto">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <!--      <b-navbar-brand>Pizza</b-navbar-brand>-->
      <b-collapse id="nav-text-collapse" is-nav>
        <div class="container ">
          <b-navbar-nav>
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav item nav-link " to="/shop/all">Menu</router-link>
            <router-link class="nav-link" to="/about">About</router-link>
            <router-link class="nav-link" to="/pricing-delivery">Pricing & Delivery</router-link>
            <router-link class="nav-link" to="/news">News</router-link>
            <router-link class="nav-link" to="/reviews">Reviews</router-link>
            <router-link class="nav-link" to="/contacts">Contacts</router-link>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto d-none d-lg-block">
            <router-link class="nav-link" to="#">
              <b-icon-bag></b-icon-bag>
              <span class="badge badge-success ml-2">0</span>
            </router-link>

          </b-navbar-nav>

        </div>
      </b-collapse>


    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.hujnia {
  font-size: 18px;
}

.navbar {
  background-color: #e73e2f;
}

.navbar-light .navbar-nav .nav-link {
  color: white;
  font-size: large;
}
</style>