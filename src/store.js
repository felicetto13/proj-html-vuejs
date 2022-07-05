import Vue from "vue";


export const state = Vue.observable({
    articles: [
        {
            nameArticle:"Black Jacket",
            price: 125,
            priceDiscounted: null,
            imgPath: "black_leather_jacket",
            reviewStar: 0,
            styleGenres: ["Women", "Jackets"],
            feature:["Best Seller","New Arrivals"]
        },
        {
            nameArticle:"Black Leather Jacket",
            price: 235,
            priceDiscounted: 200,
            imgPath: "black_elegant_leather_jacket",
            reviewStar: 5,
            styleGenres: ["Men", "Jackets", "Jeans"],
            feature:["Best Seller","New Arrivals"]
        },
        {
            nameArticle:"Leather Gloves",
            price: 45,
            priceDiscounted: null,
            imgPath: "leather_gloves",
            reviewStar: 5,
            styleGenres: ["Accessories", "Gloves"],
            feature:[]
        },
        {
            nameArticle:"Hipster Black Top",
            price: 57,
            priceDiscounted: null,
            imgPath: "hipster_black_top",
            reviewStar: 0,
            styleGenres: ["Women", "Shirt"],
            feature:["Best Seller","New Arrivals"]
        },
        {
            nameArticle:"Modern Love Tee",
            price: 57,
            priceDiscounted: null,
            imgPath: "modern_love_tee",
            reviewStar: 0,
            styleGenres: ["Women", "Shirt"],
            feature:["Best Seller","New Arrivals"]
        },
        {
            nameArticle:"Blu Leather Jacket",
            price: 80,
            priceDiscounted: 60,
            imgPath: "blue_leather_jacket",
            reviewStar: 0,
            styleGenres: ["Jackets","Men", "Suits"],
            feature:["Best Seller","New Arrivals"]
        },
        {
            nameArticle:"Modern Leather Boots",
            price: 50,
            priceDiscounted: 30,
            imgPath: "modern_leather_boots",
            reviewStar: null,
            styleGenres: ["Men","Boots","Accessories"],
            feature:[]
        },
        {
            nameArticle:"Spring Printed Dress",
            price: 47,
            priceDiscounted: 0,
            imgPath: "spring_printed_dress",
            reviewStar: 5,
            styleGenres: ["Women","Dress"],
            feature:["Best Seller","New Arrivals"]
        },
        {
            nameArticle:"Blue Jackets & Stripe Tee",
            price: 580,
            priceDiscounted: null,
            imgPath: "blue_jacket_and_white_stripe_tee",
            reviewStar: 0,
            styleGenres: ["Men","Jackets","Stripe"],
            feature:["Best Seller","New Arrivals"]
        },
        {
            nameArticle:"Modern Black Leather Suit",
            price: 96,
            priceDiscounted: null,
            imgPath: "modern_black_leather_suit",
            reviewStar: 0,
            styleGenres: ["Men","Jackets"],
            feature:["Best Seller","New Arrivals"]
        },
        {
            nameArticle:"Black Leather Suit",
            price: 176,
            priceDiscounted: null,
            imgPath: "black_leather_suit",
            reviewStar: 0,
            styleGenres: ["Men","Jackets",],
            feature:["Best Seller","New Arrivals"]
        },
    ],
    filteredArticles: [],
    filteredArticlesTopSeller: [],
    filteredArticlesNewArrivals:[],
    testimonials: [
        {
            avatarPath:"woman_testimonial.png",
            textReview: "Proin blandit metus vel magna dignissim varius. Morbi enim lorem, sollicitudin vitae ante nec, rutrum venenatis neque. In mi augue, iaculis nec dui ac, condimentum consequat velit. Ut et metus justo.",
            authorReview:"Lisa Smith",
            teamAuthor:"Theme Fusion",
            active:true,
        },
        {
            avatarPath:"man_testimonial.png",
            textReview: "Curabitur non tristique tortor. Vestibulum aliquet suscipit ipsum in volutpat. Donec vel lacinia sem, vitae semper nulla. In hac habitasse platea dictumst. Mauris consectetur est et nibh sadip hendrerit bibendum.",
            authorReview:"Darío Pineda",
            teamAuthor:"Theme Fusion",
            active:false,
        }
    ],
    tags:["Black", "Boots", "brown", "Casual", "D&G", "Fabric", "flowers", "Grey", "hat", "Hipster", "lines", "multi-purpose", "New York", "Outdoors","red", "responsive", "Summer","Sweater","Travel","Warm","White","winter"]
})

export function filterArticles(gen){
    state.filteredArticles=state.articles.filter((el)=>{
        if(el.styleGenres.includes(gen)){
        return el
        }
      })
}

export function getArticleByFeature(feat){
    if(feat === "Best Seller"){
       return state.filteredArticlesTopSeller = state.articles.filter((el)=>{
            if(el.feature.includes(feat)){
                return el
                }
    })
    }else if(feat === "New Arrivals"){
        return state.filteredArticlesNewArrivals = state.articles.filter((el)=>{
            if(el.feature.includes(feat)){
                return el
                }
        })
    }
    
}
 