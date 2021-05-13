<template >
    <div id="merchant-dashboard-container">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header disable-icon-rotate>
            Fulfilled
            <template v-slot:actions>
              <v-icon color="green">
                mdi-check
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
              <v-card v-for="order in this.$store.state.orderList" :key="order.uuid">
                <h3>{{order.timestamp}}</h3>
                    <v-list-group>
                            <v-card-text>Buyer's ID: {{order.userId}}</v-card-text>
                            <!-- <v-card-text v-for="item in order.items">{{item.product}} x{{item.quantity}}</v-card-text> -->
                            <v-card-text>Total price: {{order.totalPrice}}</v-card-text>
                            <v-card-text>Delivery Fee: {{order.deliveryFee}}</v-card-text>
                            <v-card-text>Tip: {{order.tip}}</v-card-text>
                    </v-list-group>
              </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
  
        <v-expansion-panel>
          <v-expansion-panel-header disable-icon-rotate>
            In progress
            <template v-slot:actions>
              <v-icon color="orange">
                mdi-history
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
  
        <v-expansion-panel>
          <v-expansion-panel-header disable-icon-rotate>
            Received
            <template v-slot:actions>
              <v-icon color="red">
                mdi-call-received
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
</template>

<script>
export default {
    name: 'MerchantDashboard',
    methods: {
        fulfilledOrders() {
            console.log("help")
            this.$store.commit("fulfilledOrdersFilter")
    },
    }
}

</script>

<style scoped>
    h3 { 
        text-align: center;    
    }
</style>