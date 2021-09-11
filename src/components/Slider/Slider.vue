<template>
    <div class="slider">
        <div :style="`right:${current * 100}vh`" class="slider-container">
            <SliderItem @toCurrentPage="toCurrentPage" :key="product.id" v-for="product of products" :product="product"/>
        </div>
        <div v-show="index===current/2" :key="index" v-for="(item,index) of products"  class="slider-option">
            <h1 class="slider-title">{{item.category}}</h1>
            <p class="slider-text">{{item.title}}</p>
            <div class="dots">
                <div :class="{'active':current/2===index}" @click="toProduct(index)" :key="i" v-for="(i,index) of products.length" class="dot"></div>
            </div>
        </div>
    </div>
</template>

<script>
import SliderItem from "@/components/Slider/SliderItem";

export default {
    name:'Slider',
    components: {SliderItem},
    data:()=>({
        current:0,
        id:1,
    }),
    props:{
        products:{
            type:Array,
            required:true
        },
        interval:{
            type:Number,
            default:null
        }
    },
    watch:{
    },
    methods:{
        toProduct(index){
            this.current = index * 2
        },
        duration(interval){
            setInterval(()=>{
                if (this.current === (this.products.length-1)*2){
                    this.current = 0
                }else {
                    this.current +=2
                }
            },interval)
        },
        toCurrentPage(id){
            this.$router.push(`/product/${id}`)
        }
    },
    mounted() {
        if(this.interval){
            this.duration(this.interval)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "src/assets/style/variabless";
    .slider{
      width: 100%;
      height: 100vh;
      overflow: hidden;
      position: relative;
      &-container{
        width: max-content;
        display: flex;
        position: relative;
        align-items: center;
        transition: all .5s linear;
        justify-content: center;
      }
      &-option{
        background-color: $blue;
        position: absolute;
        width: 500px;
        padding: 30px;
        border-radius: 4px;
        bottom: 35px;
        left: 45px;
      }
      &-title{
        font-size: 24px;
        line-height: 1.5;
      }
      &-text{
        font-size: 18px;
        color: $darkGray;
      }
      .dots{
        display: flex;
        margin: 16px 0;
        gap: 8px;
        .dot{
          width: 8px;
          height: 8px;
          cursor: pointer;
          border-radius: 50%;
          background-color: $gray;
          &.active{
            background-color: $darkGray;
          }
        }
      }
    }
</style>
