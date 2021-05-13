<template >
    <div id="purchase-history-container">
        <h1>Purchase History</h1>
        <v-card v-for="order in this.$store.state.orderList" :key="order.id" class="mx-auto mt-1" max-width="98%" elevation="4" rounded>

    
    <v-list-item two-line @click="setSelectedIndex(order.id)">
    <v-list-item-content>
        <v-list-item-title class="mb-2"> {{order.timestamp}} </v-list-item-title>
        <v-list-item-subtitle>¥{{order.totalPrice}}</v-list-item-subtitle>        
    </v-list-item-content>
        
    </v-list-item>
    
    <v-card-actions>
     
    <v-spacer></v-spacer>
     <v-btn icon @click="setSelectedIndex(order.id)">
     <v-icon>{{ order.id === selectedIndex ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="order.id === selectedIndex">
        <v-card-text>{{order.description}}</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
    </div>
</template>

<script>
export default {
    name: 'PurchaseHistory',
    methods: {
      // setSelectedIndex(id) {

      // }
    },
    mounted() {
        this.$store.dispatch("fetchUserOrders");
    }
}

</script>

<style scoped>
  h1 {
  text-align: center;
}
</style>