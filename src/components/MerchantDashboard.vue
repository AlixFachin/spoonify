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
              <v-card v-for="item in this.$store.state.shoppingCartList" :key="item.id">
                <v-list-item two-line>
                    <v-list-item-avatar
                    class="fill-height grey"
                    tile
                    left
                    max-height="50"
                    size="20%"
                    color="grey">
                    <v-img color='grey' class="fill-height grey"
                        :src="require(`@/assets/${item.name}.jpg`)"
                        ></v-img>
                    </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="mb-2"> {{item.name}} </v-list-item-title>
                    <v-list-item-subtitle>quantity:{{item.quantity}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-spacer></v-spacer>
                <v-list-item-content>
                    <v-list-item-title class="mb-2">¥{{item.price}}</v-list-item-title>
                    <v-list-item-subtitle></v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
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
    },
    // mounted() {
    //     this.$store.dispatch("fetchUserOrders")
    // }
}