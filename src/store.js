import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        displayPage: 'Main',
        loggedIn: true,
        userID: "",
        userRole: "guest",
        itemList: [],
        shoppingCartList: [],
        orderList: [],
        userDetails: [],
        allUsers: [],
        shoppingCartAmt: 0,
        
    }, 

    mutations: {
        addToCart(state, payload){
        let checkExist = state.shoppingCartList.find((item) => item.id === payload.id)
        if(checkExist){
            let cartIndex = state.shoppingCartList.indexOf(checkExist)
            state.shoppingCartList[cartIndex].quantity += 1
            state.shoppingCartAmt += 1
        } else {
            payload.quantity = 1
            state.shoppingCartList.push(payload)
            state.shoppingCartAmt += 1
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
        setAllUsers(state, fetchedData) {
            state.allUsers = fetchedData
            console.log("All Users from fetch", state.allUsers)
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
        },
        openMerchantDashboard(state) {
            state.displayPage = 'MerchantDashboard'
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
                const fetchedOrders = await axios.get(`/api/user/${this.$auth.user.sub}/orders`)
                commit("setOrderList", fetchedOrders.data)
            } catch (err) {
                console.log('Failed fetching order list', err)
            }
        },
        async fetchUserDetails( state, { commit } ) {
            try {
                console.log("user ID", state.userID)
                const fetchedUser = await axios.get(`/api/user/${this.$auth.user.sub}`)
                commit("setUserDetails", fetchedUser.data)
            } catch (err) {
                console.log('Failed fetching user details', err)
            }
        },
        async fetchAllUsers({ commit }) {
            console.log('inside store function')
            try {
                const fetchedUsers = await axios.get('/api/usersTest')
                commit("setAllUsers", fetchedUsers.data)
            } catch (err) {
                console.log('Failed fetching all users', err)
            }
        }
    }
})