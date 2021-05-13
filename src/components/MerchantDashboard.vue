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
          <v-expansion-panel-content >
              <v-card v-for="order in this.$store.state.orderList" :key="order.uuid" >
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
                            <v-list>
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
                    <v-menu class="update-status-btn" offset-y>
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
                            <v-list>
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
                            <v-list>
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
      console.log("update status reached")
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