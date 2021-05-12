 
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
          nav
          dense
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon
              color="teal darken-2">mdi-account-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account Info</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="testfunction">
            <v-list-item-icon>
              <v-icon
              color="red darken-2">mdi-credit-card</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Purchase History</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon
              color="purple darken-2">mdi-cart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shopping Cart</v-list-item-title>
          </v-list-item>
          <v-list-item link>
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
      <PurchaseHistory />
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
import PurchaseHistory from './components/PurchaseHistory'

  export default {
    components:{
      PurchaseHistory
    },
    data: () => ({ 
      drawer: null,
     }),
    methods: {
      testfunction(){
        console.log('test')
      }
    },
  }
</script>
