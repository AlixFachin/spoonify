<template>
    <div id="main-container">
        <div class="purchasable-item" v-for="item in this.$store.state.itemList" :key="item.id">
            <img src />
            <h3>{{item.name}}</h3>
            <span>
                <p>{{item.description}}</p>
                <p>¥{{item.price}}</p>
            </span>
            <button @click="addToCart(item)">Add to cart</button>
        </div>
        <button id="scroll-up"></button>
        <div class="text-center">
    <v-btn
      rounded
      color="primary"
      dark
    >
      Test Button
    </v-btn>
  </div>
    </div>
</template>
<script>
export default {
    name: 'Main',
    methods: {
        addtoCart(item){
            this.$store.commit('addToCart', item)
        },
    }
    
}
</script>
<style scoped>
#scroll-up {
    background: url("../assets/logo.png");
}
    
</style>