<template> 
  <div class="item">
    <div class="item__discount" v-if="product.discount">-{{ product.discount }}%</div>
    <div class="item__new" v-if="product.new">Новинка!</div>
    <img class="item__image" :src="product.img">
    <div class="item__wrapper-content">
      <div class="item__text-block">
        <p class="item__name">{{ product.name }}</p>
        <p class="item__price">
          <b>{{ product.price }}</b>
          <span v-if="gr">р / 100гр</span>
          <span v-if="kg">р / 1кг</span>
          <span v-if="pc">р / 1шт</span>
        </p>
      </div>
      <i
        @click="addToCart(product)"
        class="item__cart"
        :class="{'disabled-button' : $store.state.cartAddProduct || $store.state.cartAddedProduct}"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data);
    }
  },
  computed: {
    gr() {
      return this.product.category === 'nuts' || this.product.category === 'berries';
    },
    kg() {
      return this.product.category === 'fruits' || this.product.category === 'vegetables';
    },
    pc() {
      return this.product.category === 'sets';
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  background-color: white;
  box-shadow: 0 0 5px 0 $light_gray;
  padding: 30px 15px;
  position: relative;
  text-align: left;
  margin-bottom: 1%;
  margin-right: 1%;
  max-height: 235px;
  width: 24.25%;
  @include _979 {
    width: 32.65%;
  }
  @include _768 {
    max-height: 255px;
  }
  @include _600 {
    max-height: 275px;
    width: 49.5%;
  }
  @include _480 {
    max-height: 500px;
    margin-right: 0;
    margin-bottom: 10px;
    width: 100%;
  }
  &:nth-child(4n+4) {
    margin-right: 0;
    @include _979 {
      margin-right: 1%;
    }
  }
  &:nth-child(3n+3) {
    @include _979 {
      margin-right: 0;
    }
    @include _600 {
      margin-right: 1%;
    }
  }
  &:nth-child(even) {
    @include _600 {
      margin-right: 0;
    }
  }
  &__discount {
    color: #fff;
    position: absolute;
    top: 15px; left: 0;
    background-color: #f04032;
    padding: 3px 10px;
  }
  &__new {
    color: #fff;
    position: absolute;
    top: 15px; right: 0;
    background-color: #3cbd5f;
    padding: 3px 10px;
  }
  &__image {
    margin-bottom: 10px;
    width: 100%;
    @include _480 {
      display: block;
      margin: 0 auto;
      width: 70%;
    }
  }
  &__wrapper-content {
    align-items: flex-end;
    display: flex;
    justify-content: space-around;
  }
  &__text-block {
    width: 95px;
    @include _768 {
      width: 105px;
    }
  }
  &__name {
    font-size: 18px;
    margin-bottom: 5px;
    @include _768 {
      font-size: 22px;
      margin-bottom: 10px;
    }
  }
  &__price {
    b {
      color:black;
      font-size: 16px;
      font-weight: 700;
      margin-right: 2px;
      @include _768 {
        font-size: 18px;
      }
    }
  }
  &__cart {
    background-color: $pink;
    cursor: pointer;
    display: block;
    height: 34px;
    width: 34px;
    mask: url('../assets/header/add-basket.svg');
    transition: background-color .2s linear;
    @include _768 {
      height: 40px;
      width: 40px;
    }
    &:hover {
      background-color: $dark_pink;
    }
    &:active {
      transform: scale(1.05);
    }
  }
}

.disabled-button {
  pointer-events: none;
}
</style>