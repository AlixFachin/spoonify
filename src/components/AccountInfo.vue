<template >
    <div id="account-info-container">
    <v-card>
        <h1> {{getOneUser}} </h1>
    <h1>Hello, I'm here</h1>
    </v-card>
   
    </div>
</template>


<script>
export default {
    name: 'AccountInfo',
    methods: {
           getOneUser() {
            console.log("Computed has run")
            console.log("I am all users", this.$store.state.allUsers)
            return this.$store.state.allUsers;
        }
    },
    mounted() {
        this.$store.dispatch("fetchAllUsers");
        console.log("I ran");
        
    },
    computed: {
    
    }
}
</script>