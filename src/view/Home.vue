<template>
  <div class="app-background">
    <Carousel/>
      <div class="container ">
        <div>
          <h2>Popular eats</h2>
          <div class="row mb-3">
            <div v-for="(product, index) in products" :key="index" class="col-md-3 mt-4">
              <CardProduct :product="product"/>
            </div>
          </div>
        </div>

        <div>
          <h2>New eats</h2>
          <div class="row mb-3">
            <div v-for="(product, index) in products" :key="index" class="col-md-3 mt-4">
              <CardProduct :product="product"/>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-primary btn-lg ">Large button</button>
        </div>

<!--        Section-->
        <div class="vantages">
          <div class="container">
            <div class="d-flex justify-content-between flex-column flex-md-row  py-3">
              <div class="d-flex align-items-center ">
                <div class="d-none d-lg-block">
                  <img src="../assets/section/img.png" alt="Not found"/>
                </div>
                <div>
                  Lorem Ipsum
                </div>
              </div>

              <div class="d-flex align-items-center ">
                <div class="d-none d-lg-block">
                  <img src="../assets/section/img_1.png" alt="Not found"/>
                </div>
                <div>
                  Lorem ipsum
                </div>
              </div>

              <div class="d-flex align-items-center ">
                <div class="d-none d-lg-block">
                  <img src="../assets/section/img_2.png" alt="Not found"/>
                </div>
                <div>
                  Lorem ipsum
                </div>
              </div>

              <div class="d-flex align-items-center ">
                <div class="d-none d-lg-block">
                  <img src="../assets/section/img_3.png" alt="Not found"/>
                </div>
                <div>
                  Lorem ipsum
                </div>
              </div>
            </div>
          </div>
        </div>
<!--        Section-->

        <h2>News and promotions</h2>
        <div class="row mb-3">
          <div v-for="(promotion,index) in promotions" :key="index" class="col-md-3 mt-4">
            <CardNews :promotion="promotion"/>
          </div>
        </div>

      </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import CardProduct from "@/components/CardProduct";
import CardNews from "@/components/CardNews";

export default {
  name: "Home",
  components: {CardNews, Carousel, CardProduct},

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
    },
    setPromotion(dataPromotions){
      this.promotions = dataPromotions
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

.vantages {
  background-color: #ee8225;
  background-image: url(../assets/asfalt_light.png);
}

</style>