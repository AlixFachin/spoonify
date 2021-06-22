<template >
<div id="wrap">
    <h1> Shopping Cart </h1>
    <div v-if="this.$store.state.shoppingCartList.length > 0">
        <v-card v-for="item in this.$store.state.shoppingCartList" :key="item.id"  class="mx-auto mt-1" max-width="98%" elevation="4" rounded style="background: #824E1A">
        <v-list-item two-line >
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
        <v-list-item-subtitle>quantity: {{item.quantity}}</v-list-item-subtitle>
    </v-list-item-content>
    <v-spacer></v-spacer>
    <v-list-item-content>
        <v-list-item-title class="mb-2">¥{{getActualPrice(item)}}</v-list-item-title>
        <v-list-item-subtitle></v-list-item-subtitle>
    </v-list-item-content>
    </v-list-item>
    </v-card>
    <v-bottom-navigation rounded class="mx-auto mt-3" max-width="98%" elevation="4">
    <StripeCheckout
    ref="checkoutRef" 
    :pk="publishableKey"
    :sessionId="sessionId"
    />
    <v-btn block rounded @click="submit" style="background: #824E1A" >
    <span class="ml-2" color="white--text">Pay now!</span>
        <v-icon>
        mdi-currency-usd
        </v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    </v-bottom-navigation>
    </div>
     <v-card v-else class="mx-auto mt-1" max-width="98%" elevation="4">
        <v-card-title style="background: #824E1A"> Your shopping cart is empty! </v-card-title>
    </v-card>
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
    const requestBody = { lineItems : [] }
    this.$store.state.shoppingCartList.forEach((element) => {
            requestBody.lineItems.push({price: this.getActualPriceId(element), quantity: element.quantity});
        });
    axios.post('/create-checkout-session', requestBody).then((response) => {
        this.sessionId = response.data.id;
        this.$refs.checkoutRef.redirectToCheckout();
    });    
    },
        getActualPrice(item) {
            return item.tier === 0 ? item.price : item.price_2;
        },
         getActualPriceId(item) {
            return item.tier === 0 ? item.price_id : item.price_id_2;
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
    }
} 
</script>


<style>
h1 {
    text-align: center;
}
</style>