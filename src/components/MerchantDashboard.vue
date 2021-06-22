<template >
    <div id="merchant-dashboard-container">
      <h1> Merchant Dashboard </h1>
      <v-card  class="mx-auto mt-1" max-width="98%" elevation="4" rounded >
      <v-expansion-panels style="background: linear-gradient(to right, #FFD194, #D1913C)">
          <v-expansion-panel>
            <v-expansion-panel-header disable-icon-rotate style="background: #824E1A">
            Fulfilled
            <template v-slot:actions>
              <v-icon color="green">
                mdi-check
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content style="background: #824E1A">
              <v-card v-for="order in this.$store.state.orderList" :key="order.uuid"  style="background: #824E1A">
                <div v-if="order.status==='fulfilled'">
                    <h3>{{order.timestamp}}</h3>
                    <v-menu class="update-status-btn" offset-y>
                       <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                id="righty3"
                                color="primary"
                                dark
                                v-bind="attrs"
                                v-on="on"
                                small
                                >
                                Update Status
                                </v-btn>
                            </template>
                            <v-list style="background: #824E1A">
                                <v-list-item v-for="(item, index) in items" :key="index">
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                        <v-list-group>
                                <v-card-text>Buyer's ID: {{order.userId}}</v-card-text>
                                <v-card-text>{{order.items[0].product}} x{{order.items[0].quantity}}</v-card-text>
                                <v-card-text v-if="(order.items[1])">{{order.items[1].product}} x{{order.items[1].quantity}}</v-card-text>
                                <v-card-text v-if="(order.items[2])">{{order.items[2].product}} x{{order.items[2].quantity}}</v-card-text>
                                <v-card-text v-if="(order.items[3])">{{order.items[3].product}} x{{order.items[3].quantity}}</v-card-text>
                                <v-card-text v-if="(order.items[4])">{{order.items[4].product}} x{{order.items[4].quantity}}</v-card-text>
                                <v-card-text>Total price: ¥{{order.totalPrice}}</v-card-text>
                                <v-card-text>Delivery Fee: ¥{{order.deliveryFee}}</v-card-text>
                                <v-card-text>Tip: ¥{{order.tip}}</v-card-text>
                        </v-list-group>
                </div>
              </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
            <v-expansion-panel-header disable-icon-rotate style="background: #824E1A">
            Pending
            <template v-slot:actions>
              <v-icon color="orange">
                mdi-history
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content style="background: #824E1A">
              <v-card v-for="order in this.$store.state.orderList" :key="order.uuid" style="background: #824E1A">
                <div v-if="order.status==='pending'">
                    <h3>{{order.timestamp}}</h3>
                    <v-menu class="update-status-btn" offset-y >
                       <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                id="righty2"
                                color="primary"
                                dark
                                v-bind="attrs"
                                v-on="on"
                                small
                                >
                                Update Status
                                </v-btn>
                            </template>
                            <v-list style="background: #824E1A">
                                <v-list-item v-for="(item, index) in items" :key="index">
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                        <v-list-group>
                                <v-card-text>Buyer's ID: {{order.userId}}</v-card-text>
                                <v-card-text>{{order.items[0].product}} x{{order.items[0].quantity}}</v-card-text>
                                <v-card-text v-if="(order.items[1])">{{order.items[1].product}} x{{order.items[1].quantity}}</v-card-text>
                                <v-card-text v-if="(order.items[2])">{{order.items[2].product}} x{{order.items[2].quantity}}</v-card-text>
                                <v-card-text v-if="(order.items[3])">{{order.items[3].product}} x{{order.items[3].quantity}}</v-card-text>
                                <v-card-text v-if="(order.items[4])">{{order.items[4].product}} x{{order.items[4].quantity}}</v-card-text>
                                <v-card-text>Total price: ¥{{order.totalPrice}}</v-card-text>
                                <v-card-text>Delivery Fee: ¥{{order.deliveryFee}}</v-card-text>
                                <v-card-text>Tip: ¥{{order.tip}}</v-card-text>
                        </v-list-group>
                </div>
              </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
  
        <v-expansion-panel>
            <v-expansion-panel-header disable-icon-rotate style="background: #824E1A">
            Queued
            <template v-slot:actions>
              <v-icon color="red">
                mdi-call-received
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content style="background: #824E1A">
              <v-card v-for="order in this.$store.state.orderList" :key="order.uuid" style="background: #824E1A">
                <div v-if="order.status==='queued'">
                    <h3>{{order.timestamp}}</h3>
                    <v-menu class="update-status-btn" offset-y>
                       <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                id="righty3"
                                color="primary"
                                dark
                                v-bind="attrs"
                                v-on="on"
                                small
                                >
                                Update Status
                                </v-btn>
                            </template>
                            <v-list style="background: #824E1A">
                                <v-list-item v-for="(item, index) in items" :key="index">
                                    <v-list-item-title @click="updateStatus(order.uuid, item.title)">{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                        <v-list-group>
                                <v-card-text>Buyer's ID: {{order.userId}}</v-card-text>
                                <v-card-text>{{order.items[0].product}} x{{order.items[0].quantity}}</v-card-text>
                                <v-card-text v-if="(order.items[1])">{{order.items[1].product}} x{{order.items[1].quantity}}</v-card-text>
                                <v-card-text v-if="(order.items[2])">{{order.items[2].product}} x{{order.items[2].quantity}}</v-card-text>
                                <v-card-text v-if="(order.items[3])">{{order.items[3].product}} x{{order.items[3].quantity}}</v-card-text>
                                <v-card-text v-if="(order.items[4])">{{order.items[4].product}} x{{order.items[4].quantity}}</v-card-text>
                                <v-card-text>Total price: ¥{{order.totalPrice}}</v-card-text>
                                <v-card-text>Delivery Fee: ¥{{order.deliveryFee}}</v-card-text>
                                <v-card-text>Tip: ¥{{order.tip}}</v-card-text>
                        </v-list-group>
                </div>
              </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      </v-card>
    </div>
</template>

<script>
export default {
  name: 'MerchantDashboard',
  data: () => ({
    items: [
      { title: 'Fulfilled'},
      { title: 'Pending' },
      { title: 'Queued' }
    ],
  }),
  methods: {
    updateStatus(id, newStatus) {
      newStatus = newStatus.ToLowerCase();
      this.$store.commit("updateStatus", id, newStatus)
    }
  }
}
</script>

<style scoped>
 h3 { 
      margin-left: 3vw;
  }
#righty, #righty2, #righty3 {
    float: right;
    margin-top: 3%;
    margin-right: 3%;
  }
</style>