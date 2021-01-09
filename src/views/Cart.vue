<template>
  <div>
    <Header />
    <div class="container">
      <div class="cart">
        <p class="cart__title title">Корзина</p>
        <div class="cart__items">
           <CartItem
              v-for="(cart_item, index) in cart"
              :key="cart_item.id"
              :cart_item="cart_item"
              @deleteFromCart="deleteFromCart(index)"
              @increment="increment(index)"
              @decrement="decrement(index)"
            />
        </div>
        <p v-if="$store.state.cart.length" class="cart__total-price">
          Всего: <span>{{ totalPrice }}</span>рублей
        </p>
        <p v-if="$store.state.cart.length" class="cart__total-weight">
          Общий вес: <span>{{ totalWeight }}</span>кг
        </p>
        <p v-else class="cart__empty-cart">Корзина пустая</p>
        <button
          class="cart__button solid-button"
          v-if="$store.state.cart.length"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import CartItem from '../components/Cart-item'

import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Header,
    CartItem
  },
  methods: {
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    ...mapActions([
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM',
      'DELETE_FROM_CART'
    ])
  },
  computed: {
    totalWeight () {
      return this.cart.reduce((total, item) => {
        if (item.category == 'nuts' || item.category == 'berries') {
          total += item.quantity/1000;
        }
        else if (item.category == 'sets') {
          total += item.quantity * 5;
        }
        else {
          total += item.quantity;
        }
        return parseFloat(total.toFixed(1));
      }, 0)
    },
    ...mapGetters([
      'cart',
      'totalPrice'
    ])
  }
}
</script>

<style lang="scss" scoped>
.cart {
  &__title {}
  &__items {}
  &__total-price,
  &__total-weight {
    font-size: 18px;
    text-align: center;
    span {
      color: $green;
      display: inline-block;
      font-size: 22px;
      font-weight: 600;
      margin: 0 10px;
    }
  }
  &__total-price {
    margin-top: 40px;
  }
  &__total-weight {
    margin-top: 15px;
  }
  &__empty-cart {
    font-size: 20px;
    text-align: center;
  }
  &__button {
    display: block;
    margin: 30px auto;
  }
}
</style>
