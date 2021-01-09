<template>
  <div>
    <Header />
    <div class="container">
      <div class="promotions">
        <h2 class="promotions__title title">Акции</h2>
        <div class="promotions__items">
          <div
            class="promotions__item item"
            v-for="promotion in promotions"
            :key="promotion.id"
          >
            <img
              class="item__image"
              :src="require('../assets/promotions/' + promotion.image)"
              alt="Картинка акции"
            >
            <div class="item__content">
              <p class="item__title">{{ promotion.title }}</p>
              <p class="item__text">{{ promotion.text }}</p>
              <div class="item__end-time end-time">
                <p class="end-time__text">{{ promotion.endTimeText }}</p>
                <p class="end-time__number">{{ days }}</p><span>:</span>
                <p class="end-time__number">{{ hours }}</p><span>:</span>
                <p class="end-time__number">{{ minutes }}</p><span>:</span>
                <p class="end-time__number">{{ seconds }}</p>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      seconds: 10,
      minutes: 1,
      hours: 1,
      days: 1,
      promotions: [
        {
          id: 1,
          image: 'citrus.jpg',
          title: 'Скидки на цитрусовые',
          text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста.',
          endTimeText: 'До конца акции:',
        }
      ]
    }
  },
  mounted() {
    this.startTimer()
  },
  methods: {
    startTimer() {
      setInterval(() => {
        this.seconds--;
      }, 1000)
    }
  },
  watch: {
    seconds() {
      if (this.seconds < 0) {
        this.seconds += 60;
        if (this.days == 0 && this.hours == 0 && this.minutes == 0) {
          this.seconds = 0;
        }
      }
      if (this.seconds == 59) {
        this.minutes--;
      }
    },
    minutes() {
      if (this.minutes < 0) {
        this.minutes += 60;
        if (this.days == 0 && this.hours == 0) {
          this.minutes = 0;
        }
      }
      if (this.minutes == 59) {
        this.hours--;
      }
    },
    hours() {
      if (this.hours < 0) {
        this.hours += 24;
        if (this.days == 0) {
          this.hours = 0;
        }
      }
      if (this.hours == 23) {
        this.days--;
      }
    },
    days() {
      if (this.days < 0) {
        this.days = 0;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.promotions {
  &__title {}
  &__items {}
  &__item {
    height: 290px;
    margin-bottom: 120px;
    overflow: hidden;
    position: relative;
    width: 100%;
    @include _768 {
      margin-bottom: 80px;
    }
    @include _480 {
      height: 300px;
    }
  }
}

.item {
  &__image {
    width: 100%;
    @include _768 {
      width: 170%;
    }
  }
  &__content {
    background-color: rgba(0, 0, 0, 0.8);
    padding: 35px 25px;
    position: absolute;
    top: 30px; right: 45%; left: 30px; bottom: 30px;
    @include _768 {
      right: 30px;
    }
    @include _480 {
      top: 0; right: 0; left: 0; bottom: 0;
    }
  }
  &__title {
    color: #fff;
    font-size: 22px;
    font-weight: 400;
    line-height: 30px;
    padding-bottom: 15px;
  }
  &__text {
    color: #bababa;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 25px;
  }
  &__end-time {
    display: flex;
    flex-wrap: wrap;
  }
}

.end-time {
  &__text {
    color: #fff;
    font-size: 14px;
    line-height: 21px;
    margin-right: 15px;
    margin-bottom: 5px;
    @include _480 {
      width: 100%;
    }
  }
  &__number {
    color: $green;
    font-size: 20px;
    font-weight: 600;
    height: 20px;
    line-height: 20px;
    text-align: center;
  }
  span {
    color: #fff;
    font-size: 18px;
    font-weight: 300;
    line-height:20px;
    margin: 0 6px;
    height: 20px;
  }
}
</style>