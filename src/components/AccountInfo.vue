<template >
    <div id="account-info-container">
        <v-card v-for="item in this.$store.state.shoppingCartList" :key="item.id">
    <v-list-item three-line @click="setSelectedIndex(item.id)">
        <v-list-item-avatar
        tile
        left
        size="20%"
        color="grey">
        <v-img color='grey' class="fill-height grey"
            :src="require(`@/assets/${item.name}.jpg`)"
            ></v-img>
        </v-list-item-avatar>
    <v-list-item-content>
        <v-list-item-title class="mb-2"> {{item.name}} </v-list-item-title>
        <v-list-item-subtitle>¥{{item.price}}</v-list-item-subtitle>
    </v-list-item-content>
    </v-list-item>
    </v-card>
    </div>
</template>


<script>
export default {
    name: 'AccountInfo',
    methods: {
    }
}