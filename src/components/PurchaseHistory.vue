<template >
   <div id="purchase-history-container">
      <v-card v-for="order in this.$store.state.orderList" :key="order.uuid">
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            small
            >
            Update Status
            </v-btn>
        </template>
      <v-list>
        <h3>{{order.timestamp}}</h3>
      </v-list>
            <v-list-group>
                    <v-card-text>Order ID: {{order.userId}}</v-card-text>
                    <!-- <v-card-text v-for="item in order.items">{{item.product}} x{{item.quantity}}</v-card-text> -->
                    <v-card-text>Total price: ¥{{order.totalPrice}}</v-card-text>
                    <v-card-text>Delivery Fee: ¥{{order.deliveryFee}}</v-card-text>
                    <v-card-text>Tip: ¥{{order.tip}}</v-card-text>
            </v-list-group>
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
</script>
<style scoped>
  h3 {
    text-align: center;
  }
</style>
