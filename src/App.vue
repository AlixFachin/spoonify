
<template>

 <div id="app">
    <Login v-if="this.$store.state.displayLogin === true"/>
    <AccountCreation v-if="this.$store.state.displayAccountCreation === true"/>
    <Main v-if="this.$store.state.displayMain === true"/>
    <SideMenu v-if="this.$store.state.displaySideMenu === true"/>
    <AccountInfo v-if="this.$store.state.displayAccountInfo === true"/>
    <ShoppingCart v-if="this.$store.state.displayShoppingCart === true"/>
    <PurchaseHistory v-if="this.$store.state.displayPurchaseHistory === true"/>
    <MerchantDashboard v-if="this.$store.state.displayMerchantDashboard === true"/>
  </div >

</template>


<script>
import Login from './components/LoginPage.vue'
import AccountCreation from './components/AccountCreation.vue'
import Main from './components/Main.vue'
import SideMenu from './components/SideMenu.vue'
import AccountInfo from './components/AccountInfo.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import PurchaseHistory from './components/PurchaseHistory.vue'
import MerchantDashboard from './components/MerchantDashboard.vue'

export default {
  name: 'App',
  components: {
    Login,
    AccountCreation,
    Main,
    SideMenu,
    AccountInfo,
    ShoppingCart,
    PurchaseHistory,
    MerchantDashboard
  },
  methods: {
    myFunction(payload) {
      this.$store.commit("blocking", payload);
    },
    asyncFunction(payload) {
      this.$store.dispatch("nonBlocking", payload);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<!-- 
<template>
  <v-card  class="xl">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      class="xl"
    >
      <v-list-item class="px-5">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        mini: true,
      }
    },
  }
</script> -->
