<template>
<main>
  <SliderHome></SliderHome>

  <div class="section">
    <div class="container text-center">
      <div class="row row-cols-3 text-center align-items-center">
        <div class="col">
          <div class="line"></div>
          </div>
        <div class="col">
          <h2>Featured Products</h2>
        </div>
          <div class="col">
            <div  class="line"></div>
          </div>
      </div>
      <h6 class=" text-muted mt-3"><small> Must have products from our top sellers</small></h6>
      <div class="menu-type">
        <ul class="menu-type-items">
          <li @click="getArticlesFilter('Men')"><span>Men</span></li>
          <li @click="getArticlesFilter('Women')"><span>Women</span></li>
          <li @click="getArticlesFilter('Accessories')"><span>Accessories</span></li>
        </ul>
      </div>
      <div class="card-items">
        <div id="carousel" class="row row-cols-4 flex-nowrap ">
            <div class="col" v-for="article in getArticles" :key="article.nameArticle">
              <FeaturedCard :article="article"></FeaturedCard>
            </div>
              </div>
              <div class="prev" @click="previousCard()"><i class="fa-solid fa-angle-left"></i></div>
              <div class="next" @click="nextCard()"><i class="fa-solid fa-angle-right"></i></div>
    </div>
      
    </div>
  </div>
</main>
    
</template>

<script>
import SliderHome from './SliderHome.vue'
import FeaturedCard from './FeaturedCard.vue'
import {state} from "../store"
import { filterArticles } from "../store"
export default {
  components: { SliderHome, FeaturedCard },
  data()
  {
    return{
      translateX:0
    }
  },
  computed:
  {
    getArticles(){
      return state.filteredArticles;
    }
  },
  mounted(){
    this.getArticlesFilter("Men");
  },
  methods:
  {
    getArticlesFilter(el){
      filterArticles(el)
    },

    //function for carousel multiple item next
    nextCard(){
      const sliderContainer = document.getElementById('carousel')
      const item = sliderContainer.getElementsByClassName('col')
      sliderContainer.append(item[0])
    },

    //function for carousel multiple item precv
    previousCard(){
      debugger
      const sliderContainer = document.getElementById('carousel')
      const item = sliderContainer.getElementsByClassName('col')
      sliderContainer.prepend(item[item.length-1])
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
.section {
  padding-top: 5rem;
  padding-bottom: 5rem;
  height: 2px;

  h2 {
    margin: 0;
  }
  .line {
    height: 1px;
    background-color: $menu-item;
  }

  .menu-type {
    padding: 1.5rem 0;
    .menu-type-items {
      display: flex;
      list-style: none;
      justify-content: center;
      padding: 0;
      li{
        padding: 1rem 2.5rem;
        display: inline-block;
        cursor: pointer;
        width: 15%;
        border-left:1px solid $menu-item;
        border-top:1px solid $menu-item;
        border-bottom:1px solid $menu-item;
        background-color: lighten($menu-item, $amount: 30);
        &:hover{
          background-color: white;
        }

        &:last-child{
          border-right: 1px solid $menu-item;
        }
      }
    }
  }
  .card-items {
    overflow: hidden;
    padding: 3rem 0;
    position: relative;

    .prev, .next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      padding: .75rem .5rem;
      background-color: rgba($menu-item, .5);
      cursor: pointer;
      z-index: 999;
      transition: background-color .3s ease-in;

      &:hover {
        background-color: rgba($menu-item, 1);
      }
    }
    .prev{
      left: 0;
    }
    .next {
      right: 0;
    }
  }
}
</style>