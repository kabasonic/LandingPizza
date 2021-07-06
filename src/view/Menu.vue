<template>
  <div class="app-background">
    <div class="container row">
            <div class="col-md-4 col-lg-3">
              <nav class="navbar bg-light">
                <!-- Links -->
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Pizza</a>
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
                      <div class="row mb-3">
                        <div v-for="(product, index) in products" :key="index" class="col-md-3 mt-4">
                          <CardProduct :product="product"/>
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
        }
      ],
      promotions: [
        {
          img: '../assets/img_news.png',
          date: '01.01.2021',
          title: 'Title News 1',
          desc: 'Description 1'
        },
        {
          img: '../assets/img_news.png',
          date: '02.02.2021',
          title: 'Title News 2',
          desc: 'Description 2'
        },
        {
          img: '../assets/img_news.png',
          date: '03.03.2021',
          title: 'Title News 3',
          desc: 'Description 3'
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
</style>