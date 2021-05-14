<template>
  <button
    id="logThing"
    class="btn btn-primary btn-block"
    v-if="!$auth.isAuthenticated"
    @click="login"
  >
    Log In
  </button>
</template>

<script>
export default {
  name: "LoginButton",
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
  },
};
</script>

<style scoped>
</style>