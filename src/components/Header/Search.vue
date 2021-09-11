<template>
    <form class="search">
        <input :placeholder="placeholder" type="text" class="input-text">
        <button type="submit">
            <img width="16" :src="require('@/assets/img/svg/search.svg')">
        </button>
    </form>
</template>

<script>
export default {
    name: 'Search',
    props: {
        placeholder: {
            type: String
        }
    }
}
</script>

<style scoped>

</style>
