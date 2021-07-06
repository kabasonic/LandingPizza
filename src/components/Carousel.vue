<template>
  <div class="main-container slider-background">
    <div class="container py-3 d-none d-md-block">
<!--    <b-carousel-->
<!--        id="carousel-1"-->
<!--        v-model="slide"-->
<!--        :interval="4000"-->
<!--        controls-->
<!--        indicators-->
<!--        img-width="100"-->
<!--        img-height="100"-->
<!--        style="text-shadow: 1px 1px 2px #333;"-->
<!--        @sliding-start="onSlideStart"-->
<!--        @sliding-end="onSlideEnd">-->

<!--      <b-carousel-slide>-->
<!--        <template #img>-->
<!--          <img-->
<!--              class="d-block img-fluid w-100"-->
<!--              width="1024"-->
<!--              height="480"-->
<!--              src="../assets/slider_image.png"-->
<!--              alt="image slot"/>-->

<!--        </template>-->
<!--        First slide-->
<!--        <br> Description-->
<!--      </b-carousel-slide>-->

<!--      <b-carousel-slide>-->
<!--        <template #img>-->
<!--          <img-->
<!--              class="d-block img-fluid w-100"-->
<!--              width="1024"-->
<!--              height="480"-->
<!--              src="../assets/slider_image.png"-->
<!--              alt="image slot"/>-->

<!--        </template>-->
<!--        Second slide-->
<!--        <br> Description-->
<!--      </b-carousel-slide>-->

<!--      <b-carousel-slide>-->
<!--        <template #img>-->
<!--          <img-->
<!--              class="d-block img-fluid w-100"-->
<!--              width="1024"-->
<!--              height="480"-->
<!--              src="../assets/slider_image.png"-->
<!--              alt="image slot"/>-->

<!--        </template>-->
<!--        Three slide-->
<!--        <br> Description-->
<!--      </b-carousel-slide>-->

<!--    </b-carousel>-->
    </div>
    <div>
      <hr class="hr">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

      slide: 0,
      sliding: null
    }
  },
  methods: {
    prev() {
      this.$refs.myCarousel.prev()
    },
    next() {
      this.$refs.myCarousel.next()
    }
  }
}
</script>

<style scoped>
.slider-background{
  background: #241f20;
  background-image: url("../assets/bg_slider.png");
}
.hr{
  border: 2px solid #EE8324;
  margin-bottom: 0;
}
</style>