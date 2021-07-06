<template>
  <div id="app">
    <Navbar/>
    <SubNavbar/>
      <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";
import Footer from "@/components/Footer";

export default {
  components: {Footer, SubNavbar, Navbar},
}

</script>
