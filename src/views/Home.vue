<template>
  <div>
    <Header />
    <SliderMainPage />
    <div class="container">
      <div class="advantages">
        <h2 class="advantages__title title">Почему выбирают нас?</h2>
        <div class="advantages__items">
          <div
            class="advantages__item item"
            v-for="advantage in advantages"
            :key="advantage.id"
          >
            <img
              class="item__icon"
              :src="require('../assets/advantages/' + advantage.icon)"
              alt="Иконка"
            >
            <p class="item__title subtitle">{{ advantage.title }}</p>
            <p class="item__text text">{{ advantage.text }}</p>
          </div>
        </div>
      </div>
      <div class="about-us">
        <img
          class="about-us__image"
          src="../assets/about-us/image-1.jpg"
          alt="Картинка"
        >
        <p class="about-us__text text">
          Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать
          несколько абзацев более менее осмысленного текста рыбы на русском языке,
          а начинающему оратору отточить навык публичных выступлений в домашних условиях.
          При создании генератора мы использовали небезизвестный универсальный код речей.
          Текст генерируется абзацами случайным образом от двух до десяти предложений в
          абзаце.
        </p>
        <p class="about-us__text text">
          Рыбным текстом называется текст, служащий для временного наполнения макета в
          публикациях или производстве веб-сайтов, пока финальный текст еще не создан.
          Рыбный текст также известен как текст-заполнитель или же текст-наполнитель.
          Иногда текст-«рыба» также используется композиторами при написании музыки.
        </p>
        <img
          class="about-us__image"
          src="../assets/about-us/image-2.jpg"
          alt="Картинка"
        >
      </div>
    </div>
    <SliderProducts />
    <div class="container">
      <div class="news">
        <h2 class="news__title title">Новости</h2>
        <div class="news__items">
          <div
            class="news__item item"
            v-for="news_item in news"
            :key="news_item.id"
          >
            <div class="item__image-wrapper">
              <img
                class="item__image"
                :src="require('../assets/news/' + news_item.image)"
                alt="Картинка новости"
              >
            </div>
            <div class="item__text-wrapper">
              <p class="item__title subtitle">{{ news_item.title }}</p>
              <p class="item__text text">{{ news_item.text }}</p>
              <div class="item__bottom-row">
                <p class="item__date">{{ news_item.date }}</p>
                <router-link class="item__link" to="/news">Подробнее</router-link>
              </div>
            </div>
          </div>
          <router-link class="news__link solid-button" to="/news">Читать все новости</router-link>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header'
import SliderMainPage from '../components/Slider-main-page'
import SliderProducts from '../components/Slider-products'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    SliderMainPage,
    SliderProducts,
    Footer
  },
  data () {
    return {
      advantages: [
        {
          id: 1,
          icon: 'truck.svg',
          title: 'Быстрая доставка',
          text: 'Рыбным текстом называется текст, служащий для временного наполнения макета'
        },
        {
          id: 2,
          icon: 'fruits.svg',
          title: 'Только свежие продукты',
          text: 'Рыбным текстом называется текст, служащий для временного'
        },
        {
          id: 3,
          icon: 'money.svg',
          title: 'Низкие цены',
          text: 'Рыбным текстом называется текст, служащий для временного наполнения'
        }
      ],
      news: [
        {
          id: 1,
          image: 'apples.jpg',
          title: 'Заголовок 1',
          text: 'Рыбным текстом называется текст, служащий для временного',
          date: '08.10.20'
        },
        {
          id: 2,
          image: 'building.jpg',
          title: 'Заголовок 2',
          text: 'Рыбным текстом называется текст, служащий для временного',
          date: '22.10.20'
        },
        {
          id: 3,
          image: 'nuts.jpg',
          title: 'Заголовок 3',
          text: 'Рыбным текстом называется текст, служащий для временного',
          date: '04.11.20'
        },
        {
          id: 4,
          image: 'citrus.jpg',
          title: 'Заголовок 4',
          text: 'Рыбным текстом называется текст, служащий для временного наполнения',
          date: '29.11.20'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.advantages {
  margin-bottom: 80px;
  &__title {}
  &__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__item {
    box-shadow: 0 0 10px 0 $light_gray;
    padding: 30px 20px;
    text-align: center;
    width: 32%;
    @include _768 {
      margin-bottom: 15px;
      width: 100%;
    }
  }
  .item {
    &__icon {
      color: $green;
      margin-bottom: 15px;
      width: 60px;
      @include _768 {
        margin-bottom: 10px;
        width: 50px;
      }
    }
    &__title {
      margin-bottom: 10px;
    }
  }
}

.about-us {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 120px;
  &__image {
    width: 50%;
    @include _768 {
      display: none;
    }
  }
  &__text {
    margin: auto 0;
    padding: 0 60px;
    width: 50%;
    @include _979 {
      padding: 30px;
    }
    @include _768 {
      padding: 0;
      width: 100%;
      &:nth-child(2) {
        margin-bottom: 30px;
      }
    }
  }
}

.news {
  margin-bottom: 120px;
  @include _768 {
    margin-bottom: 80px;
  }
  &__title {}
  &__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__item {
    margin-left: auto;
    width: 23.5%;
    @include _979 {
      width: 32%;
    }
    @include _768 {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    @include _480 {
      flex-direction: column;
    }
    &:first-child {
      margin: 0;
    }
    &:nth-child(4) {
      @include _979 {
        display: none;
      }
    }
  }
  &__link {
    margin: 0 auto;
    margin-top: 50px;
    @include _768 {
      margin-top: 25px;
    }
  }
  .item {
    &__image-wrapper {
      margin-bottom: 15px;
      @include _768 {
        width: 35%;
      }
      @include _600 {
        width: 45%;
      }
      @include _480 {
        margin-bottom: 10px;
        width: 100%;
      }
    }
    &__image {
      width: 100%;
    }
    &__text-wrapper {
      @include _768 {
        margin: 5px 0 auto 20px;
        width: 65%;
      }
      @include _600 {
        width: 55%;
      }
      @include _480 {
        margin-left: 0;
        margin-bottom: 40px;
        width: 100%;
      }
    }
    &__title,
    &__text {
      margin-bottom: 8px;
    }
    &__bottom-row {
      display: flex;
      justify-content: space-between;
    }
    &__link {
      color: $green;
      text-decoration: underline;
      transition: $transition;
      &:hover {
        color: $dark_green;
      }
    }
    &__date {
      color: #bebebe;
    }
  }
}
</style>