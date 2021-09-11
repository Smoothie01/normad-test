<template>
    <section class="intro">
        <div class="container">
            <slider :interval="5000" :products="getProducts"/>
        </div>
    </section>
</template>

<script>
import '@/assets/style/blocks/intro.scss'
import Slider from "@/components/Slider/Slider";
import {mapGetters} from 'vuex'
export default {
    name:'Intro',
    components: {Slider},
    computed:{
        ...mapGetters(['getProducts'])
    }
}
</script>

<style lang="scss" scoped>
</style>
