<template>
  <button
    class="btn btn-danger"
    v-if="$auth.isAuthenticated"
    @click.prevent="logout"
  >
  Logout
  </button>
</template>

<script>
export default {
  name: "LogoutButton",
  methods: {
    logout() {
      this.$auth.logout();
      this.$router.push({ path: "/" });
    },
  },
};
</script>