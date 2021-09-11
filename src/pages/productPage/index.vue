<template>
    <section class="product-page">
        <loader v-show="loading"/>
        <div class="container">
            <div class="page-inner">
                <div class="page-main">
                    <div class="page-gallery">
                        <img :src="getCurrentProduct.image" :alt="getCurrentProduct.title">
                    </div>
                    <div class="page-content">
                        <h1 class="page-title">{{getCurrentProduct.title}}</h1>
                        <p class="page-price">{{getCurrentProduct.price}} $</p>
                        <div class="btn-group">
                            <button @click="addToCart(getCurrentProduct)" class="btn btn--rose">Добавить в корзину</button>
                        </div>
                        <p class="page-description">{{getCurrentProduct.description}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import Loader from "@/components/Loader";

export default {
    name:'productPage',
    components: {Loader},
    data:()=>({
        loading:true,
    }),
    computed:{
      ...mapGetters(['getCurrentProduct','getCarts'])
    },
    methods:{
        ...mapMutations(['addToCard']),
        ...mapActions(['getProduct']),
        addToCart(object){
            console.log(localStorage.getItem('carts'))
            let carts = localStorage.getItem('carts')?JSON.parse(localStorage.getItem('carts')):[]
            if(carts && carts.filter(item=>item.id===object.id).length){
                this.$toast('Вы уже добавили в корзину',{
                    type:'info',
                    timeout:2000
                })
            }else {
                this.addToCard(object)
                console.log(this.getCarts)
                localStorage.setItem('carts',JSON.stringify(this.getCarts))
                this.$toast('Вы добавили в корзину',{
                    type:'success',
                    timeout:2000
                })
            }
        }
    },
    async mounted(){
        await this.getProduct(this.$route.params.id)
        this.loading = false
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/blocks/product";
</style>
