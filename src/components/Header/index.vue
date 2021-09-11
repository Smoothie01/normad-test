<template>
    <header class="header">
        <div class="container">
            <div class="header__item">
                <Logo title="LOGOxLOGO"/>
                <div class="group">
                    <search placeholder="Поиск"/>
                    <div class="location">
                        <img src="@/assets/img/svg/location.svg" alt="location">
                        <span>Алматы</span>
                    </div>
                </div>
                <profile/>
            </div>
            <hr>
            <div class="header__item">
                <catalog/>
                <navbar :nav-links="navLinks"/>
                <div class="group">
                    <router-link to="/cart" class="cart--link">
                        <img src="@/assets/img/svg/shopping-cart.svg" alt="cart">
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Logo from "@/components/Header/Logo";
import Search from "@/components/Header/Search";
import Profile from "@/components/Header/Profile";
import Catalog from "@/components/Header/Catalog";
import Navbar from "@/components/Header/Navbar";
export default {
    name:'Header',
    data:()=>({
        navLinks:[
            {name:'Главная',to:'/'},
            {name:'О компании',to:'#'},
            {name:'Поддержка',to:'#'},
            {name:'Контакты',to:'#'},
        ]
    }),
    components: {Navbar, Catalog, Profile, Search, Logo}
}
</script>

<style lang="scss">
@import "src/assets/style/blocks/header";
</style>
