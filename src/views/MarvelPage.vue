<template>
  <div class="home">
    <h1 class="mt-4">Marvel Heroes</h1>
    <hr />
    <HeroesList publisher="Marvel Comics" />
  </div>
</template>

<script>
import HeroesList from "../components/HeroesList.vue";

export default {
  name: "MarvelPage",
  components: { HeroesList },
};
</script>

<style></style>;
