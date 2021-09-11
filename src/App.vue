<template>
    <div class="wrapper">
        <Header/>
        <transition name="slide-fade">
            <router-view></router-view>
        </transition>
        <Footer/>
    </div>
</template>

<script>
import Header from "@/components/Header";
import {mapMutations} from "vuex";
import Footer from "@/components/Footer";

export default {
    name: 'App',
    components: {Footer, Header},
    methods:{
        ...mapMutations(['setToCard'])
    },
    mounted() {
        if (localStorage.getItem('carts')){
            this.setToCard(JSON.parse(localStorage.getItem('carts')))
        }
    }
}
</script>

<style lang="scss">
@import "assets/style/main";
</style>
