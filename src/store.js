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
        },
        {
            nameArticle:"Black Leather Jacket",
            price: 235,
            priceDiscounted: 200,
            imgPath: "black_elegant_leather_jacket",
            reviewStar: 5,
            styleGenres: ["Men", "Jackets", "Jeans"]
        },
        {
            nameArticle:"Leather Gloves",
            price: 45,
            priceDiscounted: null,
            imgPath: "leather_gloves",
            reviewStar: 5,
            styleGenres: ["Accessories", "Woman","Gloves"]
        },
        {
            nameArticle:"Hipster Black Top",
            price: 57,
            priceDiscounted: null,
            imgPath: "hipster_black_top",
            reviewStar: 0,
            styleGenres: ["Woman", "Shirt", "Cap"]
        },
        {
            nameArticle:"Blu Leather Jacket",
            price: 80,
            priceDiscounted: 60,
            imgPath: "blue_leather_jacket",
            reviewStar: 0,
            styleGenres: ["Jackets","Men", "Suits"]
        },
        {
            nameArticle:"Modern Leather Boots",
            price: 50,
            priceDiscounted: 30,
            imgPath: "modern_leather_boots",
            reviewStar: null,
            styleGenres: ["Men","Boots","Accessories"]
        },
        {
            nameArticle:"Spring Printed Dress",
            price: 47,
            priceDiscounted: 0,
            imgPath: "spring_printed_dress",
            reviewStar: 5,
            styleGenres: ["Woman","Dress"]
        },
        {
            nameArticle:"Blue Jackets & Stripe Tee",
            price: 580,
            priceDiscounted: null,
            imgPath: "blue_jacket_and_white_stripe_tee",
            reviewStar: 0,
            styleGenres: ["Men","Jackets","Stripe"]
        },
        {
            nameArticle:"Modern Black Leather Suit",
            price: 96,
            priceDiscounted: null,
            imgPath: "modern_black_leather_suit",
            reviewStar: 0,
            styleGenres: ["Men","Jackets"]
        },
        {
            nameArticle:"Black Leather Suit",
            price: 176,
            priceDiscounted: null,
            imgPath: "black_leather_suit",
            reviewStar: 0,
            styleGenres: ["Men","Jackets",]
        },
    ],
    filteredArticles: []
})

export function filterArticles(gen){
    debugger
    state.filteredArticles=state.articles.filter((el)=>{
        if(el.styleGenres.includes(gen)){
        return el
        }
      })
}