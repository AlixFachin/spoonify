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
                <div v-if="order.status==='fulfilled'">
                    <h3>{{order.timestamp}}</h3>
                        <v-list-group>
                                <v-card-text>Buyer's ID: {{order.userId}}</v-card-text>
                                <!-- <v-card-text v-for="item in order.items">{{item.product}} x{{item.quantity}}</v-card-text> -->
                                <v-card-text>Total price: ¥{{order.totalPrice}}</v-card-text>
                                <v-card-text>Delivery Fee: ¥{{order.deliveryFee}}</v-card-text>
                                <v-card-text>Tip: ¥{{order.tip}}</v-card-text>
                        </v-list-group>
                </div>
              </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
            <v-expansion-panel-header disable-icon-rotate>
            Pending
            <template v-slot:actions>
              <v-icon color="orange">
                mdi-history
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
              <v-card v-for="order in this.$store.state.orderList" :key="order.uuid">
                <div v-if="order.status==='pending'">
                    <h3>{{order.timestamp}}</h3>
                        <v-list-group>
                                <v-card-text>Buyer's ID: {{order.userId}}</v-card-text>
                                <!-- <v-card-text v-for="item in order.items">{{item.product}} x{{item.quantity}}</v-card-text> -->
                                <v-card-text>Total price: ¥{{order.totalPrice}}</v-card-text>
                                <v-card-text>Delivery Fee: ¥{{order.deliveryFee}}</v-card-text>
                                <v-card-text>Tip: ¥{{order.tip}}</v-card-text>
                        </v-list-group>
                </div>
              </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
  
                <v-expansion-panel>
            <v-expansion-panel-header disable-icon-rotate>
            Queued
            <template v-slot:actions>
              <v-icon color="red">
                mdi-call-received
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
              <v-card v-for="order in this.$store.state.orderList" :key="order.uuid">
                <div v-if="order.status==='queued'">
                    <h3>{{order.timestamp}}</h3>
                        <v-list-group>
                                <v-card-text>Buyer's ID: {{order.userId}}</v-card-text>
                                <!-- <v-card-text v-for="item in order.items">{{item.product}} x{{item.quantity}}</v-card-text> -->
                                <v-card-text>Total price: ¥{{order.totalPrice}}</v-card-text>
                                <v-card-text>Delivery Fee: ¥{{order.deliveryFee}}</v-card-text>
                                <v-card-text>Tip: ¥{{order.tip}}</v-card-text>
                        </v-list-group>
                </div>
              </v-card>
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