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
        userDetails: []
    },

    mutations: {
        addToCart(state, payload){
        let checkExist = state.shoppingCartList.find((item) => item.id === payload.id)
        if(checkExist){
            let cartIndex = state.shoppingCartList.indexOf(checkExist)
            state.shoppingCartList[cartIndex].quantity += 1
        } else {
            payload.quantity = 1
            state.shoppingCartList.push(payload)
        }
        },

        clearCart(state) {
            state.shoppingCartList = []
        },
        setItemList(state, fetchedData) {
            state.itemList = fetchedData
        },
        setOrderList(state, fetchedData) {
            state.orderList = fetchedData
            console.log(state.orderList)
        },
        setUserDetails(state, fetchedData) {
            state.userDetails = fetchedData
            console.log("User details from fetch", state.userDetails)
        },
        openAccountInfo(state) {
            state.displayPage = 'AccountInfo';
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
            }
        },
        async fetchUserDetails( state, {commit } ) {
            try {
                const fetchedUser = await axios.get(`/api/user/${state.userID}`)
                commit("setUserDetails", fetchedUser.data)
            } catch (err) {
                console.log('Failed fetching user details', err)
        }}
    }


})