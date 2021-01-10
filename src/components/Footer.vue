<template>
  <div class="background">
    <div class="container">
      <div class="footer">
        <div class="footer__columns">
          <div class="footer__column">
            <div class="footer__logo">
              <router-link class="footer__logo-text" to="/">Fresh</router-link>
              <p class="footer__logo-subtext">Доставка фруктов и овощей по Москве и МО</p>
            </div>
          </div>
          <div class="footer__column">
            <p class="footer__title">Категории</p>
            <ul>
              <li
                v-for="submenuLink in submenuLinks"
                :key="submenuLink.id"
                @click="filterProducts(submenuLink)"
              >
                <router-link class="footer__link" to="/catalog">{{ submenuLink.category }}</router-link>
              </li>
            </ul>
          </div>
          <div class="footer__column">
            <p class="footer__title">Информация</p>
            <router-link class="footer__link" to="/delivery_and_payment">Доставка и оплата</router-link>
            <router-link class="footer__link" to="/promotions">Акции</router-link>
            <router-link class="footer__link" to="/reviews">Отзывы</router-link>
            <router-link class="footer__link" to="/news">Новости</router-link>
          </div>
          <div class="footer__column">
            <p class="footer__title">Контакты</p>
            <p class="footer__phone">8 (800) 000-00-00</p>
            <p class="footer__address">г. Москва, ул. Ленина</p>
            <p class="footer__mail">reakt11@mail.ru</p>
            <div class="footer__social-networks">
              <i class="icon fa fa-vk" aria-hidden="true"></i>
              <i class="icon fa fa-facebook" aria-hidden="true"></i>
              <i class="icon fa fa-twitter" aria-hidden="true"></i>
            </div>
          </div>        
        </div>
        <div class="footer__line"></div>
        <div class="footer__bottom-row">
          <div class="footer__cards">
            <i class="icon fa fa-cc-visa" aria-hidden="true"></i>
            <i class="icon fa fa-cc-paypal" aria-hidden="true"></i>
            <i class="icon fa fa-cc-mastercard" aria-hidden="true"></i>
          </div>
          <p class="footer__copyright">© Оформление сайта</p>
        </div>
      </div>   
    </div>
  </div> 
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      submenuLinks: [
        {
          id: 1,
          value: 'fruits',
          category: 'Фрукты'
        },
        {
          id: 2,
          value: 'vegetables',
          category: 'Овощи'
        },
        {
          id: 3,
          value: 'nuts',
          category: 'Орехи'
        },
        {
          id: 4,
          value: 'berries',
          category: 'Ягоды'
        },
        {
          id: 5,
          value: 'sets',
          category: 'Наборы'
        }
      ]
    }
  },
  methods: {
    filterProducts(submenuLink) {
      this.FILTER(submenuLink)
    },
    ...mapActions ([
      'FILTER'
    ])
  }
}
</script>

<style lang="scss" scoped>
.background {
  background-color: $dark_green;
}

.footer {
  padding-top: 60px;
  padding-bottom: 40px;
  &__columns {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__column {
    @include _768 {
      margin-bottom: 40px;
      width: 40%;
    }
    @include _600 {
      width: 47%;
    }
    @include _350 {
      width: 100%;
    }
  }
  &__title {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 30px;
    width: 100%;
    @include _768 {
      font-size: 22px;
    }
  }
  &__logo {
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &-text {
      color:  #fff;
      font-size: 34px;
      font-weight: 700;
      margin-bottom: 10px;
      @include _768 {
        font-size: 27px;
      }
      @include _480 {
        font-size: 24px;
      }
    }
    &-subtext {
      color:  #94cc9d;
      font-size: 12px;
      font-weight: 300;
      line-height: 16px;
      width: 180px;
      @include _480 {
        width: 160px;
      }
    }
  }
  &__link {
    display: block;
    color:  #94cc9d;
    margin-bottom: 10px;
    transition: $transition;
    @include _768 {
      font-size: 16px;
    }
    &:hover {
      color: #fff;
    }
  }
  &__phone {
    color: #fff;
    font-weight: 500;
    @include _768 {
      font-size: 16px;
    }
  }
  &__address,
  &__mail {
    color: #fff;
    margin-top: 13px;
    @include _768 {
      font-size: 16px;
    }
  }
  &__social-networks {
    .icon {
      color: #94cc9d;
      cursor: pointer;
      font-size: 20px;
      margin: 30px 15px 30px 0;
      transition: $transition;
      @include _768 {
        font-size: 22px;
      }
      &:hover {
        color: #fff;
      }
    }
  }
  &__line {
    background-color: #67916e;
    height: 1px;
    width: 100%;
    margin: 40px auto;
    @include _768 {
      margin-top: 0;
    }
  }
  &__bottom-row {
    display: flex;
    justify-content: space-between;
  }
  &__cards {
    .icon {
      color: #76b880;
      font-size: 18px;
      margin-right: 6px;
    }
  }
  &__copyright {
    color: #76b880;
  }
}
</style>