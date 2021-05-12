<template >
    <div>
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
    <v-bottom-navigation>
     <StripeCheckout
     ref="checkoutRef"
     mode="payment"
     :pk="publishableKey"
     :line-items="lineItems"
      />
     <button @click="submit">Pay Now!</button>
     <v-spacer></v-spacer>
     <div>
     ¥{{total}}
     </div>
    </v-bottom-navigation>
    </div>
</template>


<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
import dotenv from 'dotenv';
dotenv.config();


export default {
    
    name: 'ShoppingCart',
    components: {
        StripeCheckout
    },
    methods: {
        submit () {
    // this.items = this.$store.state.shoppingCartList
    this.$refs.checkoutRef.redirectToCheckout();
    // console.log(this.items)
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
            publishableKey: 'process.env.VUE_APP_PK',
            lineItems: [],
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
    
</style>