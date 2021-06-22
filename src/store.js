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
            deliveryFee: "300",
            tip: "0",
            totalPrice: "6500",
            status: "pending",
            timestamp: "2021-04-21 11:10:25"
          },
          {
            uuid: 1,
            userId: "ce558d70-7b0b-4b15-89d9-fe920f0d1250",
            items: [{product: "Burger", quantity: 1}, {product: "Curly Fries", quantity: 1}, {product: "Pickles", quantity: 1}],
            deliveryFee: "300",
            tip: "0",
            totalPrice: "6500",
            status: "pending",
            timestamp: "2021-04-22 17:10:32"
          },
          {
            uuid: 2,
            userId: "ce558d70-7b0b-4b15-89d9-fe920f0d1250",
            items: [{product: "Pickles", quantity: 3}],
            deliveryFee: "450",
            tip: "300",
            totalPrice: "6500",
            status: "fulfilled",
            timestamp: "2021-04-22 19:12:00"
          },
          {
            uuid: 3,
            userId: "ce558d70-7b0b-4b15-89d9-fe920f0d1250",
            items: [{product: "Chicken Sandwich", quantity: 1}, {product: "Pickles", quantity: 4}],
            deliveryFee: "300",
            tip: "300",
            totalPrice: "2300",
            status: "queued",
            timestamp: "2021-05-03 21:10:16"
          },
          {
            uuid: 4,
            userId: "ce558d70-7b0b-4b15-89d9-fe920f0d1250",
            items: [{product: "Burger", quantity: 7}, {product: "Brownie", quantity: 10}],
            deliveryFee: "150",
            tip: "500",
            totalPrice: "23450",
            status: "queued",
            timestamp: "2021-05-11 08:21:28"
          },
          {
            uuid: 5,
            userId: "ce558d70-7b0b-4b15-89d9-fe920f0d1250",
            items: [{product: "Curly Fries", quantity: 2}],
            deliveryFee: "150",
            tip: "0",
            totalPrice: "1400",
            status: "queued",
            timestamp: "2021-05-14 08:21:03"
          },
          {
            uuid: 6,
            userId: "ce558d70-7b0b-4b15-89d9-fe920f0d1250",
            items: [{product: "Chicken Sandwich", quantity: 1}, {product: "Pickles", quantity: 4}],
            deliveryFee: "300",
            tip: "300",
            totalPrice: "2300",
            status: "queued",
            timestamp: "2021-05-12 12:15:11"
          }],
          fulfilledOrders: [],
        userDetails: [],
        allUsers: [],
        shoppingCartAmt: 0,
        // grabAvatar: null,
        // allAvatars: []
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
        },
        setUserDetails(state, fetchedData) {
            state.userDetails = fetchedData
        },
        setAllUsers(state, fetchedData) {
            state.allUsers = fetchedData
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
        updateStatus(state, id, newStatus) {
            for (const order in state.orderList) {
                if (order.uuid === id) {
                    order.status = newStatus
                }
            }
        }
        // randomAvatar(state, allAvatars) {
        //     let randomIndex = Math.floor(Math.random() * state.allAvatars.length)
        //     state.grabAvatar = state.allAvatars[randomIndex]
        // }
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
                const fetchedUser = await axios.get(`/api/user/${this.$auth.user.sub}`)
                commit("setUserDetails", fetchedUser.data)
            } catch (err) {
                console.log('Failed fetching user details', err)
            }
        },
        async fetchAllUsers({ commit }) {
            try {
                const fetchedUsers = await axios.get('/api/usersTest')
                commit("setAllUsers", fetchedUsers.data)
            } catch (err) {
                console.log('Failed fetching all users', err)
            }
        }
    }
})