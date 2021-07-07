<template>
  <!--  Footer-->
  <div class="footer-wrapper pt-4">
    <div class="container">
      <div class="row ">
        <div class="col ">Lorem ipsum, city Lublin,<br> street Lorem ipsum 12/12</div>
        <div class="col"><b>8 (999) 001-01-55<br>8 (999) 001-01-55</b></div>
        <div class="col"><b>MON-FRI:</b> 9:00-23:00<br><b>SAT-SUN:</b> 15:00-00:00</div>
        <div class="col">
          <div class="d-flex justify-content-end">
            <b-button v-b-modal.modal-prevent-closing class="btn">
              <b-icon icon="envelope"></b-icon>
              Contact
              <ModalContact/>
            </b-button>
          </div>
        </div>
      </div>

      <div class="py-4">
        <hr class="hr">
        <div class="row">
          <div class="col-8">© Copyright 2021</div>
          <div class="col-4 d-flex justify-content-end">
            <div class="d-flex justify-content-end">
              Lorem Ipsum
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- Footer -->
</template>

<script>
import ModalContact from "@/components/ModalContact";
export default {
  name: "Footer",
  components: {ModalContact}
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

.btn{
  width: 200px;
  background: #ee8225;
  border-color: #ee8225;
  color: #fff;
}

.btn:hover, .btn:focus, .btn:active{
  background: #E73E2D;
  border-color: #E73E2D;
  color: #fff;
  box-shadow: none;
}

</style>