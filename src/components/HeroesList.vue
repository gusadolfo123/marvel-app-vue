<template>
  <div
    class="row row-cols-1 row-cols-md-3 mt-4 mb-5 pb-5 animate__animated animate__fadeIn"
  >
    <HeroesListItem v-for="hero in heroes" :key="hero.id" :hero="hero" />
  </div>
</template>

<script>
import HeroesListItem from "./HeroesListItem.vue";
import { getHeroesByPublisher } from "../services/heroService";

export default {
  components: { HeroesListItem },
  props: ["publisher"],
  data() {
    return {
      heroes: [],
    };
  },
  mounted() {
    this.heroes = getHeroesByPublisher(this.publisher);
  },
};
</script>

<style>
</style>