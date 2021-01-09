<template>
  <div class="container">
    <ul class="tabs">
      <li>
        <input
          type="radio"
          id="slider-popularity"
          value="slider-popularity"
          v-model="checkedType"
        >
        <label class="tabs__tab" for="slider-popularity">Популярные</label>
      </li>
      <li>
        <input
          type="radio"
          id="slider-discount"
          value="slider-discount"
          v-model="checkedType"
        >
        <label class="tabs__tab" for="slider-discount">Cо скидкой</label>
      </li>
      <li>
        <input
          type="radio"
          id="slider-new"
          value="slider-new"
          v-model="checkedType"
        >
        <label class="tabs__tab" for="slider-new">Новинки</label>
      </li>
    </ul>
    <div class="slides__wrapper">
      <swiper class="slides" :options="swiperOptions">
        <swiper-slide
          class="slide"
          v-for="product in filterProducts"
          :key="product.id"
        >
          <div class="slide__discount" v-if="product.discount">-{{ product.discount }}%</div>
          <div class="slide__new" v-if="product.new">Новинка!</div>
          <img class="slide__image" :src="product.img">
          <div class="slide__wrapper-content">
            <div class="slide__text-block">
              <p class="slide__name">{{ product.name }}</p>
              <p class="slide__price">
                <b>{{ product.price }}</b>
                <span v-if="product.category === 'nuts' || product.category === 'berries'">р / 100гр</span>
                <span v-if="product.category === 'fruits' || product.category === 'vegetables'">р / 1кг</span>
                <span v-if="product.category === 'sets'">р / 1шт</span>
              </p>
            </div>
            <i
              @click="addToCart(product)"
              class="slide__cart"
              :class="{'disabled-button' : $store.state.cartAddProduct || $store.state.cartAddedProduct}"
            ></i>
          </div>
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-bullet" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev">
          <svg class="icon" viewBox="0 0 1000 1000">
            <g transform="matrix(-1,0,0,1,1000,0)">
              <path d="M690.8,803l-28.5-28.9L933,500L662.3,225.9l28.5-28.9L990,500L690.8,803z"/>
              <path d="M942,520.4H10v-40.8h932V520.4z"/>
            </g>
          </svg>
        </div>
        <div class="swiper-button-next" slot="button-next">
          <svg class="icon" viewBox="0 0 1000 1000">
            <g>
              <path d="M690.8,803l-28.5-28.9L933,500L662.3,225.9l28.5-28.9L990,500L690.8,803z"/>
              <path d="M942,520.4H10v-40.8h932V520.4z"/>
            </g>
          </svg>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { mapGetters, mapActions }  from 'vuex'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      checkedType: 'slider-popularity',
      swiperOptions: {
        spaceBetween: 5,
        threshold: 40,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1
          },
          480: {
            slidesPerView: 2,
            slidesPerGroup: 2
          },
          650: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 4
          },
          979: {
            slidesPerView: 5,
            slidesPerGroup: 3
          }
        }
      }
    }
  },
  methods: {
    addToCart(product) {
      this.ADD_TO_CART(product);
    },
    ...mapActions ([
      'ADD_TO_CART'
    ])
  },
  computed: {
    ...mapGetters([
      'products'
    ]),
    filterProducts() {
      if (this.checkedType === 'slider-popularity') {
        return this.products.filter(item => item.popularity == true);
      }
      if (this.checkedType === 'slider-discount') {
        return this.products.filter(item => item.discount != false);
      }
      if (this.checkedType === 'slider-new') {
        return this.products.filter(item => item.new == true);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  margin-left: 50px;
  @include _979 {
    margin-left: 30px;
  }
  @include _768 {
    margin-left: 0;
  }
  @include _480 {
    flex-direction: column;
  }
  &__tab {
    background-color: #f3f3f3;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    margin-left: -1px;
    padding: 12px 25px;
    transition: $transition;
    @include _480 {
      border: 1px solid $light_gray;
      margin-left: 0;
      margin-bottom: 3px;
      padding: 12px 0;
      text-align: center;
      width: 100%;
    }
    &:hover {
      background-color: #ececec;
    }
  }
}

.slides {
  &__wrapper {
    box-shadow: 0 0 10px 0 $light_gray;
    margin-bottom: 120px;
    padding: 50px;
    @include _979 {
      padding: 30px;
    }
    @include _768 {
      margin-bottom: 80px;
    }
  }
}

.slide {
  background-color: #fff;
  border: 1px solid $light_gray;
  padding: 25px 15px;
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
    width: 100%;
  }
  &__wrapper-content {
    align-items: flex-end;
    display: flex;
    justify-content: space-around;
  }
  &__text-block {}
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

input[type=radio] {      // Скрываем кружки у переключателей
  display: none;
}
input[type=radio]:checked + label {      // Активная закладка
  background-color: #fff;
  box-shadow: 0 10px 0 0 #fff,
              0 0 10px 0 $light_gray;
  color: $green;
}

.swiper-pagination {      // Пагинация слайдера
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  z-index: 10;
}
.swiper-pagination::v-deep .swiper-pagination-bullet-custom {
  border: 1px solid $light_gray;
  cursor: pointer;
  margin: 0 5px;
  transition: $transition;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  @include _768 {
    height: 30px;
    line-height: 30px;
    width: 30px;
  }
  @include _480 {
    margin: 5px;
  }
}
.swiper-pagination::v-deep .swiper-pagination-bullet-active {
  border: 1px solid $green;
  color: $green;
}

.swiper-button-prev,      // Стрелки слайдера
.swiper-button-next {
  border: 1px solid $light_gray;
  cursor: pointer;
  fill: #292929;
  height: 35px;
  width: 35px;
  padding: 4px;
  position: absolute;
  bottom: 0;
  transition: background-color .2s linear;
  z-index: 10;
  @include _480 {
    display: none;
  }
  &:hover {
    border: 1px solid $green;
    fill: $green;
  }
}
.swiper-button-next {
  right: 0;
}
.swiper-button-prev {
  left: 0;
}
.swiper-button-disabled {
  cursor: auto;
  opacity: 0;
}

.disabled-button {
  pointer-events: none;
}
</style>