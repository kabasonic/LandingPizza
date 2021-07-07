<template>
  <div class="app-background bp-3">
    <Carousel/>
    <div class="container ">
      <div>
        <h2>Popular eats</h2>
        <div class="row mb-3">
          <div v-for="(product, index) in products" :key="index" class="col-sm-6 col-md-4 col-lg-3">
            <CardProduct :product="product"/>
          </div>
        </div>
      </div>

      <div>
        <h2>New eats</h2>
        <div class="row mb-3">
          <div v-for="(product, index) in products" :key="index" class="col-sm-6 col-md-4 col-lg-3">
            <CardProduct :product="product"/>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center py-4">
        <button type="button" class="btn btn-primary btn-lg ">Large button</button>
      </div>

    </div>
    <!--        Section-->
    <div class="vantages py-4">
      <div class="d-flex align-items-center flex-column py-3">
        <div class="d-flex  flex-md-row  ">
          <div class="d-flex justify-content-between ">
            <img src="../assets/section/img.png" alt="Not found"/>
            <div class="text-section">
              Lorem ipsum
            </div>
          </div>

          <div class="d-flex align-items-center px-3">
            <img src="../assets/section/img_1.png" alt="Not found"/>
            <div class="text-section">
              Lorem ipsum
            </div>
          </div>

          <div class="d-flex align-items-center px-3">
            <img src="../assets/section/img_2.png" alt="Not found"/>
            <div class="text-section">
              Lorem ipsum
            </div>
          </div>

          <div class="d-flex align-items-center px-3">
            <img src="../assets/section/img_3.png" alt="Not found"/>
            <div class="text-section">
              Lorem ipsum
            </div>
          </div>

        </div>
      </div>
    </div>
    <!--        Section-->

    <div class="about-section py-3">
      <div class="container">
        <h2 class="py-3 h2">News and promotions</h2>
        <div class="row mb-4">
          <div v-for="(promotion,index) in promotions" :key="index" class="col-md-4 mt-4">
            <CardNews :promotion="promotion"/>
          </div>
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

  data() {
    return {
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
        },
        {
          img: '../assets/img_news.png',
          date: '03.03.2021',
          title: 'Title News 3',
          desc: 'Description 3'
        },
        {
          img: '../assets/img_news.png',
          date: '03.03.2021',
          title: 'Title News 3',
          desc: 'Description 3'
        },
        {
          img: '../assets/img_news.png',
          date: '03.03.2021',
          title: 'Title News 3',
          desc: 'Description 3'
        },
        {
          img: '../assets/img_news.png',
          date: '03.03.2021',
          title: 'Title News 3',
          desc: 'Description 3'
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
  methods: {
    setProduct(data) {
      this.products = data
    },
    setPromotion(dataPromotions) {
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

.h2 {
  color: white;
}

.vantages {
  background-color: #ee8225;
  background-image: url(../assets/asfalt_light.png);
}

.btn {
  width: 200px;
  background: #ee8225;
  border-color: #ee8225;
  color: #fff;
}

.btn:hover, .btn:focus, .btn:active {
  background: #E73E2D;
  border-color: #E73E2D;
  color: #fff;
  box-shadow: none;
}

.about-section {
  background-color: darkslategrey;
  background-image: url(../assets/asfalt_light.png);
}

.text-section {
  color: white;
  font-family: Montserrat;
  font-size: 22px;
}
</style>