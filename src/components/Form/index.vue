<template>
    <form @submit.prevent="submitHandler" class="form">
        <input
                v-model="name"
                type="text"
                class="input-text"
                placeholder="ФИО"
                :class="{invalid:($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength)}"
                required
        />
        <small v-if="$v.name.$dirty && !$v.name.minLength" style="color: #b60b0b">Вы написали меньше 3 символов</small>
        <small v-else-if="$v.name.$dirty && !$v.name.required" style="color: #b60b0b">Это поле не должно быть пустым</small>
        <p>Способ доставки</p>
        <div class="form-group">
            <input
                    v-model="radioDeliver"
                    type="radio"
                    value="pickup" id="1"
            />
            <label for="1">самовывоз</label>
            <input
                    type="radio"
                    v-model="radioDeliver"
                    value="deliver"
                    id="2"
            />
            <label for="2">доставка</label>
        </div>
        <input
                v-model="delivery"
                type="text"
                class="input-text"
                :placeholder="radioDeliver==='pickup'?'Выбор точки самовывоза':'Напишите адрес'"
                :class="{invalid:($v.delivery.$dirty && !$v.delivery.required) || ($v.delivery.$dirty && !$v.delivery.minLength)}"
                required
        />
        <small v-if="$v.delivery.$dirty && !$v.delivery.minLength" style="color: #b60b0b">Вы написали меньше 5 символов</small>
        <small v-else-if="$v.delivery.$dirty && !$v.delivery.required" style="color: #b60b0b">Это поле не должно быть пустым</small>
        <div class="form-group">
            <input type="radio" v-model="payMethod" value="card" id="3"/>
            <label for="3">Банковская карта </label>
            <input type="radio" v-model="payMethod" value="cash" id="4"/>
            <label for="4">Наличные курьеру</label>
        </div>
        <div class="btn-group">
            <button class="btn btn--rose">Купить</button>
        </div>
    </form>
</template>

<script>
import {required,minLength} from "vuelidate/lib/validators";
export default {
    name: 'Form',
    data:()=>({
        name:'',
        delivery:'',
        radioDeliver:'pickup',
        payMethod:'card'
    }),
    validations:{
        name:{required,minLength:minLength(3)},
        delivery:{required,minLength:minLength(5)}
    },
    methods:{
        submitHandler(){
            if (this.$v.$invalid){
                this.$v.$touch()
                return
            }
            let result = {
                name:this.name,
                typeDelivery:this.radioDeliver,
                delivery:this.delivery,
                payMethod:this.payMethod,
            }
            this.$emit('submitResult',result)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/variabless";

.form {
  width: 100%;
  padding: 25px;
  display: flex;
  row-gap: 10px;
  justify-content: center;
  flex-direction: column;

  &-group {
    margin: 10px 0;
    display: flex;
    gap: 10px;
  }

  .input-text {
    width: 100%;
    padding: 5px 10px;
    font-size: 16px;
    font-family: inherit;
    border: 1px solid $gray;
    outline: none;
    border-radius: 4px;
    transition: .2s all linear;
    &:focus {
      border: 2px solid $darkGray;
    }
    &.invalid{
      border: 1px solid red;
      &:focus {
        border: 2px solid red;
      }
    }
  }
}

</style>
