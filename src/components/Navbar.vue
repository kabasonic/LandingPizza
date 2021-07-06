<template>
  <nav class="navbar navbar-expand-lg navbar-light " >
<!--    <a class="navbar-brand" href="#">Pizza</a>-->
   <div class="container">
     <button class="navbar-toggler"
             type="button"
             data-toggle="collapse"
             data-target="#navbarNav"
             aria-controls="navbarNav"
             aria-expanded="false"
             aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>

     <div class="collapse navbar-collapse " id="navbarNav">
       <ul class="navbar-nav mr-auto">
         <li class="nav-item ">
           <router-link class="nav-link" to="/">Home</router-link>
         </li>
         <li class="nav-item">
           <router-link class="nav item nav-link " to="/shop/all">Menu</router-link>
         </li>
         <li class="nav-item">
           <router-link class="nav-link" to="/about">About</router-link>
         </li>
         <li class="nav-item">
           <router-link class="nav-link" to="/pricing-delivery">Pricing & Delivery</router-link>
         </li>
         <li class="nav-item">
           <router-link class="nav-link" to="/news">News</router-link>
         </li>
         <li class="nav-item">
           <router-link class="nav-link" to="/reviews">Reviews</router-link>
         </li>
         <li class="nav-item">
           <router-link class="nav-link" to="/contacts">Contacts</router-link>
         </li>

       </ul>
       <ul class="navbar-nav ml-auto">
         <li class="nav-item ">
           <router-link class="nav-link" to="#">
             <b-icon-bag></b-icon-bag>
             <span class="badge badge-success ml-2">0</span>
           </router-link>
         </li>
       </ul>
     </div>
   </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.hujnia{
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