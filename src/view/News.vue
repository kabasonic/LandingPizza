<template>
  <div class="app-background">
    <div class="container">
<!--      v-for promotion items-->
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
<!--      v-for promotion items-->

<!--      Pagination navigation-->
      <div class="overflow-auto d-flex align-items-center justify-content-center">
        <div class="mt-3">
          <b-pagination
              v-model="currentPage"
              pills :total-rows="rows"
              first-number
              last-number>
          </b-pagination>
        </div>
      </div>
<!--      Pagination navigation-->
    </div>
  </div>
</template>

<script>
import CardNews from "@/components/CardNews";
export default {
  name: "News",
  components: {CardNews},
  data() {
    return {
      rows: 100,
      currentPage: 1,
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
  }
}
</script>

<style scoped>
.app-background {
  background-image: url("../assets/bg.png");
}
</style>