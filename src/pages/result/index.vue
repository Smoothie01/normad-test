<template>
    <div>
        <h1 v-if="!getCheck" class="title">Сеанс окончен</h1>
        <div v-else class="container">
            <h1 class="title">Чек</h1>
            <div class="row">
                <p>ФИО:</p>
                <p><b>{{getCheck.name}}</b></p>
            </div>
            <div class="row">
                <p>Способ доставки:</p>
                <p><b>{{getCheck.typeDelivery==="pickup"?"Самовывоз":"Курьер"}}</b></p>
            </div>
            <div class="row">
                <p>{{getCheck.typeDelivery==="pickup"?"Точка назначение":"Адрес"}}</p>
                <p><b>{{getCheck.delivery}}</b></p>
            </div>
            <div class="row">
                <p>Способ оплаты:</p>
                <p><b>{{getCheck.payMethod==="cash"?"Наличными курьеру":"Банковская карта"}}</b></p>
            </div>
            <div class="row">
                <p>Итоговая цена:</p>
                <p><b>{{getCheck.total}} $</b></p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name:'result',
    computed:{
        ...mapGetters(['getCheck'])
    }
}
</script>

<style lang="scss" scoped>
    p{
      font-size: 18px;
      margin: 15px 0;
      b{
        font-weight: 600;
      }
    }
</style>
