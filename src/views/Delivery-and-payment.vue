<template>
  <div>
    <Header />
    <div class="container">
      <div class="delivery-and-payment">
        <p class="title">Доставка и оплата</p>
        <div class="delivery-and-payment__wrapper">
          <p class="delivery-and-payment__text">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать
            несколько абзацев более менее осмысленного текста рыбы на русском языке,
            а начинающему оратору отточить навык публичных выступлений в домашних условиях.
            При создании генератора мы использовали небезизвестный универсальный код речей.
          </p>
          <p class="delivery-and-payment__text">Минимальная сумма заказа — 300 рублей</p>
          <p class="delivery-and-payment__text">Стоимость доставки по Москве 200 рублей и 300 рублей по Подмосквью</p>
          <p class="delivery-and-payment__text">При заказе от 2500 рублей доставка 100 рублей!</p>
          <p class="delivery-and-payment__text">При заказе от 3000 рублей доставка бесплатно!</p>
          <div class="delivery-and-payment__wrapper-method">
            <ul class="delivery-and-payment__delivery-method">
              <li class="delivery-and-payment__title-method">Оплата курьерской доставкой:</li>
              <li class="delivery-and-payment__text-method">Онлайн</li>
              <li class="delivery-and-payment__text-method">Наличными</li>
            </ul>
            <ul class="delivery-and-payment__delivery-method">
              <li class="delivery-and-payment__title-method">Оплата при самовывозе:</li>
              <li class="delivery-and-payment__text-method">Онлайн</li>
              <li class="delivery-and-payment__text-method">Наличными</li>
              <li class="delivery-and-payment__text-method">Банковской картой</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.delivery-and-payment {
  &__wrapper {}
  &__text {
    margin-bottom: 10px;
    &:first-child,
    &:nth-child(5) {
      margin-bottom: 35px;
    }
  }
  &__wrapper-method {
    display: flex;
    justify-content: left;
    margin-bottom: 50px;
    @include _768 {
      flex-direction: column;
    }
  }
  &__text-method {
    margin-bottom: 5px;
  }
  &__title-method:first-child {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
    @include _768 {
      font-size: 18px;
    }
  }
  &__delivery-method {
    list-style: none;
    margin-right: 30px;
    width: 100%;
  }
}
</style>