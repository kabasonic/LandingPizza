<template>
  <div class="card con">
    <div class="stickers">
      <div class="sticker-element hit">Хит</div>
    </div>
    <div class="img">
      <img src="../assets/pizza/img.png" class="card-img-top" alt="">
    </div>

    <div class="card-body">
      <div class="row">
        <div class="col-12 d-flex flex-column">
          <div class="d-flex justify-content-between">
            <span>{{ product.title }}</span>
            <b-icon icon="exclamation-circle"></b-icon>
          </div>
          <div class="d-flex justify-content-between">
            <span><b>{{ product.price }}</b></span>
            <span>{{ product.weight }}</span>
          </div>
          <div class="d-flex mt-3">
            <div class="btn btn-primary w-100" @click="addProduct">+</div>
            <input type="text" v-model="counter" class="mx-1" style="width: 30px; text-align: center;">
            <div class="btn btn-primary w-100" @click="deleteProduct">-</div>

          </div>
          <div class="btn btn-primary mt-3 " style="width: 100%" @click="sendData">Add</div>
        </div>

      </div>

      <!--            <h1 class="card-title">Name: {{ product.name }}</h1>-->
      <!--            <p class="card-text">Desc.: {{product.text}}</p>-->
      <!--            <p class="card-text">Price: {{product.price}}</p>-->
      <!--            <p class="card-text">Weight: {{product.weight}}</p>-->
      <!--            <div class="d-flex">-->
      <!--              <div class="btn btn-primary w-100" @click="addProduct" >+</div>-->
      <!--              <input type="text" v-model="counter" class="mx-1" style="width: 30px">-->
      <!--              <div class="btn btn-primary w-100" @click="deleteProduct">-</div>-->
      <!--            </div>-->

    </div>
  </div>

</template>

<script>
import axios from "axios";

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
    deleteProduct() {
      console.log('here -')
      if (this.counter > 1) {
        this.counter--
      }
    },

    sendData() {
      const data = {
        image: '123',
        name: '123',
        description: '123',
        price: '123',
        weight: '123',
      }
      axios.post("http://127.0.0.1:40721/api/v1/products", data).then(response => {
        this.$emit('new-product', response.data)
      })
    }

  },
  mounted() {
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

/*.table-image{*/
/*  display: table;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*}*/

/*.table-cell {*/
/*  display: table-cell;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  vertical-align: middle;*/
/*}*/

.img {
  margin-top: 25px;
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
}

.con {
  width: 100%;
  background: #fff;
  margin-bottom: 32px;
  padding: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

</style>