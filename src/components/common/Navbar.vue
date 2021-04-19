<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container collapse navbar-collapse" id="navbarTogglerDemo01">
      <router-link to="/" class="navbar-brand">Asociaciones</router-link>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/marvel" class="nav-link">Marvel</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/dc" class="nav-link">DC</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/search" class="nav-link">Search</router-link>
        </li>
      </ul>

      <span class="nav-item nav-link text-info"> {{ user.name }} </span>

      <button
        v-if="user.name"
        class="btn btn-outline-light"
        @click="handleLogout"
      >
        Logout
      </button>
    </div>
  </nav>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  //   computed: {
  //     name() {
  //       return this.$store.state.user.name;
  //     },
  //   },
  methods: {
    ...mapMutations(["logout"]),
    handleLogout() {
      // this.$store.state.user = {};
      // this.logout();
      // this.$router.replace("/login");
      this.$store.commit("logout");
      this.$router.go("/login");
      // this.$router.go();
    },
  },
  computed: {
    myFunction() {},
    ...mapState([
      // map this.user to store.state.user
      "user",
    ]),
  },
};
</script>

<style>
</style>