<template>
    <div class="card">
        <div class="card-image">
            <img :src="'img/'+article.imgPath+'.jpg'" :alt="article.nameArticle">
        </div>
        <div class="card-body">
            <span class="title"><strong>{{ article.nameArticle }}</strong></span>
            <span class="style-genres">
                <small class="text-muted">{{ article.styleGenres.join(", ") }}</small>
            </span>
            <div class="card-price">
                <span :class="{'old': article.priceDiscounted !== null}" class="price">${{ article.price }} </span><span v-show="article.priceDiscounted" class="price-discounted">${{ article.priceDiscounted }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
    props:{
        article: Object
    },
    computed: {
    },
    mounted(){

    },
    methods:
    {
        
    }
}
</script>

<style lang="scss" scoped>
.card{
    border: 0;
}
.card-image img {
    width: 100%;
}
.card-body {
    display: flex;
    flex-direction: column;
    text-align: left;
}
</style>