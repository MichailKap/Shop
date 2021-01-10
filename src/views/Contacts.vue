<template>
  <div>
    <Header />
    <div class="container">
      <p class="title">Контакты</p>
      <div class="contacts">
        <div class="contacts__items">
          <div
            class="contacts__item item"
            v-for="contact in contacts"
            :key="contact.id"
          >
            <img :src="require('../assets/contacts/' + contact.image)" class="item__icon" alt="Иконка">
            <div class="item__text-block">
              <p class="item__first-text">{{ contact.firstText }}</p>
              <p class="item__second-text">{{ contact.secondText }}</p>
            </div>
          </div>
          <div class="contacts__social-networks social-networks">
            <p class="social-networks__text">Мы в социальных сетях</p>
            <i class="social-networks__icon fa fa-vk" aria-hidden="true"></i>
            <i class="social-networks__icon fa fa-facebook" aria-hidden="true"></i>
            <i class="social-networks__icon fa fa-twitter" aria-hidden="true"></i>
          </div>
        </div>
        <iframe class="contacts__map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d287626.6523488539!2d37.56877252868668!3d55.72230587935416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1599163242681!5m2!1sru!2sru" width="100%" height="100%"></iframe>
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
  },
  data() {
    return {
      contacts: [
        {
          id: 1,
          image: 'smartphone.svg',
          firstText: 'Телефон',
          secondText: '8 (800) 000-00-00'
        },
        {
          id: 2,
          image: 'placeholder.svg',
          firstText: 'Адрес',
          secondText: 'Город Москва, улица Мира'
        },
        {
          id: 3,
          image: 'mail.svg',
          firstText: 'E-mail',
          secondText: 'reakt11@mail.ru'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  align-items: center;
  display: flex;
  margin-bottom: 120px;
  @include _768 {
    flex-direction: column;
    margin-bottom: 80px;
  }
  &__map {
    height: 400px;
    width: 60%;
    @include _768 {
      width: 100%;
    }
  }
  &__items {
    width: 40%;
    @include _768 {
      width: 100%;
    }
  }
  &__item {
    display: flex;
    margin-bottom: 30px;
  }
  &__social-networks {}
}

.item {
  &__icon {
    margin-right: 15px;
    margin-bottom: auto;
    width: 30px;
  }
  &__text-block {}
  &__first-text {
    color: $gray;
    margin-bottom: 3px;
    @include _768 {
      font-size: 16px;
    }
  }
  &__second-text {
    font-size: 16px;
    font-weight: 600;
    @include _768 {
      font-size: 18px;
    }
  }
}

.social-networks {
  &__text {
    margin-bottom: 10px;
  }
  &__icon {
    color: $green;
    cursor: pointer;
    font-size: 20px;
    margin-right: 10px;
  }
}
</style>