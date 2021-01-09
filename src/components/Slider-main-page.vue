<template>
  <div class="container">
    <swiper class="slides" :options="swiperOptions">
      <swiper-slide
        class="slide"
        v-for="slide in slides"
        :key="slide.id"
      >
        <img
          class="slide__image"
          :src="require('../assets/main-page/images/' + slide.image)"
          alt="Картинка продуктов"
        >
        <div class="slide__content">
          <p class="slide__title">{{ slide.title }}</p>
          <p class="slide__text">{{ slide.text }}</p>
          <router-link class="slide__button solid-button" to="/catalog">Перейти в каталог</router-link>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        speed: 1000,
        touchStartForcePreventDefault: true,
        allowTouchMove: false,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        }
      },
      slides: [
        {
          id: 1,
          title: 'Скидки на цитрусовые!',
          text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев.',
          image: 'citrus.jpg'
        },
        {
          id: 2,
          title: 'Больше орехов!',
          text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать.',
          image: 'nuts.jpg'
        },
        {
          id: 3,
          title: 'Только свежие фрукты',
          text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее.',
          image: 'fruits.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.slides {
  margin-bottom: 120px;
}

.slide {
  height: 600px;
  position: relative;
  width: 100%;
  @include _768 {
    height: 500px;
  }
  @include _480 {
    height: 600px;
  }
  &__image {
    max-width: 1110px;
  }
  &__content {
    background-color: rgba(0, 0, 0, 0.8);
    padding: 50px;
    position: absolute;
    top: 50px; right: 40%; left: 50px;
    @include _979 {
      right: 35%;
    }
    @include _768 {
      padding: 50px 20px;
      top: 20px; right: 20px; left: 20px;
    }
  }
  &__title {
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    line-height: 40px;
    padding-bottom: 20px;
  }
  &__text {
    color: #fff;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 40px;
  }
}

.swiper-pagination {      // Пагинация слайдера
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  right: 0; left: 0; bottom: 0;
  z-index: 10;
}
.swiper-pagination::v-deep .swiper-pagination-bullet {
  border: 2px solid $gray;
  cursor: pointer;
  display: inline-block;
  height: 10px;
  width: 10px;
  margin: 24px 10px;
  transition: $transition;
}
.swiper-pagination::v-deep .swiper-pagination-bullet-active {
  background: $green;
  border: 2px solid $green;
  transform: scale(1.1);
}

.swiper-button-prev,      // Стрелки слайдера
.swiper-button-next {
  background-color: $gray;
  cursor: pointer;
  height: 32px;
  width: 32px;
  position: absolute;
  bottom: 13px;
  transition: background-color .2s linear;
  z-index: 10;
  &:hover {
    background-color: $green;
  }
  &:active {
    transform: scale(1.05);
  }
}
.swiper-button-next {
  mask: url('../../src/assets/main-page/icons/right.svg');
  right: 50px;
}
.swiper-button-prev {
  mask: url('../../src/assets/main-page/icons/left.svg');
  left: 50px;
}
</style>