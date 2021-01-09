import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    checkedType: 'allTypes',    
    checkedCategories: ['allCategories'],
    sortProducts: 'default',
    cartAddProduct: false,
    cartAddedProduct: false,
    cart: [],
    products: [
      {
        id: 1,
        img: require('../assets/catalog/potato.jpg'),
        name: 'Картошка',
        price: 50,
        quantity: 1,
        category: 'vegetables',
        popularity: true,
        discount: false,
        new: false
      },
      {
        id: 2,
        img: require('../assets/catalog/apple.jpg'),
        name: 'Яблоко',
        price: 40,
        quantity: 1,
        category: 'fruits',
        popularity: true,
        discount: false,
        new: false
      },
      {
        id: 3,
        img: require('../assets/catalog/almond.jpg'),
        name: 'Миндаль',
        price: 68,
        quantity: 100,
        category: 'nuts',
        popularity: false,
        discount: false,
        new: false
      },
      { 
        id: 4,
        img: require('../assets/catalog/banana.jpg'),
        name: 'Банан',
        price: 90,
        quantity: 1,
        category: 'fruits',
        popularity: true,
        discount: false,
        new: false
      },
      {
        id: 5,
        img: require('../assets/catalog/kiwi.jpg'),
        name: 'Киви',
        price: 180,
        quantity: 1,
        category: 'fruits',
        popularity: false,
        discount: false,
        new: true
      },
      {
        id: 6,
        img: require('../assets/catalog/blueberry.jpg'),
        name: 'Черника',
        price: 20,
        quantity: 100,
        category: 'berries',
        popularity: false,
        discount: false,
        new: false
      },
      {
        id: 7,
        img: require('../assets/catalog/tomato.jpg'),
        name: 'Помидор',
        price: 70,
        quantity: 1,
        category: 'vegetables',
        popularity: true,
        discount: false,
        new: false
      },
      {
        id: 8,
        img: require('../assets/catalog/cabbage.jpg'),
        name: 'Капуста',
        price: 10,
        quantity: 1,
        category: 'vegetables',
        popularity: true,
        discount: false,
        new: false
      },
      {
        id: 9,
        img: require('../assets/catalog/peach.jpg'),
        name: 'Персик',
        price: 85,
        quantity: 1,
        category: 'fruits',
        popularity: false,
        discount: false,
        new: false
      },
      {
        id: 10,
        img: require('../assets/catalog/pineapple.jpg'),
        name: 'Ананас',
        price: 120,
        quantity: 1,
        category: 'fruits',
        popularity: false,
        discount: 15,
        new: false
      },
      {
        id: 11,
        img: require('../assets/catalog/peanut.jpg'),
        name: 'Арахис',
        price: 12,
        quantity: 100,
        category: 'nuts',
        popularity: true,
        discount: false,
        new: false
      },
      {
        id: 12,
        img: require('../assets/catalog/strawberry.jpg'),
        name: 'Клубника',
        price: 71,
        quantity: 100,
        category: 'berries',
        popularity: false,
        discount: 20,
        new: false
      },
      {
        id: 13,
        img: require('../assets/catalog/cucumber.jpg'),
        name: 'Огурец',
        price: 35,
        quantity: 1,
        category: 'vegetables',
        popularity: false,
        discount: false,
        new: false
      },
      {
        id: 14,
        img: require('../assets/catalog/cashew.jpg'),
        name: 'Кешью',
        price: 62,
        quantity: 100,
        category: 'nuts',
        popularity: false,
        discount: false,
        new: true
      },
      {
        id: 15,
        img: require('../assets/catalog/hazelnut.jpg'),
        name: 'Фундук',
        price: 49,
        quantity: 100,
        category: 'nuts',
        popularity: false,
        discount: false,
        new: true
      },
      {
        id: 16,
        img: require('../assets/catalog/pear.jpg'),
        name: 'Груша',
        price: 245,
        quantity: 1,
        category: 'fruits',
        popularity: false,
        discount: false,
        new: false
      },
      {
        id: 17,
        img: require('../assets/catalog/blackberry.jpg'),
        name: 'Ежевика',
        price: 65,
        quantity: 100,
        category: 'berries',
        popularity: false,
        discount: 15,
        new: false
      },
      {
        id: 18,
        img: require('../assets/catalog/pistachios.jpg'),
        name: 'Фисташки',
        price: 80,
        quantity: 100,
        category: 'nuts',
        popularity: false,
        discount: 10,
        new: false
      },
      {
        id: 19,
        img: require('../assets/catalog/carrot.jpg'),
        name: 'Морковь',
        price: 10,
        quantity: 1,
        category: 'vegetables',
        popularity: true,
        discount: false,
        new: false
      },
      {
        id: 20,
        img: require('../assets/catalog/avocado.jpg'),
        name: 'Авокадо',
        price: 300,
        quantity: 1,
        category: 'fruits',
        popularity: false,
        discount: false,
        new: true
      },
      {
        id: 21,
        img: require('../assets/catalog/beet.jpg'),
        name: 'Свекла',
        price: 30,
        quantity: 1,
        category: 'vegetables',
        popularity: false,
        discount: false,
        new: false
      },
      {
        id: 22,
        img: require('../assets/catalog/cherry.jpg'),
        name: 'Вишня',
        price: 85,
        quantity: 100,
        category: 'berries',
        popularity: true,
        discount: 15,
        new: false
      },
      {
        id: 23,
        img: require('../assets/catalog/set-2.jpg'),
        name: 'Набор',
        price: 1200,
        quantity: 1,
        category: 'sets',
        popularity: true,
        discount: 10,
        new: false
      },
      {
        id: 24,
        img: require('../assets/catalog/garnet.jpg'),
        name: 'Гранат',
        price: 50,
        quantity: 1,
        category: 'fruits',
        popularity: true,
        discount: false,
        new: false
      },
      {
        id: 25,
        img: require('../assets/catalog/grapes.jpg'),
        name: 'Виноград',
        price: 7,
        quantity: 100,
        category: 'berries',
        popularity: false,
        discount: false,
        new: false
      },
      {
        id: 26,
        img: require('../assets/catalog/lemon.jpg'),
        name: 'Лимон',
        price: 120,
        quantity: 1,
        category: 'fruits',
        popularity: false,
        discount: 10,
        new: false
      },
      {
        id: 27,
        img: require('../assets/catalog/set-3.jpg'),
        name: 'Набор',
        price: 1100,
        quantity: 1,
        category: 'sets',
        popularity: false,
        discount: false,
        new: false
      },
      {
        id: 28,
        img: require('../assets/catalog/lime.jpg'),
        name: 'Лайм',
        price: 560,
        quantity: 1,
        category: 'fruits',
        popularity: false,
        discount: 15,
        new: true
      },
      {
        id: 29,
        img: require('../assets/catalog/onion.jpg'),
        name: 'Лук',
        price: 45,
        quantity: 1,
        category: 'vegetables',
        popularity: false,
        discount: 25,
        new: false
      },
      {
        id: 30,
        img: require('../assets/catalog/orange.jpg'),
        name: 'Апельсин',
        price: 100,
        quantity: 1,
        category: 'fruits',
        popularity: false,
        discount: 10,
        new: false
      },
      {
        id: 31,
        img: require('../assets/catalog/set-1.jpg'),
        name: 'Набор',
        price: 1800,
        quantity: 1,
        category: 'sets',
        popularity: false,
        discount: false,
        new: true
      },
      {
        id: 32,
        img: require('../assets/catalog/grapefruit.jpg'),
        name: 'Грейпфрут',
        price: 155,
        quantity: 1,
        category: 'fruits',
        popularity: false,
        discount: 10,
        new: true
      },
      {
        id: 33,
        img: require('../assets/catalog/plum.jpg'),
        name: 'Слива',
        price: 160,
        quantity: 1,
        category: 'fruits',
        popularity: false,
        discount: false,
        new: false
      },
      {
        id: 34,
        img: require('../assets/catalog/pumpkin.jpg'),
        name: 'Тыква',
        price: 40,
        quantity: 1,
        category: 'vegetables',
        popularity: false,
        discount: false,
        new: false
      },
      {
        id: 35,
        img: require('../assets/catalog/raspberry.jpg'),
        name: 'Малина',
        price: 95,
        quantity: 100,
        category: 'berries',
        popularity: true,
        discount: false,
        new: false
      },
      {
        id: 36,
        img: require('../assets/catalog/persimmon.jpg'),
        name: 'Хурма',
        price: 130,
        quantity: 1,
        category: 'fruits',
        popularity: false,
        discount: false,
        new: false
      },
      {
        id: 37,
        img: require('../assets/catalog/tangerine.jpg'),
        name: 'Мандарин',
        price: 145,
        quantity: 1,
        category: 'fruits',
        popularity: false,
        discount: 5,
        new: false
      },
      {
        id: 38,
        img: require('../assets/catalog/spinach.jpg'),
        name: 'Шпинат',
        price: 525,
        quantity: 1,
        category: 'vegetables',
        popularity: false,
        discount: false,
        new: false
      },
      {
        id: 39,
        img: require('../assets/catalog/melon.jpg'),
        name: 'Дыня',
        price: 70,
        quantity: 1,
        category: 'fruits',
        popularity: false,
        discount: false,
        new: false
      },
      {
        id: 40,
        img: require('../assets/catalog/pepper.jpg'),
        name: 'Перец',
        price: 70,
        quantity: 1,
        category: 'vegetables',
        popularity: false,
        discount: false,
        new: false
      },
      {
        id: 41,
        img: require('../assets/catalog/watermelon.jpg'),
        name: 'Арбуз',
        price: 35,
        quantity: 1,
        category: 'fruits',
        popularity: false,
        discount: false,
        new: false
      },
      {
        id: 42,
        img: require('../assets/catalog/nectarine.jpg'),
        name: 'Нектарин',
        price: 145,
        quantity: 1,
        category: 'fruits',
        popularity: false,
        discount: false,
        new: false
      },
      {
        id: 43,
        img: require('../assets/catalog/corn.jpg'),
        name: 'Кукуруза',
        price: 95,
        quantity: 1,
        category: 'vegetables',
        popularity: false,
        discount: false,
        new: false
      },
      {
        id: 44,
        img: require('../assets/catalog/quince.jpg'),
        name: 'Айва',
        price: 230,
        quantity: 1,
        category: 'fruits',
        popularity: false,
        discount: false,
        new: false
      },
      {
        id: 45,
        img: require('../assets/catalog/mango.jpg'),
        name: 'Манго',
        price: 380,
        quantity: 1,
        category: 'fruits',
        popularity: false,
        discount: false,
        new: false
      },
      {
        id: 46,
        img: require('../assets/catalog/apircot.jpg'),
        name: 'Абрикос',
        price: 280,
        quantity: 1,
        category: 'fruits',
        popularity: false,
        discount: false,
        new: false
      },
      {
        id: 47,
        img: require('../assets/catalog/parsley.jpg'),
        name: 'Петрушка',
        price: 485,
        quantity: 1,
        category: 'vegetables',
        popularity: false,
        discount: false,
        new: false
      },
      {
        id: 48,
        img: require('../assets/catalog/cranberry.jpg'),
        name: 'Клюква',
        price: 45,
        quantity: 100,
        category: 'berries',
        popularity: false,
        discount: false,
        new: true
      },
      {
        id: 49,
        img: require('../assets/catalog/celery.jpg'),
        name: 'Сельдерей',
        price: 75,
        quantity: 1,
        category: 'vegetables',
        popularity: false,
        discount: false,
        new: false
      },
      {
        id: 50,
        img: require('../assets/catalog/garlic.jpg'),
        name: 'Чеснок',
        price: 50,
        quantity: 1,
        category: 'vegetables',
        popularity: false,
        discount: false,
        new: false
      },
      {
        id: 51,
        img: require('../assets/catalog/peas.jpg'),
        name: 'Горох',
        price: 210,
        quantity: 1,
        category: 'vegetables',
        popularity: false,
        discount: false,
        new: true
      }
    ]
  },
  mutations: {
    DELETE_ALL_CATEGORY: (state) => {
      let index = state.checkedCategories.indexOf('allCategories');
      if (index > -1) {
        state.checkedCategories.splice(index, 1);
      }
    },
    ADD_ALL_CATEGORY: (state) => {
      state.checkedCategories.length = 0;
      state.checkedCategories.push('allCategories');
    },
    ADD_TO_CART: (state, product) => {
      let addedProduct = false;
      state.cart.map(item => {
        if (item.id == product.id) {
          addedProduct = true;
          state.cartAddedProduct = true;
          setTimeout(function() {
            state.cartAddedProduct = false;
          }, 2000)
        }
      })
      if (!addedProduct) {
        state.cart.push(product);
        state.cartAddProduct = true;
        setTimeout(function() {
          state.cartAddProduct = false;
        }, 2000)
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
    INCREMENT: (state, index) => {
      if (state.cart[index].category == 'nuts' || state.cart[index].category == 'berries') {
        state.cart[index].quantity += 100;
      }
      else state.cart[index].quantity += 1;
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].category == 'nuts' || state.cart[index].category == 'berries') {
        state.cart[index].quantity -= 100;
        if (state.cart[index].quantity == 0) {
          state.cart[index].quantity = 100;
          state.cart.splice(index, 1);
        }
      }
      else {
        state.cart[index].quantity -= 1
        if (state.cart[index].quantity == 0) {
          state.cart[index].quantity = 1;
          state.cart.splice(index, 1);
        }
      }
    },
    FILTER_CATALOG: (state, submenuLink) => {
      let index = state.checkedCategories.indexOf('allCategories');
      if (index > -1) {
        state.checkedCategories.splice(index, 1);
      }
      state.checkedCategories.push(submenuLink.value);
    }
  },
  actions: {
    ADD_ALL_CATEGORY({commit}) {
      commit('ADD_ALL_CATEGORY');
    },
    DELETE_ALL_CATEGORY({commit}) {
      commit('DELETE_ALL_CATEGORY');
    },
    ADD_TO_CART({commit}, product) {
      commit('ADD_TO_CART', product);
    },
    DELETE_FROM_CART({commit}, index) {
      commit('REMOVE_FROM_CART', index);
    },
    INCREMENT_CART_ITEM({commit}, index) {
      commit('INCREMENT', index);
    },
    DECREMENT_CART_ITEM({commit}, index) {
      commit('DECREMENT', index);
    },
    FILTER({commit}, submenuLink) {
      commit('FILTER_CATALOG', submenuLink)
    }
  },
  getters: {
    cart: ({ cart }) => cart,
    products: ({ products }) => products,
    checkedCategories: ({ checkedCategories }) => checkedCategories,
    filterCatalogProducts: ({ products, checkedCategories, checkedType, sortProducts }) => {
      let result = [];
      products.map(product => {

        //  Фильтрация продуктов
        if (checkedCategories.indexOf('allCategories') != -1 &&
           (product.popularity && checkedType == 'popularity' ||
            product.discount && checkedType == 'discount' ||
            product.new && checkedType == 'new' )) {
              result.push(product);
        }
        if (checkedCategories.indexOf(product.category) != -1 &&
           (product.popularity && checkedType == 'popularity' ||
            product.discount && checkedType == 'discount' ||
            product.new && checkedType == 'new' )) {
              result.push(product);
        }
        if (checkedCategories.indexOf('allCategories') != -1 && checkedType == 'allTypes') {
          result = products;
        }
        if (checkedCategories.indexOf(product.category) != -1 && checkedType == 'allTypes') {
          result.push(product);
        }

        // Сортировка продуктов
        if (sortProducts == 'default') {
          result.sort((a,b) => a.id - b.id);
        }
        if (sortProducts == 'increasePrice') {
          result.sort((a,b) => a.price - b.price);
        }
        if (sortProducts == 'decreasePrice') {
          result.sort((a,b) => b.price - a.price);
        }
        if (sortProducts == 'discount') {
          result.sort((a,b) => a.id - b.id).sort((a,b) => b.discount - a.discount);
        }
        if (sortProducts == 'alphabetically') {
          result.sort((a,b) => a.name > b.name ? 1 : -1);
        }
        if (sortProducts == 'reverse-alphabetically') {
          result.sort((a,b) => a.name < b.name ? 1 : -1);
        }
      })
      return result;
    },
    totalPrice: ({ cart }) => {
      return cart.reduce((total, item) => {
        if (item.category == 'nuts' || item.category == 'berries') {
          total += item.price * item.quantity/100;
        }
        else {
          total += item.price * item.quantity;
        }
        return Math.round(total);
      }, 0)
    }
  }
})

export default store