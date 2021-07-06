<template>
  <div class="app-background">
    <Carousel/>
      <div class="container ">

        <div class="row mb-3">
          <div v-for="(product, index) in products" :key="index" class="col-md-3 mt-4">
            <CardProduct :product="product"/>
<!--            <CardProduct/>-->
          </div>
        </div>

      </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import CardProduct from "@/components/CardProduct";

export default {
  name: "Home",
  components: {Carousel, CardProduct},

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
      ]
    }
  },

  methods:{
    setProduct(data){
      this.products = data
    }
  },

  mounted() {
  }

}
</script>

<style scoped>
.app-background {
  background-image: url("../assets/bg.png");
}
</style>