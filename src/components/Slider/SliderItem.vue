<template>
    <div @click="$emit('toCurrentPage',product.id)" class="item">
        <img :src="product.image">
    </div>
</template>

<script>
export default {
    name:'SliderItem',
    props:{
        product:{
            type:Object
        }
    }
}
</script>

<style lang="scss" scoped>
    .item{
      width: 100vw;
      cursor: pointer;
      position: relative;
      height: 100vh;
      text-align: center;
      img{
        height: 100vh;
      }
    }
</style>
