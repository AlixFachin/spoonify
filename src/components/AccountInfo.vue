<template >
    <div id="account-info-container">
        <v-card v-for="userdetails in this.$store.state.userDetails" :key="userdetails.id">
    <v-list-item three-line >
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