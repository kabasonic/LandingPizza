<template>
  <!--  Footer-->
  <div class="footer-wrapper">
    <div class="container ">
      <div class="row d-flex align-items-center justify-content-center">
        <div class="col ">Lorem ipsum, city Lublin,<br> street Lorem ipsum 12/12</div>
        <div class="col"><b>8 (999) 001-01-55<br>8 (999) 001-01-55</b></div>
        <div class="col"><b>MON-FRI:</b> 9:00-23:00<br><b>SAT-SUN:</b> 15:00-00:00</div>
        <div class="col">
          <b-button v-b-modal.modal-prevent-closing>
            <b-icon icon="envelope"></b-icon>
            Contact
          </b-button>
        </div>
      </div>

      <hr class="hr">

      <div class="row">
        <div class="col-8">© Copyright 2021</div>
        <div class="col-4">Lorem Ipsum</div>
      </div>
    </div>
  </div>

  <!-- Footer -->
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer-wrapper {
  min-height: 160px;
  color: #fff;
  margin-bottom: 0px;
  background: url(../assets/bg_slider.png) #241f20;
}

.hr{
  border: 1px solid grey;
  margin-bottom: 0;
}

</style>