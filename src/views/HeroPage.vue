<template>
  <div class="container mb-5 pb-5">
    <div class="row mt-5">
      <div class="col-md-4">
        <img :src="srcImage" class="img-thumbnail" :alt="hero.superhero" />
      </div>
      <div class="col-md-8">
        <h3>{{ hero.superhero }}</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <b>Alter ego:</b> {{ hero.alter_ego }}
          </li>
          <li class="list-group-item">
            <b>Publisher:</b> {{ hero.publisher }}
          </li>
          <li class="list-group-item">
            <b>First Appearance:</b> {{ hero.first_appearance }}
          </li>
        </ul>

        <hr />

        <h5>Characters</h5>
        <p>{{ hero.characters }}</p>

        <button @click="handleReturn" class="btn btn-outline-warning">
          Return
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { heroImages } from "../helpers/imagesHelper";
import { getHeroById } from "../services/heroService";

export default {
  data() {
    return {
      hero: {},
    };
  },
  methods: {
    handleReturn() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
  computed: {
    srcImage() {
      return heroImages("./" + this.hero.id + ".jpg");
    },
  },
  beforeMount() {
    this.hero = getHeroById(this.$route.params.id);
  },
};
</script>

<style>
</style>