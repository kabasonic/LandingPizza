<template>
  <div class="app-background">
    <div class="container py-3">

      <div class="mb-3">
        <h2>Contacts</h2>
      </div>

      <div class="content">


        <div class="p-3">
          <img src="../assets/img_map.png" style="width:100%; height: 100%" alt="..."/>
        </div>

        <div class="row">
          <div class="col-md-5 ml-4">
            <form>
              <input type="hidden" name="jkd498" value="1">
              <input type="hidden" name="jkd428" value="1">
              <table id="table1" width="100%" cellspacing="1" cellpadding="2" border="0">
                <tbody>
                <tr>
                  <td width="10%">E-mail:<font color="red"> *</font>
                  </td>
                  <td>
                    <b-form-input class="mt-2" v-model="text" placeholder="Enter your name"></b-form-input>
                  </td>
                </tr>
                <tr>
                  <td>Theme:
                  <td>
                    <b-form-input class="mt-2" v-model="text" placeholder="Enter your name"></b-form-input>
                  </td>
                </tr>
                <tr>
                  <td>Name:</td>
                  <td>
                    <b-form-input class="input mt-2" v-model="text" placeholder="Enter your name"></b-form-input>
                  </td>
                </tr>
                <tr>
                  <td>Message:</td>
                  <td>
                    <b-row class="mt-2">
                      <b-col>
                        <b-form-textarea
                            id="textarea-default"
                            placeholder="Default textarea"
                            rows="6"
                        ></b-form-textarea>
                      </b-col>
                    </b-row>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button type="button" class="btn btn-primary btn-lg mt-2 mb-2">Send</button>
                    <!--                    <b-button class="mt-2 mb-2" style="width: 100%;">asdasd</b-button>-->
                  </td>

                </tr>
                </tbody>
              </table>
              <input type="hidden" name="id" value="2">
              <input type="hidden" name="a" value="1">
              <input type="hidden" name="o" value="1">
            </form>

          </div>

          <div class="col-md-6 col-md-1 ml-4">
            <div class="title ttwalls f25">
              Lorem ipsum
            </div>
            <div class="element">
              <strong>Lorem ipsum</strong><br>
              Street Lorem Ispum 123/3, Lublin, Poland
              <div class="push15"></div>
            </div>
            <div class="element">
              <div><b>1 (111) 111-11-11</b></div>
              <div><b>1 (111) 11-11-11</b></div>
            </div>
            <div class="element">
              <a href="mailto:your_email@mail.ru" class="invert">email@gmail.com</a>
              <div class="push15"></div>
            </div>
            <div class="element">
              <span>Пн-Пт:</span> 9:00 - 23:00<br>
              <span>Сб:</span> 15:00 - 00:00<br>
              <span>Вс:</span> выходной
            </div>
          </div>

        </div>


      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "Contacts"
}
</script>

<style scoped>
.app-background {
  background-image: url("../assets/bg.png");
}

.content {
  width: 100%;
  background: #fff;
  padding: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

.map-wrapper {
  height: 440px;
  border: 1px solid #ccc;
  margin: 18px;
}

.input {
  width: 100%;
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