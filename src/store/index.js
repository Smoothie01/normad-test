import Vue from 'vue'
import Vuex from 'vuex'
import {Services} from "@/api";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        carts: [],
        currentProduct: {},
        bonusProducts: [],
        check:null,
    },
    getters: {
        getProducts: state => state.products,
        getBonusProducts: state => state.bonusProducts,
        getCarts: state => state.carts,
        getCurrentProduct: state => state.currentProduct,
        getCheck:state => state.check
    },
    mutations: {
        setToCard:(state,payload)=>{
            state.carts = payload
        },
        setProducts: (state, payload) => {
            state.products = payload
        },
        addToCard: (state, payload) => {
            state.carts = [...state.carts, payload]
        },
        setBonusProducts: (state, payload) => {
            state.bonusProducts = payload
        },
        deleteProductCart(state,id){
            state.carts = state.carts.filter(item=>item.id!==id)
        },
        clearCart(state){
            state.carts = []
        },
        setCurrentProduct: (state, payload) => {
            state.currentProduct = payload
        },
        setCheck: (state, payload) => {
            state.check = payload
        }
    },
    actions: {
        async getProductList({commit}, limit = 5) {
            try {
                let response = await Services.getList(limit)
                commit('setProducts', response)
            } catch (e) {
                console.log(e.message)
            }
        }
        ,
        async getBonusList({commit}, limit = 10) {
            try {
                let response = await Services.getList(limit)
                commit('setBonusProducts', response)
            } catch (e) {
                console.log(e.message)
            }
        }
        ,
        async getUser() {
            const response = await Services.getUser()
            console.log(response)
        }
        ,
        async getProduct(ctx, id) {
            const response = await Services.getProduct(id)
            ctx.commit('setCurrentProduct',response)
        }
    }
    ,
    modules: {}
})
