<template>
    <main>
        <loader v-show="loading"/>
        <intro/>
        <list-product :products="getProducts" title="Активационные товары"/>
        <list-product :products="getBonusProducts" title="Бонусные товары"/>
    </main>
</template>
<script>
import Intro from "@/components/Intro";
import {mapActions, mapGetters} from 'vuex'
import ListProduct from "@/components/ListProduct";
import Loader from "@/components/Loader";

export default {
    name: 'Main',
    data:()=>({
        loading:true
    }),
    components: {ListProduct, Intro,Loader},
    methods: {
        ...mapActions(['getUser', 'getProductList', 'getBonusList']),
    },
    computed: {
        ...mapGetters(['getBonusProducts', 'getProducts'])
    },
    async mounted() {
        await this.getUser()
        await this.getProductList()
        await this.getBonusList(15)
        this.loading = false
    }
}
</script>
<style lang="scss">
</style>
