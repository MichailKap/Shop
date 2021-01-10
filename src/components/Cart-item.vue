<template>
  <transition name="cart-item">
    <div class="item">
      <img
        :src="cart_item.img"
        class="item__image"
        alt="Картинка продукта"
      >
      <div class="item__content-wrapper">
        <div class="item__name-price">
          <div class="item__name">{{ cart_item.name }}</div>
          <div class="item__price">
            <b>{{ cart_item.price }}</b>
            <span v-if="gr">р / 100гр</span>
            <span v-if="kg">р / 1кг</span>
            <span v-if="pc">р / 1шт</span>
          </div>
        </div>
        <div class="item__quantity">
          <i
            class="item__decrement-button fa fa-minus"
            @click="decrementItem"
          ></i>
          <p class="item__number">
            <span>{{ cart_item.quantity }}</span>
            <span v-if='gr'>гр</span>
            <span v-if='kg'>кг</span>
            <span v-if='pc'>шт</span>
          </p>
          <i
            class="item__increment-button fa fa-plus"
            @click="incrementItem"
          ></i>
        </div>
      </div>
      <i
        class="item__delete fa fa-times"
        @click="deleteFromCart"
      ></i>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    cart_item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart');
    },
    decrementItem() {
      this.$emit('decrement');
    },
    incrementItem() {
      this.$emit('increment');
    }
  },
  computed: {
    gr() {
      return this.cart_item.category == 'nuts' || this.cart_item.category == 'berries';
    },
    kg() {
      return this.cart_item.category == 'fruits' || this.cart_item.category == 'vegetables';
    },
    pc() {
      return this.cart_item.category == 'sets';
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  align-items: center;
  box-shadow: 0 0 7px 0 $light_gray;
  display: flex;
  margin-bottom: 10px;
  padding: 20px 40px 20px 20px;
  @include _480 {
    flex-wrap: wrap;
    justify-content: center;
    padding: 15px 15px 25px 15px;
  }
  &__image {
    margin-right: 30px;
    width: 150px;
    @include _480 {
      display: block;
      margin: 0 auto 10px;
      width: 70%;
    }
  }
  &__content-wrapper {
    align-items: center;
    display: flex;
    margin-right: auto;
    @include _600 {
      flex-wrap: wrap;
    }
    @include _480 {
      margin-right: 0;
      width: 230px;
    }
  }
  &__name-price {
    margin-right: 40px;
    width: 110px;
    @include _600 {
      width: 100%;
      margin-bottom: 10px;
    }
    @include _480 {
      display: flex;
      margin-right: 0;
      margin-bottom: 5px;
    }
  }
  &__name {
    font-size: 18px;
    margin-bottom: 10px;
    @include _768 {
      font-size: 22px;
    }
    @include _480 {
      margin-right: 15px;
    }
  }
  &__price {
    b {
      font-size: 16px;
      font-weight: 700;
      margin-right: 2px;
      @include _768 {
        font-size: 18px;
      }
    }
  }
  &__quantity {
    align-items: center;
    display: flex;
  }
  &__number {
    text-align: center;
    width: 60px;
    @include _768 {
      font-size: 16px;
    }
  }
  &__increment-button,
  &__decrement-button {
    color: $gray;
    cursor: pointer;
    background-color: #f5f5f5;
    border-radius: 50%;
    font-size: 14px;
    padding: 6px 11px;
    transition: color .2s linear,
                background-color .2s linear;
    &:hover {
      color: #fff;
      background-color: $green;
    }
    &:active {
      transform: scale(1.05);
    }
  }
  &__delete {
    color: $gray;
    cursor: pointer;
    font-size: 22px;
    transition: color .2s linear;
    @include _768 {
      font-size: 22px;
    }
    &:hover {
      color: #f25050;
    }
    &:active {
      transform: scale(1.05);
    }
  }
}

.cart-item-enter-active,
.cart-item-leave-active {
  transition: opacity .5s;
}
.cart-item-enter,
.cart-item-leave-to  {
  opacity: 0;
}
</style>