<template>
  <div class="card" >
    <img src="../assets/img_news.png" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Date: {{promotion.date}}</p>
      <h5 class="card-title">Title: {{promotion.title}}</h5>
      <p class="card-text">Desc.: {{promotion.desc}}</p>
      <a href="#" class="btn btn-primary">More</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardNews",
  props: ["promotion"]
}
</script>

<style scoped>

</style>