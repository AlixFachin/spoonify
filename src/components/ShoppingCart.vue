<template >
    <div id="cart-container">
        <ol id="order-list">
            <div v-for="item in this.$store.state.shoppingCartList" :key="item.id">
            </div>
        </ol>
    </div>
</template>


<script>
export default {
    name: 'LoginPage',
    methods: {
        login(){
            // this.$store. ("");
        }
    }
}
</script>


<style>
    
</style>