<template>
  <div class="header">
    <div class="header__background">
      <div class="container">
        <div class="header__top-row">
          <div class="top-row__logo">
            <router-link class="top-row__logo-text" to="/">Fresh</router-link>
            <p class="top-row__logo-subtext">Доставка фруктов и овощей по Москве и МО</p>
          </div>
          <div class="top-row__phone">8 (800) 000-00-00</div>
          <router-link class="top-row__cart cart" to="/cart">
            <p class="cart__total-price">{{ totalPrice }}р</p>
            <i class="cart__icon"></i>
            <div class="cart__count-products" v-if="$store.state.cart.length">{{ $store.state.cart.length }}</div>
            <transition name="cart-dropdown">
              <div class="cart__dropdown" v-if="$store.state.cartAddProduct">Товар добавлен в корзину</div>
              <div class="cart__dropdown" v-if="$store.state.cartAddedProduct">Товар уже в корзине</div>
            </transition>
          </router-link>
          <i
            class="top-row__menu-icon fa fa-bars"
            aria-hidden="true"
            @click="changeVisibleMenu()"
            v-if="openMenu"
          ></i>
          <i 
            class="top-row__active-menu-icon fa fa-times"
            aria-hidden="true"
            @click="changeVisibleMenu()"
            v-if="closeMenu"
          ></i>
        </div>
        <div class="header__bottom-row">
          <ul :class="{'show_menu' : showMenu}" class="bottom-row__menu">
            <li>
              <router-link class="bottom-row__menu-link" to="/" exact>Главная</router-link>
            </li>
            <li class="bottom-row__menu-catalog-wrapper">
              <router-link
                :class="{'active_submenu' : showSubmenu}"
                class="bottom-row__menu-link bottom-row__menu-catalog-link"
                to="/catalog"
              >
                Каталог товаров
                <i class="icon fa fa-angle-down" aria-hidden="true"></i>
                <ul :class="{'show_submenu' : showSubmenu}" class="bottom-row__submenu">
                  <li
                    v-for="submenuLink in submenuLinks"
                    :key="submenuLink.id"
                    @click="filterProducts(submenuLink), showMenu = false, showSubmenu = false"
                  >
                    <router-link class="bottom-row__submenu-link" to="/catalog">{{ submenuLink.category }}</router-link>
                  </li>
                </ul>
              </router-link>
              <div
                class="bottom-row__menu-catalog-button"
                :class="{'active_submenu' : showSubmenu}"
                @click="changeVisibleSubmenu()"
              >
                <i
                  class="icon fa fa-angle-down"
                  aria-hidden="true"
                  :class="{'active_submenu-icon' : showSubmenu}"
                ></i>
              </div>
            </li>
            <li><router-link class="bottom-row__menu-link" to="/delivery_and_payment">Доставка и оплата</router-link></li>
            <li><router-link class="bottom-row__menu-link" to="/promotions">Акции</router-link></li>
            <li><router-link class="bottom-row__menu-link" to="/news">Новости</router-link></li>
            <li><router-link class="bottom-row__menu-link" to="/contacts">Контакты</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      showMenu: false,
      openMenu: true,
      closeMenu: false,
      showSubmenu: false,
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
    changeVisibleMenu() {
      this.showMenu = !this.showMenu;
      this.openMenu = !this.openMenu;
      this.closeMenu = !this.closeMenu;
      this.showSubmenu = false;
    },
    changeVisibleSubmenu() {
      this.showSubmenu = !this.showSubmenu;
    },
    filterProducts(submenuLink) {
      this.FILTER(submenuLink)
    },
    ...mapActions ([
      'FILTER'
    ])
  },
  computed: {
    ...mapGetters ([
      'totalPrice'
    ])
  }
}
</script>

<style lang="scss" scoped>
.router-link-active {     // Выделение активной ссылки
  background-color: #f5f5f5;
  color: $green;
}

.header {
  height: 123px;
  margin-bottom: 70px;
  @include _979 {
    height: 70px;
  }
  @include _768 {
    margin-bottom: 50px;
  }
  &__background {
    background-color: #fff;
    border-bottom: 1px solid $light_gray;
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 1000;
  }
  &__top-row,
  &__bottom-row {
    align-items: center;
    display: flex;
  }
}

.top-row {
  &__logo {
    align-items: center;
    display: flex;
    &-text {
      background-color: #fff;
      color: $green;
      font-size: 34px;
      font-weight: 700;
      margin-right: 20px;
      @include _768 {
        font-size: 27px;
        margin-right: 0;
      }
      @include _480 {
        font-size: 24px;
      }
    }
    &-subtext {
      color: $gray;
      font-size: 12px;
      font-weight: 300;
      line-height: 16px;
      width: 180px;
      @include _768 {
        display: none;
      }
    }
  }
  &__phone {
    font-size: 17px;
    font-weight: 600;
    margin-left: auto;
    margin-right: 35px;
    @include _600 {
      display: none;
    }
  }
  &__cart {
    align-items: center;
    border-left: 1px solid $light_gray;
    display: flex;
    justify-content: space-between;
    height: 70px;
    width: 150px;
    position: relative;
    transition: $transition;
    @include _600 {
      border-left: none;
      margin-left: auto;
    }
    &:hover {
      background-color: #f5f5f5;
    }
    &:hover .cart__icon {
      background-color: $dark_pink;
    }
  }
  &__menu-icon,
  &__active-menu-icon {
    display: none;
    @include _979 {
      align-items: center;
      border-left: 1px solid $light_gray;
      cursor: pointer;
      display: flex;
      font-size: 24px;
      height: 70px;
      padding: 0 50px 0 35px;
      transition: $transition;
      width: 20px;
      &:hover {
        background-color: #f5f5f5;
      }
    }
    @include _480 {
      padding: 0 45px 0 30px;
    }
    &:hover {
      color: $green;
    }
  }
}

.cart {
  &__total-price {
    margin-left: auto;
    margin-right: 10px;
  }
  &__icon {
    background-color: $pink;
    display: block;
    height: 35px;
    margin-right: 35px;
    mask: url('../assets/header/basket.svg');
    transition: $transition;
    width: 35px;
  }
  &__count-products {
    background-color: $green;
    border-radius: 50%;
    color: #fff;
    font-size: 12px;
    line-height: 25px;
    height: 25px;
    width: 25px;
    position: absolute;
    top: 10px; right: 20px;
    text-align: center;
  }
  &__dropdown {
    background-color: #fff;
    border:1px solid $green;
    padding: 15px;
    position: absolute;
    right: 0; left: -75%; bottom: -72px;
    text-align: center;
    @include _768 {
      right: -70px; left: -70px;
    }
    @include _480 {
      right: -60px; left: -60px;
    }
    &:hover {
      background-color:#f5f5f5;
    }
    &:hover::after {
      border-bottom-color: #f5f5f5;
    }
    &::before,      // Треугольник
    &::after {
      content:"";
      border-bottom:20px solid #fff;
      border-left:20px solid transparent;
      border-right:20px solid transparent;
      position:absolute;
      top: -19px; left: 71.4%;
      margin-left: -20px;
      @include _768 {
        left: 50%;
      }
    }
    &::before {     // Рамка треугольника
      border-bottom-color: $green;
      top: -20px;
    }
  }
}

.bottom-row {
  &__menu {
    background-color: #fff;
    border-top: 1px solid $light_gray;
    display: flex;
    transition: all .5s ease-out;
    width: 100%;
    @include _979 {
      border-left: 1px solid $light_gray;
      flex-direction: column;
      position: absolute;
      top: 70px; right: -251px;
      width: 251px;
    }
    @include _480 {
      border: none;
      border-top: 1px solid $light_gray;
      right: -480px;
      width: 100%;
    }
    &-link {
      cursor: pointer;
      display: block;
      padding: 15px 25px;
      transition: $transition;
      @include _979 {
        border-bottom: 1px solid $light_gray;
        &:hover {
          color: $green;
        }
      }
      &:hover {
        color: $green;
        background-color: #f5f5f5;
      }
    }
    &-catalog {
      &-wrapper {
        align-items: center;
        display: flex;
      }
      &-link {
        display: flex;
        position: relative;
        width: 100%;
        &:hover .icon {
          transform: rotate(180deg);
          @include _979 {
            transform: none;
          }
        }
        &:hover .bottom-row__submenu {      // Появление подменю при наведении
          top: 51px;
          @include _979 {
            top: -1px;
          }
        }
        &:hover .bottom-row__submenu-link {     // Появление подменю при наведении
          max-height: 53px;
          padding: 15px 25px;
        }
        .icon {
          color: $green;
          font-size: 18px;
          margin-left: 7px;
          transition: transform .5s linear;
          @include _979 {
            display: none;
          }
        }
      }
      &-button {
        display: none;
        @include _979 {
          cursor: pointer;
          background-color: #fff;
          border-left: 1px solid $light_gray;
          display: block;
          padding: 14px;
          position: absolute;
          top: 52px; right: 0; 
          &:hover {
            background-color: #f5f5f5;
          }
          &:hover .icon { 
            color: $green;
          }
        }
        .icon {
          display: none;
          @include _979 {
            display: block;
            font-size: 23px;
            transition: color .2s linear,
                        transform .5s linear;
          }
        }
      }
    }
  }
  &__submenu {
    border: 1px solid $light_gray;
    border-bottom: none;
    position: absolute;
    top: 0; right: 0; left: 0;
    transition: all .5s ease-out;
    z-index: -1000;
    @include _979 {
      top: -1px; left: auto;
      width: 228px;
    }
    @include _480 {
      border: none;
      border-top: 1px solid $light_gray;
      top: 50px; right: -480px;
      width: 100%;
      z-index: 1000;
    }
    &-link {
      color:  #292929;
      background-color:#f5f5f5;
      border-bottom: 1px solid $light_gray;
      display: block;
      max-height: 0;
      padding: 0 25px;
      transition: color .2s linear,
                  background-color .2s linear,
                  max-height .5s linear,
                  padding .5s linear;
      @include _979 {
        max-height: 70px;
        padding: 15px 25px;
      }
      &:hover {
        color: $green;
        background-color: #ececec;
      }
    }
  }
}

.show_menu {      // Показывет меню по клику
  right: 0;
}

.show_submenu {     // Показывает подменю по клику
  @include _979 {
    right: 250px;
  }
  @include _480 {
    right: 0;
  }
}

.active_submenu, 
.active_submenu-icon {
  color: $green;
  background-color: #f5f5f5;
}

.active_submenu-icon {
  transform: rotate(90deg);
}

.cart-dropdown-enter-active,
.cart-dropdown-leave-active {
  transition: opacity .5s;
}
.cart-dropdown-enter,
.cart-dropdown-leave-to  {
  opacity: 0;
}
</style>