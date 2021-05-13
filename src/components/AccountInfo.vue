<template >
  <div id="account-info-container">
    <v-card class="mx-auto mt-4" max-width="98%">
        <v-card-title> Welcome to your account information page: </v-card-title>
        <v-card-text> Username: {{ $auth.user.nickname }} </v-card-text>
        <v-card-text> Email: {{ $auth.user.email }} </v-card-text>
        <v-card-text> </v-card-text>
        <v-list-item-avatar color="grey">
              <v-img color="grey" :src="require(`@/assets/123coolfries.jpg`)"></v-img>
            </v-list-item-avatar>
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