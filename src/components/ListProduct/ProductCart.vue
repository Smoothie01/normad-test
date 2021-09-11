<template>
    <div class="product-cart">
        <div class="badge"></div>
        <div @click="$emit('toCurrentProduct',product.id)" class="img-top">
            <img :src="product.image" :alt="product.title">
        </div>
        <div class="body">
            <h3 class="product-title">{{product.title}}</h3>
            <p class="product-price">{{product.price}} $</p>
        </div>
        <div class="body add-cart">
            <button @click="$emit('addCart',product)" class="btn btn--primary">В корзину</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'ProductCart',
    props:{
        product:{
            type:Object
        }
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/blocks/product";
</style>
