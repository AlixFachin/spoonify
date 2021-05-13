<template >
  <div id="account-info-container">
      <h1> Account Info </h1>
    <v-card>
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
        console.log("inside acc info");
        
        
    },
    computed: {
        getOneUser() {
            console.log("Computed has run")
            console.log("I am all users", this.$store.state.allUsers[0])
            return this.$store.state.allUsers[0];
        }
        
    }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>