<template >
  <div id="purchase-history-container">
    <h1>Purchase History</h1>
    <v-card v-for="order in this.$store.state.orderList" :key="order.uuid" class="mx-auto mt-1" max-width="98%" elevation="4" rounded>
      <v-list-item two-line @click="setSelectedIndex(order.uuid)" style="background: #824E1A">
        <v-list-item-content >
          <v-list-item-title class="mb-2"> {{order.timestamp}} </v-list-item-title>
          <v-list-item-subtitle>¥{{order.totalPrice}}</v-list-item-subtitle>        
        </v-list-item-content>
      </v-list-item>
      <v-card-actions style="background: #824E1A">
        <v-spacer></v-spacer>
        <v-btn icon @click="setSelectedIndex(order.uuid)">
          <v-icon>{{ order.uuid === selectedIndex ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="order.uuid === selectedIndex" style="background: #824E1A">
          <v-card-text>Order ID: {{order.uuid}}</v-card-text>
          <v-card-text>{{order.items[0].product}} x{{order.items[0].quantity}}</v-card-text>
          <v-card-text v-if="(order.items[1])">{{order.items[1].product}} x{{order.items[1].quantity}}</v-card-text>
          <v-card-text v-if="(order.items[2])">{{order.items[2].product}} x{{order.items[2].quantity}}</v-card-text>
          <v-card-text v-if="(order.items[3])">{{order.items[3].product}} x{{order.items[3].quantity}}</v-card-text>
          <v-card-text v-if="(order.items[4])">{{order.items[4].product}} x{{order.items[4].quantity}}</v-card-text>
          <v-card-text>Total price: ¥{{order.totalPrice}}</v-card-text>
          <v-card-text>Delivery Fee: ¥{{order.deliveryFee}}</v-card-text>
          <v-card-text>Tip: ¥{{order.tip}}</v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'PurchaseHistory',
  methods: {
    setSelectedIndex(id) {
      if (this.flag === false) {
        this.selectedIndex = id
        this.flag = true;
      } else {
        this.flag = false
        if (id === this.selectedIndex) {
        this.selectedIndex = null
        } else {
        this.selectedIndex = id
        }
      }
    },
  },
  data: () => ({
    selectedIndex: null,
    flag: false
  }),
  mounted() {
    this.$store.dispatch("fetchUserOrders");
  },
}
</script>