<template>
  <div class="card" >
    <img src="../assets/img_news.png" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text ">{{promotion.date}}</p>
      <p class="card-text"><b>{{promotion.title}}</b></p>
      <p class="card-text">{{promotion.desc}}</p>
      <div class="d-flex justify-content-end">
        <div href="#" class="btn btn-primary">More</div>
      </div>
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
.btn{
  width: 100px;
}
</style>