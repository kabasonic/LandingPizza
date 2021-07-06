<template>
  <div class="card">
    <div class="stickers">
      <div class="sticker-element hit">Хит</div>
    </div>
    <div class="table-image">
      <div class="table-cell">
        <img src="../assets/pizza/img.png" class="card-img-top" alt="">
      </div>
    </div>

    <div class="card-body">
      <h5 class="card-title">Name: {{ product.name }}</h5>
      <p class="card-text">Desc.: {{product.text}}</p>
      <p class="card-text">Price: {{product.price}}</p>
      <p class="card-text">Weight: {{product.weight}}</p>
      <a href="#" class="btn btn-primary" @click="addProduct">+</a>
<!--      <input type="text">-->
      {{counter}}
      <a href="#" class="btn btn-primary" @click="deleteProduct">-</a>
    </div>
  </div>

</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
  data() {
    return {
      counter: 1,
    }
  },
  methods: {
    addProduct() {
      console.log('here +')
      this.counter++
    },
    deleteProduct(){
      console.log('here -')
      if(this.counter>1){
        this.counter--
      }
    }
  }
}
</script>

<style scoped>
.stickers {
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 10;
}

.sticker-element {
  color: #fff;
  padding: 7px 10px 5px;
  line-height: 1;
  margin-bottom: 5px;
  font-size: 14px;
  display: inline-block;
  font-family: 'Roboto', sans-serif;
}

.sticker-element.hit {
  background: #FFB200;
}

.table-image{
  display: table;
  width: 100%;
  height: 100%;
}

.table-cell {
  display: table-cell;
  width: 100%;
  height: 100%;
  vertical-align: middle;
}



</style>