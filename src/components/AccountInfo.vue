<template >
  <div id="account-info-container">
      <h1> Account Info </h1>
    <v-card  class="mx-auto mt-1" max-width="98%" elevation="4" rounded style="background: #824E1A">
        <v-card-title> Welcome to your account info: </v-card-title>
        <v-card-text> Username: {{ $auth.user.nickname }} </v-card-text>
        <v-card-text> Email: {{ $auth.user.email }} </v-card-text>
       
    </v-card>
  </div>
</template>

<script>
export default {
    name: 'AccountInfo',
    methods: {
           
    },
    mounted() {
        this.$store.dispatch("fetchAllUsers");
        
        
    },
    computed: {
        getOneUser() {
            return this.$store.state.allUsers[0];
        }
        
    }
}
</script>