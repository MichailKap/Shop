<template>
  <div>
    <Header />
    <div class="container">
      <div class="catalog">
        <p class="catalog__title title">Каталог</p>
        <div class="catalog__top-row">
          <div class="catalog__sort sort">
            <p class="sort__text">Сортировать по:</p>
            <select
              @change="resetCurrentPage()"
              class="sort__types"
              v-model="$store.state.sortProducts"
            >
              <option value="default">умолчанию</option>
              <option value="increasePrice">возрастанию цены</option>
              <option value="decreasePrice">убыванию цены</option>
              <option value="discount">скидке</option>
              <option value="alphabetically">названию (А-Я)</option>
              <option value="reverse-alphabetically">названию (Я-А)</option>
            </select>
          </div>
          <div class="catalog__per-page per-page">
            <p class="per-page__text">На странице:</p>
            <select @change="resetCurrentPage()" class="per-page__types" v-model="perPage">
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="48">48</option>
            </select>
          </div>
        </div>
        <div class="catalog__wrapper">
          <div class="catalog__filter filter">
            <ul class="filter__categories">
              <li>
                <input
                  type="checkbox"
                  id="fruits"
                  value="fruits"
                  @change="deleteAllCategory()"
                  v-model="$store.state.checkedCategories"
                >
                <label class="filter__category" for="fruits">Фрукты</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="vegetables"
                  value="vegetables"
                  @change="deleteAllCategory()"
                  v-model="$store.state.checkedCategories"
                >
                <label class="filter__category" for="vegetables">Овощи</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="nuts"
                  value="nuts"
                  @change="deleteAllCategory()"
                  v-model="$store.state.checkedCategories"
                >
                <label class="filter__category" for="nuts">Орехи</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="berries"
                  value="berries"
                  @change="deleteAllCategory()"
                  v-model="$store.state.checkedCategories"
                >
                <label class="filter__category" for="berries">Ягоды</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="sets"
                  value="sets"
                  @change="deleteAllCategory()"
                  v-model="$store.state.checkedCategories"
                >
                <label class="filter__category" for="sets">Наборы</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="allCategories"
                  value="allCategories"
                  @change="addAllCategory()"
                  v-model="$store.state.checkedCategories"
                >
                <label class="filter__category" for="allCategories">Все продукты</label>
              </li>
            </ul>
            <ul class="filter__types">
              <li>
                <input
                  type="radio"
                  id="popularity"
                  value="popularity"
                  @change="resetCurrentPage()"
                  v-model="$store.state.checkedType"
                >
                <label class="filter__type" for="popularity">Популярные</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="discount"
                  value="discount"
                  @change="resetCurrentPage()"
                  v-model="$store.state.checkedType"
                >
                <label class="filter__type" for="discount">Cо скидкой</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="new"
                  value="new"
                  @change="resetCurrentPage()"
                  v-model="$store.state.checkedType"
                >
                <label class="filter__type" for="new">Новинки</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="allTypes"
                  value="allTypes"
                  @change="resetCurrentPage()"
                  v-model="$store.state.checkedType"
                >
                <label class="filter__type" for="allTypes">Все типы</label>
              </li>
            </ul>
          </div>
          <div class="catalog__products-wrapper">
            <div class="catalog__products">
              <catalogItem
                v-for="product in products"
                :key="product.id"
                :product="product"
                @addToCart="addToCart(product)"
              />
            </div>
            <div class="pagination">
              <button
                @click="prevPage()"
                class="pagination__button-left"
                :class="{'disabled': currentPage == 0}"
              >
                <svg class="icon" viewBox="0 0 1000 1000">
                  <g transform="matrix(-1,0,0,1,1000,0)">
                    <path d="M690.8,803l-28.5-28.9L933,500L662.3,225.9l28.5-28.9L990,500L690.8,803z"/>
                    <path d="M942,520.4H10v-40.8h932V520.4z"/>
                  </g>
                </svg>
              </button>
              <ul class="pagination__numbers">
                <li
                  v-for="page in pages"
                  :key="page"
                  :class="{'active': currentPage == page}"
                  class="pagination__number"
                  @click="currentPage = page"
                >
                  {{ page + 1 }}
                </li>
              </ul>
              <button
                @click="nextPage()"
                class="pagination__button-right"
                :class="{'disabled': currentPage >= totalPages-1}"
              >
                <svg class="icon" viewBox="0 0 1000 1000">
                  <g>
                    <path d="M690.8,803l-28.5-28.9L933,500L662.3,225.9l28.5-28.9L990,500L690.8,803z"/>
                    <path d="M942,520.4H10v-40.8h932V520.4z"/>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SliderProducts />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import CatalogItem from '../components/Catalog-item'
import SliderProducts from '../components/Slider-products'
import Footer from '../components/Footer'

import { mapGetters, mapActions } from "vuex"

export default {
  components: {
    Header,
    CatalogItem,
    SliderProducts,
    Footer
  },
  data () {
    return {
      currentPage: 0,
      perPage: 12,
      pageRange: 5
    }
  },
  methods: {
    resetCurrentPage() {
      this.currentPage = 0;
    },
    addAllCategory() {
      this.ADD_ALL_CATEGORY();
      this.currentPage = 0;
    },
    deleteAllCategory() {
      this.DELETE_ALL_CATEGORY();
      this.currentPage = 0;
    },
    addToCart(product) {
      this.ADD_TO_CART(product);
    },
    prevPage() {
      this.currentPage--;
    },
    nextPage() {
      this.currentPage++;
    },
    ...mapActions ([
      'ADD_ALL_CATEGORY',
      'DELETE_ALL_CATEGORY',
      'ADD_TO_CART'
    ])
  },
  computed: {
    filterPerPage() {
      if (this.perPage == 12) {
        return 12;
      }
      if (this.perPage == 24) {
        return 24;
      }
      if (this.perPage == 48) {
        return 48;
      }
    },
    pages() {     // Всего страниц в каталоге в виде массива
      var pages = []
      for(var i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i);
      }
      return pages
    },
    rangeStart() {      // Диапазон пагинации
      var start = this.currentPage - this.pageRange;
      return (start > 0) ? start : 0;
    },
    rangeEnd() {      // Диапазон пагинации
      var end = this.currentPage + this.pageRange;
      return (end < this.totalPages) ? end : this.totalPages - 1;
    },
    totalPages(){     // Всего страниц в каталоге в виде числа
      return Math.ceil(this.filterCatalogProducts.length/this.filterPerPage);
    },
    products(){     // Все отфильтрованные продукты
      const start = this.currentPage * this.filterPerPage,
            end = start + this.filterPerPage;
      return this.filterCatalogProducts.slice(start, end);
    },
    ...mapGetters([
      'checkedCategories',
      'filterCatalogProducts'
    ])
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  &__title {}
  &__top-row {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 15px;
    @include _600 {
      align-items: flex-end;
      flex-direction: column;
    }
  }
  &__sort,
  &__per-page {
    display: flex;
    flex-wrap: wrap;
    @include _480 {
      flex-direction: column;
      width: 100%;
    }
  }
  &__sort {
    margin-right: 50px;
    @include _600 {
      margin-right: 0;
      margin-bottom: 7px;
    }
  }
  &__per-page {
    @include _480 {
      margin-bottom: 25px;
    }
  }
  &__wrapper {
    display: flex;
    margin-bottom: 120px;
    @include _768 {
      flex-direction: column;
      margin-bottom: 80px;
    }
  }
  &__filter {
    box-shadow: 0 0 10px 0 $light_gray;
    max-height: 580px;
    margin-right: 30px;
    padding: 30px;
    width: 300px;
    @include _768 {
      margin-bottom: 15px;
      width: 100%;
    }
  }
  &__products-wrapper {
    width: 100%;
  }
  &__products {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}

.sort {
  &__types {
    width: 180px;
  }
}
.per-page {
  &__types {
    width: 80px;
  }
}
.sort,
.per-page {
  &__text {
    margin-right: 5px;
    padding: 5px 0;
  }
  &__types {
    border: 1px solid $light_gray;
    cursor: pointer;
    padding: 5px;
    @include _600 {
      width: 200px;
    }
    @include _480 {
      width: 100%;
    }
  }
}

.filter {
  &__text {}
  &__categories,
  &__types {
    display: flex;
    flex-direction: column;
    @include _768 {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  &__categories {
    margin-bottom: 30px;
    @include _768 {
      margin-bottom: 20px;
    }
  }
  &__types {}
  li {      // Растягиваем плашки на всю ширину
    @include _480 {
      width: 100%;
    }
  }
  &__category,
  &__type {
    border: 1px solid $light_gray;
    cursor: pointer;
    display: block;
    margin-bottom: 3px;
    padding: 12px 20px;
    text-align: center;
    transition:  $transition;
    @include _768 {
      margin-right: 3px;
    }
    &:hover {
      background-color:#f5f5f5;
    }
  }
}

input[type=checkbox],     // Скрываем дефолтные кружки у переключателей
input[type=radio] {
  display: none;
}

input[type=checkbox]:checked + label,      // Активный фильтр
input[type=radio]:checked + label {
  border: 1px solid $green;
  color: $green;
  &:hover {
    background-color: #fff;
  }
}

.pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
  &__button-left,
  &__button-right {
    background-color: #fff;
    border: 1px solid $light_gray;
    cursor: pointer;
    fill: #292929;
    height: 35px;
    width: 35px;
    padding: 4px;
    transition: $transition;
    &:hover {
      fill: $green;
      border: 1px solid $green;
    }
  }
  &__numbers {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__number {
    border: 1px solid $light_gray;
    cursor: pointer;
    height: 25px;
    line-height: 25px;
    margin: 0 5px;
    text-align: center;
    transition: $transition;
    width: 25px;
  }
}

.active {     // Активный фильтр
  border: 1px solid $green;
  color: $green;
}
.disabled {     // Отключенная стрелка пагинации
  opacity: 0;
  pointer-events: none;
}
</style>