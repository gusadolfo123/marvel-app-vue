<template>
  <div id="app">
    <Navbar />
    <router-view class="container text-light" />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/common/Footer.vue";
import Navbar from "../components/common/Navbar.vue";

export default {
  components: { Navbar, Footer },

  data() {
    return {};
  },
};
</script>


<style>
</style>