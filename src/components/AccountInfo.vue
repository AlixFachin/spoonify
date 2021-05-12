<template >
    <div id="account-info-container">
    <v-card>
        <h1> {{getOneUser.userName}} </h1>
        <h2> {{getOneUser.fullName}} </h2>
        <h2> {{getOneUser.address}} </h2>
    <h1>Hello, I'm here</h1>
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