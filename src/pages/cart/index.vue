<template>
    <section class="cart">
        <div class="container">
            <div v-if="getCarts.length" class="cart__inner">
                <div class="cart__content">
                    <h2 class="cart__title">Корзина</h2>
                    <div class="cart__list">
                        <div class="cart__row">
                            <h4 class="cart__item">Товары</h4>
                            <h4 class="cart__item">КОЛ - ВО</h4>
                            <h4 class="cart__item">ЦЕНА</h4>
                        </div>
                        <transition-group name="card" >
                            <div v-for="item of getCarts" :key="item.id" class="cart__row">
                                <div class="cart__item">
                                    <img :src="item.image" :alt="item.title">
                                    <p>
                                        {{ item.title }}
                                    </p>
                                </div>
                                <p class="cart__item">
                                    1
                                </p>
                                <p class="cart__item">
                                    {{ item.price }} $
                                </p>
                                <div class="btn--group">
                                    <button @click="deleteOne(item.id)" class="btn btn--dark">Удалить</button>
                                </div>
                            </div>
                        </transition-group>
                        <div class="btn--group">
                            <button @click="clearAll" class="btn btn--primary">Очистить корзину</button>
                        </div>
                    </div>
                </div>
                <div class="cart__content">
                    <h2 class="cart__title">Сумма к оплате</h2>
                    <div class="cart__list">
                        <div class="cart__row">
                            <p class="cart__item">Итого</p>
                            <p class="cart__item">{{ getCount }} $</p>
                        </div>
                        <div style="margin: 15px 0" class="btn-group">
                            <button @click="show = true" class="btn btn--rose">Оформить покупку</button>
                            <button @click="$router.push('/')" class="btn btn--primary">Перейти на главную</button>
                        </div>
                    </div>
                </div>
                <vodal :width="500" :height="350" :show="show" @hide="show = false">
                    <h1>Оформление заказа</h1>
                    <Form @submitResult="toCheck"/>
                </vodal>
            </div>
            <div v-else class="cart__inner">
                <h2 class="title">В корзине пусто</h2>
            </div>
        </div>
    </section>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import Form from "@/components/Form";
export default {
    name: 'Cart',
    components: {Form},
    data: () => ({
        count: 0,
        show:false
    }),
    computed: {
        ...mapGetters(['getCarts']),
        getCount() {
            this.getCarts.map(item => this.count += item.price)
            return this.count
        }
    },
    methods: {
        ...mapMutations(['setCheck','clearCart','deleteProductCart']),
        toCheck(data){
            let payload = {
                ...data,
                total:this.count
            }
            this.setCheck(payload)
            this.$router.push('/check')
        },
        clearAll(){
            this.clearCart()
            localStorage.removeItem('cart')
        },
        deleteOne(id){
            console.log(this.getCarts)
            this.deleteProductCart(id)
            localStorage.setItem('carts',JSON.stringify(this.getCarts))
        }
    },
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/blocks/cart";
</style>
