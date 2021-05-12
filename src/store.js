import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        displayPage: 'Main',
        loggedIn: true,
        userID: "",
        itemList: [],
        shoppingCartList: [],
        orderList: [],
    },

    mutations: {
        addToCart(state, payload){
            console.log('added', payload.name)
            state.shoppingCartList.push(payload)
        },

        clearCart(state){
            state.shoppingCartList = []
        },
        setItemList(state, fetchedData) {
            state.itemList = fetchedData
        },
        setOrderList(state, fetchedData) {
            state.orderList = fetchedData
            console.log(state.orderList)
        },
        openAccountInfo(state) {
            state.displayPage = "AccountInfo";
        },
        openMain(state) {
            state.displayPage = 'Main';
        },
        openShoppingCart(state) {
            state.displayPage = 'ShoppingCart'
        },
        openPurchaseHistory(state) {
            state.displayPage = 'PurchaseHistory'
        }
    },

    actions: {
        async fetchItemList( {commit} ){
            try {
            const fetchedResult = await axios.get('/api/products');
            commit("setItemList", fetchedResult.data)
            } catch (err) {
                console.log('Failed fetching item list', err)
            }
        },
        async fetchUserOrders( state, {commit } ) {
            try {
                const fetchedOrders = await axios.get(`/api/user/${state.userID}/orders`)
                commit("setOrderList", fetchedOrders.data)
            } catch (err) {
                console.log('Failed fetching order list', err)
        }}
    }


})