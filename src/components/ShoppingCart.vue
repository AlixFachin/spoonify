<template >
<div id="wrap">
    <h1> Shopping Cart </h1>
    <div v-if="this.$store.state.shoppingCartList.length > 0">
    <v-card v-for="item in this.$store.state.shoppingCartList" :key="item.id"  class="mx-auto mt-1" max-width="98%" elevation="4" rounded>
    <v-list-item two-line>
        <v-list-item-avatar
        class="fill-height"
        tile
        left
        max-height="50"
        size="20%"
        >
        <v-container
        class="fill-height"
        fluid
        style="min-height: 434px">
        <v-img 
            :src="require(`@/assets/${item.name}.jpg`)"
            ></v-img>
        </v-container>
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
    <v-bottom-navigation>
     <StripeCheckout
     ref="checkoutRef"
     :pk="publishableKey"
     :sessionId="sessionId"
      />
      <v-btn block @click="submit">
      <span class="ml-2" color="blue white--text">Pay now!</span>
    </v-btn>
     <v-spacer></v-spacer>
    </v-bottom-navigation>
    </div>
    <div v-else>
        <v-card class="p5">
        <v-card-title> Your shopping cart is empty! </v-card-title>
        </v-card>
    </div>
</div>    
</template>


<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();


export default {
    
    name: 'ShoppingCart',
    components: {
        StripeCheckout
    },
    methods: {
        submit () {
    // this.items = this.$store.state.shoppingCartList
    // CREATE HTTP BODY WITH PRICE_ID,QTY LIST
    const requestBody = { lineItems : [] }
    this.$store.state.shoppingCartList.forEach((element) => {
            requestBody.lineItems.push({price: element.price_id, quantity: element.quantity});
        });
    // Create the HTTP request BODY with all the items.
    axios.post('/create-checkout-session', requestBody).then((response) => {
        console.log(JSON.stringify(response.data));
        this.sessionId = response.data.id;
        this.$refs.checkoutRef.redirectToCheckout();
    })
    
    },
        getTotal(){
            this.$store.state.shoppingCartList.map((element) => {
                this.total += element.quantity * element.price
            })
        },
        createLineItem(){
            this.$store.state.shoppingCartList.map((element) => {
                this.lineItems.push({price: element.key, quantity: element.quantity})
            })
        }
    },
    data() {
        return {
            total: 0,
            publishableKey: process.env.VUE_APP_PK,
            lineItems: [],
            sessionId: '',
        }
    },
    mounted() {
        this.getTotal()
        this.createLineItem()
        console.log(process.env.DB_NAME)
    }
} 
</script>


<style>
      h1 {
    text-align: center;
  }
</style>