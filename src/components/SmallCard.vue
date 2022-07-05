<template>

  <ul class="list-unstyled">
      <h5 class="text-uppercase">{{ feat }}</h5>
    <li
      class="card-body"
      v-show="i < 4"
      v-for="(bestSeller, i) in getElement(feat)"
      :key="bestSeller.nameArticle"
    >
      <div class="description">
        <span>{{ bestSeller.nameArticle }}</span>
        <div class="review-star">
          <i
            v-for="emptyStar in 5"
            :key="emptyStar"
            class="fa-regular fa-star"
          ></i>
          <i
            v-show="bestSeller.reviewStar > 0"
            v-for="star in bestSeller.reviewStar"
            :key="star"
            class="fa-solid fa-star"
          ></i>
        </div>
        <span
          :class="{ old: bestSeller.priceDiscounted !== null }"
          class="price"
          ><small>${{ bestSeller.price }}</small> </span
        ><span v-show="bestSeller.priceDiscounted" class="price-discounted"
          >${{ bestSeller.priceDiscounted }}</span
        >
      </div>
      <div class="image-description">
        <img
          :src="'img/' + bestSeller.imgPath + '-200x260.jpg'"
          :alt="bestSeller.nameArticle"
        />
      </div>
    </li>
  </ul>
</template>

<script>
import {getArticleByFeature} from "../store"
export default {
    props:
    {
        feat: String
    },
    methods: {
        getElement(id){
            debugger
            return getArticleByFeature(id);
        }
    },
    mounted(){
        this.getElement;
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

ul{
    h5{
        color: currentColor;
    }
}
.card-body {
    color: currentColor;
    display: flex;
    justify-content: space-between; 
    padding: 1rem 0;
    border-bottom: 1px solid gray;
    .description{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }   
    .fa-star{
        color: $myprimary-color;
    }
    .fa-solid.fa-star {
        transform: translateX(-500%);
    }
    .old {
    text-decoration: line-through;
    margin-right: 5px;
    
}
}
.image-description {
    width: 60px;
    justify-content: flex-end;
    
    img {
        width: 100%;
    }
}
</style>