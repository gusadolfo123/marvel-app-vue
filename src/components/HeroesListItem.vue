<template>
  <div class="p-2" style="text-align: left">
    <div class="card text-black-50 p-0">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="srcImage" class="card-img" :alt="hero.superhero" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ hero.superhero }}</h5>
            <p class="card-text">{{ hero.alter_ego }}</p>

            <p class="card-text">
              <small>{{ hero.first_appearance }}</small>
            </p>

            <router-link class="text-decoration-none" :to="customLink">
              Más..
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { heroImages } from "../helpers/imagesHelper";

export default {
  props: ["hero"],
  computed: {
    srcImage() {
      return heroImages("./" + this.hero.id + ".jpg");
    },
    customLink() {
      return `./heroe/${this.hero.id}`;
    },
  },
};
</script>

<style>
.width-540 {
  max-width: 540px !important;
}
</style>