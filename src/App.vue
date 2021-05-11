<template>
  <div id="app">
    <Login v-if="this.$store.state.login === true"/>
    <AccountCreation v-if="this.$store.state.accountCreation === true"/>
    <Main v-if="this.$store.state.main === true"/>
    <SideMenu v-if="this.$store.state.sideMenu === true"/>
    <AccountInfo v-if="this.$store.state.accountInfo === true"/>
    <ShoppingCart v-if="this.$store.state.shoppingCart === true"/>
    <PurchaseHistory v-if="this.$store.state.purchaseHistory === true"/>
    <MerchantDashboard v-if="this.$store.state.merchantDashboard === true"/>
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
