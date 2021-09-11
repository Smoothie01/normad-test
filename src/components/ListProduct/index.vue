<template>
    <section class="list-product">
        <div class="container">
            <h1 class="title">{{ title }}</h1>
            <div class="filter">
                <div class="select">
                    <select @change="setCurrentValue($event)">
                        <option value="1">Сортировка</option>
                        <option :key="item.value" v-for="item of sortOptions" :value="item.value">
                            {{ item.name }}
                        </option>
                    </select>
                </div>
            </div>
            <transition-group name="card" tag="div" class="row">
                <product-cart @toCurrentProduct="toPath" @addCart="addToCart" :key="product.id" :product="product"
                              v-for="product of products"/>
            </transition-group>
        </div>
    </section>
</template>

<script>
import ProductCart from "@/components/ListProduct/ProductCart";
import {mapGetters, mapMutations} from "vuex";

export default {
    name: 'ListProduct',
    components: {ProductCart},
    data: () => ({
        sortOptions: [
            {name: 'Сначала дешевые', value: 'cheap'},
            {name: 'Сначала дорогие', value: 'rich'},
            {name: 'По названию (А-Я)', value: 'up'},
            {name: 'По названию (Я-А)', value: 'down'},
        ],
        currentValue: ''
    }),
    computed: {
        ...mapGetters(['getCarts']),
    },
    props: {
        title: {
            type: String,
            required: true
        },
        products: {
            type: Array
        }
    },
    methods: {
        ...mapMutations(['addToCard']),
        addToCart(product) {
            let carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : []
            if (carts && carts.filter(item => item.id === product.id).length) {
                this.$toast('Вы уже добавили в корзину', {
                    type: 'info',
                    timeout: 2000
                })
            } else {
                this.addToCard(product)
                console.log(this.getCarts)
                localStorage.setItem('carts', JSON.stringify(this.getCarts))
                this.$toast('Вы добавили в корзину', {
                    type: 'success',
                    timeout: 2000
                })
            }
        },
        toPath(id) {
            this.$router.push(`product/${id}`)
        },
        setCurrentValue(e) {
            let props = this
            switch (e.target.value) {
                case 'up':
                    return props.products.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
                case 'down':
                    return props.products.sort((a, b) => (b.title > a.title) ? 1 : ((a.title > b.title) ? -1 : 0))
                case 'cheap':
                    return props.products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
                case 'rich':
                    return props.products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
                default:
                    return props.products
            }
        }
    }
}
</script>

<style scoped>

</style>
