<template>
  <div class="app-background">
    <div class="container py-5">
      <h1 class="py-2 text">Reviews</h1>
      <div class="content">
       <Review/>
       <Review/>
       <Review/>

        <div class="mp-3 mb-3">
          <h2>Write review</h2>
        </div>

        <div class="row">
          <div class="col-lg-8">

            <div class="row min">
              <div class="col-sm-6">
                <div>
                  <b-form-input
                      class="input mt-2"
                      v-model="text"
                      placeholder="Enter your name"
                  ></b-form-input>
                </div>
              </div>
              <div class="col-sm-6">
                <div>
                  <b-form-input
                      class="input mt-2"
                      v-model="text"
                      placeholder="Enter your email"
                  ></b-form-input>
                </div>
              </div>
            </div>

            <div>
              <b-row class="mt-4 mb-3">
                <b-col >
                  <b-form-textarea
                      id="textarea-default"
                      placeholder="Default textarea"
                      rows="6">
                  </b-form-textarea>
                </b-col>
              </b-row>
            </div>


            <div class="captcha-group">


            </div>

            <div class="push10"></div>
            <p><font color="red"> *</font> - required fields</p>
            <div class="push5"></div>
            <button type="button" class="btn btn-primary btn-lg mt-2 mb-2">Send</button>
          </div>
        </div>

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

.btn {
  width: 100%;
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
</style>