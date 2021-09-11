<template>
    <div class="logo">
        {{title}}
    </div>
</template>

<script>
export default {
    name:'Logo',
    props:{
        title:{
            type:String
        }
    }
}
</script>

<style lang="scss" scoped>
    .logo{
      font-size: 30px;
      font-weight: 700;
    }
</style>
