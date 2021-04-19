<template>
  <div class="main-login">
    <div class="login">
      <h1 class="text-light">Login</h1>
      <form @submit.prevent="handleSubmit">
        <div class="login__container">
          <input
            autoComplete="off"
            class="form-control mt-2"
            type="text"
            name="user"
            :value="name"
            @input="updateName"
          />

          <input
            autoComplete="false"
            autoCorrect="false"
            class="form-control mt-2"
            type="password"
            name="password"
          />
        </div>
        <div class="login_footer mt-2">
          <button type="submit" class="btn btn btn-outline-light w-100">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["login"]),
    handleSubmit() {
      if (this.name.trim().length > 2) {
        this.login(this.name);
        this.$router.replace("/");
      }
    },
    updateName(e) {
      this.$store.commit("updateName", e.target.value);
    },
  },
  computed: {
    ...mapState({
      name: (state) => state.user.name,
    }),
  },
};
</script>

<style>
.main-login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login {
  border: 1px solid gray;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 300px;
}
</style>