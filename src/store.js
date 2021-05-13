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
        orderList: [{
            uuid: 0,
            userId: "ce558d70-7b0b-4b15-89d9-fe920f0d1250",
            items: [{product: "Jam", quantity: 3}, {product: "Curly Fries", quantity: 1}],
            deliveryFee: "123",
            tip: "123",
            totalPrice: "6500",
            status: "pending",
            timestamp: "2016-06-21 11:10:25+09"
          },
          {
            uuid: 1,
            userId: "ce558d70-7b0b-4b15-89d9-fe920f0d1250",
            items: [{product: "Burger", quantity: 3}, {product: "Curly Fries", quantity: 1}],
            deliveryFee: "123",
            tip: "123",
            totalPrice: "6500",
            status: "in progress",
            timestamp: "2016-06-22 17:10:25+09"
          },
          {
            uuid: 2,
            userId: "ce558d70-7b0b-4b15-89d9-fe920f0d1250",
            items: [{product: "Burger", quantity: 3}, {product: "French Fries", quantity: 1}],
            deliveryFee: "123",
            tip: "123",
            totalPrice: "6500",
            status: "fulfilled",
            timestamp: "2016-06-22 19:12:25+09"
          },
          {
            uuid: 3,
            userId: "ab848bc4-74f8-431a-9798-685339927d76",
            items: [{product: "Chicken Sandwich", quantity: 1}, {product: "Pickles", quantity: 4}],
            deliveryFee: "123",
            tip: "123",
            totalPrice: "2300",
            status: "complete",
            timestamp: "2016-07-23 21:10:25+09"
          },
          {
            uuid: 4,
            userId: "8f32af7d-6a58-45f3-a61e-08dfe2ecd84c",
            items: [{product: "Burger", quantity: 7}, {product: "Brownie", quantity: 10}],
            deliveryFee: "123",
            tip: "123",
            totalPrice: "23450",
            status: "pending",
            timestamp: "2016-07-27 08:21:03+09"
          }],
          fulfilledOrders: [],
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
        },
        fulfilledOrdersFilter(state) {
        const fulfilled = [];
        for (const order in state.orderList) {
            console.log(order)
        }
            state.fulfilledOrders = fulfilled
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