<template >
    <div id="merchant-dashboard-container">
        <v-card v-for="item in this.$store.state.orderList" :key="item.id">
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
    </div>
</template>

<script>
export default {
    name: 'MerchantDashboard',
    methods: {
    }
}