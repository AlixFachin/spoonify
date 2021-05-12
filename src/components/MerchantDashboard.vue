<template >
    <div id="merchant-dashboard-container">
        <h1> TEST </h1>
            <div>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            Fulfilled
            <template v-slot:actions>
              <v-icon color="green">
                mdi-check
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
    </div>
</template>

<script>
export default {
    name: 'MerchantDashboard',
    methods: {
    }
}