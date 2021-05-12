<template >
    <div id="purchase-history-container">
        <h1> PURCHASE HISTORY </h1>
        <v-card v-for="order in this.$store.state.orderList" :key="order.id" class="mx-auto mt-1" max-width="98%" elevation="4" rounded>

    <v-list-item two-line @click="setSelectedIndex(order.id)">

    <v-list-item-content>
        <v-list-item-title class="mb-2"> {{item.name}} </v-list-item-title>
        <v-list-item-subtitle>¥{{item.price}}</v-list-item-subtitle>
    </v-list-item-content>
        
    </v-list-item>
    
    <v-card-actions>
     
     <v-btn icon @click="setSelectedIndex(item.id)">
           <!-- <v-btn icon @click="closeItem(item.id)"> -->
     <v-icon>{{ item.id === selectedIndex ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    <v-spacer></v-spacer>
  <v-btn color="blue white--text" small elevation="2" @click="addToCart(item)"> Add to Cart </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="item.id === selectedIndex">
        <v-card-text>{{item.description}}</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
    </div>
</template>

<script>
export default {
    name: 'PurchaseHistory',
    methods: {
    },
    mounted() {
        this.$store.dispatch("fetchUserOrders");
    }
}