import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        displayLogin: true,
        displayAccountCreation: false,
        displayMain: false,
        displaySideMenu: false,
        displayAccountInfo: false,
        displayShoppingCart: false,
        displayPurchaseHistory: false,
        displayMerchantDashboard: false,
        itemList: [],
        shoppingCartList: [],
    },

    mutations: {
        addToCart(state, payload){
            state.shoppingCartList.push(payload)
        },

        clearCart(state){
            state.shoppingCartList = []
        }

    },

    actions: {
        async fetchItemList(){
            let fetchedResult = await axios.get('someendpoint')
            this.itemList = fetchedResult.data
        }
    }


})