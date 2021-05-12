<template>
<v-app id="spoonify">
     <v-navigation-drawer
        permanent
        expand-on-hover
        v-model='drawer'
        app
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/25.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                Sandra Adams
              </v-list-item-title>
              <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
        v-if="this.$store.state.loggedIn === true"
          nav
          dense
        >
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
              <v-icon
              color="purple darken-2">mdi-cart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shopping Cart</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="openMain">
            <v-list-item-icon>
              <v-icon
              color="yellow darken-2">mdi-basket</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Main Menu</v-list-item-title>
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
import Login from './components/LoginPage.vue'
import AccountCreation from './components/AccountCreation.vue'
import Main from './components/Main.vue'
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
    AccountInfo,
    ShoppingCart,
    PurchaseHistory,
    MerchantDashboard
  },
  data: () => ({ 
      drawer: null,
     }),
  methods: {
    openAccountInfo() {
      console.log("I have been clicked")
      this.$store.commit("openAccountInfo");
      this.drawer = null
    },
    openPurchaseHistory() {
      this.$store.commit("openPurchaseHistory");
      this.drawer = null
    },
    openShoppingCart() {
      this.$store.commit("openShoppingCart");
      this.drawer = null
    },
    openMain() {
      this.$store.commit("openMain");
      this.drawer = null
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
