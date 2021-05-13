 
<template>
<v-app id="spoonify">
     <v-navigation-drawer
        permanent
        expand-on-hover
        v-model='drawer'
        app
      >
        <v-list v-if="$auth.isAuthenticated === true">
          <v-list-item class="px-2">
            <v-list-item-avatar color="grey">
              <v-img color="grey" :src="require(`@/assets/123coolfries.jpg`)"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item v-if="$auth.isAuthenticated === true">
            <v-list-item-content>
              <v-list-item-title class='mb-2'>
                {{ $auth.user.nickname }}
              </v-list-item-title>
              <v-list-item-subtitle class="mb-3">{{ $auth.user.email }}</v-list-item-subtitle>
              <v-divider></v-divider>
              <v-btn>
                <LogoutButton />
              </v-btn>
              
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-list-item v-if="$auth.isAuthenticated === false">
          <v-btn>
              <AuthenticationButton />
          </v-btn>
         </v-list-item> 
       

        <v-divider></v-divider>

        <v-list
        v-if="$auth.isAuthenticated === true"
          nav
          dense
        >
         <v-list-item link @click="openMain">
            <v-list-item-icon>
              <v-icon color="yellow darken-2">mdi-basket</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Main Menu</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="openAccountInfo">
            <v-list-item-icon>
              <v-icon
              color="teal darken-2">mdi-account-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account Info</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="openPurchaseHistory">
            <v-list-item-icon>
            <v-icon
              color="red darken-2">mdi-credit-card</v-icon>
            </v-list-item-icon>
              
            <v-list-item-title>Purchase History</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="openShoppingCart">
           
            <v-list-item-icon>
        <v-badge
          v-if="this.$store.state.shoppingCartAmt > 0"
          color="red darken-2"
          overlap
          :content="this.$store.state.shoppingCartAmt">
        </v-badge>
              <v-icon color="purple darken-2">
               mdi-cart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shopping Cart</v-list-item-title>
          </v-list-item>
         
        <v-list-item link @click="openMerchantDashboard">
          <v-list-item-icon>
            <v-icon
            color="orange darken-4">mdi-monitor-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Merchant Dashoard</v-list-item-title>
        </v-list-item>
        </v-list>      
      </v-navigation-drawer>
    

    <v-app-bar class="lightgrey" app>
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title class="font-weight-black" center>Spoonify</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <Login v-if="this.$store.state.displayPage === 'Login'"/>
      <AccountCreation v-if="this.$store.state.displayPage === 'AccountCreation'"/>
      <Main v-if="this.$store.state.displayPage === 'Main'"/>
      <AccountInfo v-if="this.$store.state.displayPage === 'AccountInfo'"/>
      <ShoppingCart v-if="this.$store.state.displayPage === 'ShoppingCart'"/>
      <PurchaseHistory v-if="this.$store.state.displayPage === 'PurchaseHistory'"/>
      <MerchantDashboard v-if="this.$store.state.displayPage === 'MerchantDashboard'"/>
    </v-main>
  </v-app>
</template>


<script>
import Main from './components/Main.vue'
import AccountInfo from './components/AccountInfo.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import PurchaseHistory from './components/PurchaseHistory.vue'
import MerchantDashboard from './components/MerchantDashboard.vue'
import AuthenticationButton from './components/AuthenticationButton.vue'
import LogoutButton from './components/LogoutButton.vue'

export default {
  name: 'App',
  components: {
    Main,
    AccountInfo,
    ShoppingCart,
    PurchaseHistory,
    MerchantDashboard,
    AuthenticationButton,
    LogoutButton
  },
  data: () => ({ 
      drawer: null,
      image: null,
     }),
  methods: {
    openAccountInfo() {
      this.$store.commit("openAccountInfo");
      this.drawer = null;
    },
    openPurchaseHistory() {
      this.$store.commit("openPurchaseHistory");
      this.drawer = null;
    },
    openShoppingCart() {
      this.$store.commit("openShoppingCart");
      this.drawer = null;
    },
    openMain() {
      this.$store.commit("openMain");
      this.drawer = null;
    },
    openMerchantDashboard() {
      this.$store.commit("openMerchantDashboard");
      this.drawer = null;
    },
    setPicture(){
      this.image = this.$auth.user.picture
    }
  },
  mounted(){
    this.setPicture()
  },
  computed: {
    selectedAvatar() {
      return this.$store.state.grabAvatar
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


