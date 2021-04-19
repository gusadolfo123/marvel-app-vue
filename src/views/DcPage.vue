<template>
  <div class="home">
    <h1 class="mt-4">DC Heroes</h1>
    <hr />
    <HeroesList publisher="DC Comics" />
  </div>
</template>

<script>
import HeroesList from "../components/HeroesList.vue";

export default {
  name: "DcPage",
  components: {
    HeroesList,
  },
};
</script>

<style>
</style>