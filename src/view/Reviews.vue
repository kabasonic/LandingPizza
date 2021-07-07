<template>
  <div class="app-background">
    <div class="container py-5">
      <h1 class="py-2 text">Reviews</h1>
      <div class="content">
       <Review/>
       <Review/>
       <Review/>
      </div>
    </div>
  </div>
</template>

<script>
import Review from "@/components/Review";
export default {
  name: "Reviews",
  components: {Review}
}
</script>

<style scoped>

.app-background {
  background-image: url("../assets/bg.png");
}

.content {
  background: #fff;
  padding: 30px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}
</style>