<template>
  <div class="app-background">
    <div class="container py-4">
      <div class="row">
        <div class="col-md-4 col-lg-3">
          <nav class="navbar mt-5 content">
            <!-- Links -->
            <ul class="navbar-nav pl-3">
              <li class="nav-item">
                <router-link class="nav-link" to="#">Pizza</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Snacks</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Ossetian pies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Salads</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Desserts</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Drinks</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-md-8 col-lg-9">
          <div>
            <h2>Popular eats</h2>
            <div class="row mb-3 d-flex justify-content-center">
              <div v-for="(product, index) in products" :key="index" class="col-sm-7 col-md-5 col-lg-4">
                <CardProduct :product="product"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from "@/components/CardProduct";

export default {
  name: "Menu",
  components: {CardProduct},
  data(){
    return{
      products: [
        {
          img: '../assets/pizza/img.png',
          name: 'Product 1',
          text: 'Lorem 1',
          price: 111,
          weight: 110
        },
        {
          img: '../assets/pizza/img.png',
          name: 'Product 2',
          text: 'Lorem 2',
          price: 222,
          weight: 220
        },
        {
          img: '../assets/pizza/img.png',
          name: 'Product 3',
          text: 'Lorem 3',
          price: 333,
          weight: 330
        },
        {
          img: '../assets/pizza/img.png',
          name: 'Product 4',
          text: 'Lorem 4',
          price: 444,
          weight: 440
        },
        {
          img: '../assets/pizza/img.png',
          name: 'Product 5',
          text: 'Lorem 5',
          price: 555,
          weight: 220
        },
        {
          img: '../assets/pizza/img.png',
          name: 'Product 6',
          text: 'Lorem 6',
          price: 666,
          weight: 660
        },
        {
          img: '../assets/pizza/img.png',
          name: 'Product 7',
          text: 'Lorem 7',
          price: 777,
          weight: 770
        },
        {
          img: '../assets/pizza/img.png',
          name: 'Product 8',
          text: 'Lorem 8',
          price: 888,
          weight: 880
        },
        {
          img: '../assets/pizza/img.png',
          name: 'Product 8',
          text: 'Lorem 8',
          price: 888,
          weight: 880
        }
      ]
    }
  },
  methods:{
    setProduct(data){
      this.products = data
    }
  }
}
</script>

<style scoped>
.app-background {
  background-image: url("../assets/bg.png");
}

.content {
  width: 100%;
  background: #fff;
  margin-bottom: 32px;
  padding: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

.nav-link{
  color: black;
}
</style>