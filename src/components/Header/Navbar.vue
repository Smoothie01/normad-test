<template>
    <nav class="nav">
        <div :key="index" v-for="(link,index) of navLinks" class="nav__item">
            <router-link class="nav__link" :to="link.to">
                {{link.name}}
            </router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name:'Navbar',
    props:{
        navLinks:{
            type:Array
        }
    }
}
</script>

<style lang="scss">
@import "src/assets/style/blocks/nav";
</style>
