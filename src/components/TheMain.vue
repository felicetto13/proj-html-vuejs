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
            <div class="line"></div>
          </div>
        </div>
        <h6 class="text-muted mt-3">
          <small> Must have products from our top sellers</small>
        </h6>
        <div class="menu-type">
          <ul class="menu-type-items">
            <li @click="getArticlesFilter('Men')"><span>Men</span></li>
            <li @click="getArticlesFilter('Women')"><span>Women</span></li>
            <li @click="getArticlesFilter('Accessories')">
              <span>Accessories</span>
            </li>
          </ul>
        </div>
        <div class="card-items">
          <div id="carousel" class="row row-cols-4 flex-nowrap">
            <div
              class="col"
              v-for="article in getArticles"
              :key="article.nameArticle"
            >
              <FeaturedCard :article="article"></FeaturedCard>
            </div>
          </div>
          <div class="prev" @click="previousCard('carousel')">
            <i class="fa-solid fa-angle-left"></i>
          </div>
          <div class="next" @click="nextCard('carousel')">
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="section collection">
      <div class="row row-cols-3">
        <div class="col">
          <div class="img-collection">
            <img src="img/winter_collection_bg.jpg" alt="Winter collection" />
          </div>
          <div class="overlayer-description">
            <h2>Winter Collection</h2>
            <h6>STYLISH AND WARM</h6>
            <button class="btn btn-outline-light">VIEW MORE</button>
          </div>
        </div>
        <div class="col">
          <div class="img-collection">
            <img src="img/spring_collection_bg.jpg" alt="spring collection" />
          </div>
          <div class="overlayer-description">
            <h2>Spring Collection</h2>
            <h6>BRIGHT AND COLORFUL</h6>
            <button class="btn btn-outline-light">VIEW MORE</button>
          </div>
        </div>
        <div class="col">
          <div class="img-collection">
            <img src="img/autumn_collection_bg.jpg" alt="autumn collection" />
          </div>
          <div class="overlayer-description">
            <h2>Autumn Collection</h2>
            <h6>RICH AND CONFORTABLE</h6>
            <button class="btn btn-outline-light">VIEW MORE</button>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row row-cols-3 text-center align-items-center">
          <div class="col">
            <div class="line"></div>
          </div>
          <div class="col">
            <h2>Best Seller</h2>
          </div>
          <div class="col">
            <div class="line"></div>
          </div>
        </div>
        <h6 class="text-muted mt-3">
          <small> Must have products from our top sellers</small>
        </h6>
        <div class="card-items">
          <div id="carousel2" class="row row-cols-5 flex-nowrap">
            <div
              class="col"
              v-for="article in getArticlesTopSeller"
              :key="article.nameArticle"
            >
              <FeaturedCard :article="article"></FeaturedCard>
            </div>
          </div>
          <div class="prev" @click="previousCard('carousel2')">
            <i class="fa-solid fa-angle-left"></i>
          </div>
          <div class="next" @click="nextCard('carousel2')">
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="section banner-offers">
      <div class="container">
        <div class="row row-cols-2">
          <div class="col">
            <div class="offer-1">
              <div class="overlayer-description">
                <h2>70% Off</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button class="btn btn-outline-light">VIEW MORE</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="offer-2">
              <div class="overlayer-description">
                <h2>Free Shipping</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button class="btn btn-outline-light">VIEW MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row row-cols-3 text-center align-items-center">
          <div class="col">
            <div class="line"></div>
          </div>
          <div class="col">
            <h2>New Arrivals</h2>
          </div>
          <div class="col">
            <div class="line"></div>
          </div>
        </div>
      </div>

      <h6 class="text-muted mt-3">
        <small> Brand new products from top designers</small>
      </h6>
      <div class="card-items">
        <div id="carousel3" class="row row-cols-5 flex-nowrap">
          <div
            class="col"
            v-for="article in getArticlesNewArrivals"
            :key="article.nameArticle"
          >
            <FeaturedCard :article="article"></FeaturedCard>
          </div>
        </div>
        <div class="prev" @click="previousCard('carousel3')">
          <i class="fa-solid fa-angle-left"></i>
        </div>
        <div class="next" @click="nextCard('carousel3')">
          <i class="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
    <div class="section banner-testimonials">
      <div class="container position-relative">
        <div
          class="reviews-container"
          v-for="testimonial in getReviews"
          :key="testimonial.textReview"
        >
          <TestimonialCard :testimonial="testimonial"></TestimonialCard>
          <div class="review-pagination" id="pagination">
            <span @click="changeClass('c1')" id="c1"></span>
            <span @click="changeClass('c2')" id="c2"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="section blog-section">
      <div class="container">
        <div class="row row-cols-3 text-center align-items-center">
          <div class="col">
            <div class="line"></div>
          </div>
          <div class="col">
            <h2>From Our Blog</h2>
          </div>
          <div class="col">
            <div class="line"></div>
          </div>
        </div>
        <h6 class="text-muted mt-3">
          <small> The latest Classic Shop news</small>
        </h6>
        <div class="row row-cols-3 py-5">
          <div class="col">
            <div class="post">
              <div class="post-img">
                <img src="img/post_img_12-700x441.jpg" alt="women" />
              </div>
              <div class="post-description">
                <div class="title">
                  <strong>Aenean lobortis sapien enim viverr</strong>
                </div>
                <div class="published-data">
                  <span><small>September 9th, 2015|0 Comments</small></span>
                </div>
                <div class="text-post">
                  <p>
                    Donec finibus sit amet orci eget ultricies. Praesent posuere
                    ante ut erat fringilla,
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="post">
              <div class="post-img">
                <img src="img/post_img_11-700x441.jpg" alt="women" />
              </div>
              <div class="post-description">
                <div class="title">
                  <strong>Duis ac massa semper maximus</strong>
                </div>
                <div class="published-data">
                  <span><small>September 9th, 2015|0 Comments</small></span>
                </div>
                <div class="text-post">
                  <p>
                    Donec finibus sit amet orci eget ultricies. Praesent posuere
                    ante ut erat fringilla,
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="post">
              <div class="post-img">
                <img src="img/post_img_10-700x441.jpg" alt="women" />
              </div>
              <div class="post-description">
                <div class="title">
                  <strong>Nunc fermint nulla eu justo sem id</strong>
                </div>
                <div class="published-data">
                  <span><small>September 9th, 2015|0 Comments</small></span>
                </div>
                <div class="text-post">
                  <p>
                    Donec finibus sit amet orci eget ultricies. Praesent posuere
                    ante ut erat fringilla,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section small-card">
      <div class="container">
        <div class="row row-cols-4">
          <div class="col">
            <SmallCard feat="Best Seller"></SmallCard>
          </div>
          <div class="col">
            <SmallCard feat="New Arrivals"></SmallCard>
          </div>
          <div class="col">
            <SmallCard feat="Best Seller"></SmallCard>
          </div>
          <div class="col">
            <SmallCard feat="New Arrivals"></SmallCard>
          </div>
        </div>
      </div>
    </div>
    <div class="section brands">
      <div class="container">
        <h5 class="text-center mb-5"><strong>BRANDS LOGO</strong></h5>
        <div class="brands-container">
          <ul class="list-unstyled d-flex justify-content-between">
            <li><img src="img/b_logotype_1.png" alt="" /></li>
            <li><img src="img/b_logotype_2.png" alt="" /></li>
            <li><img src="img/b_logotype_3.png" alt="" /></li>
            <li><img src="img/b_logotype_6.png" alt="" /></li>
            <li><img src="img/b_logotype_7.png" alt="" /></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="section newsletter">
      <div class="container">
        <div class="row">
          <div class="col-7">
            <h2>
              <span><i class="fa-solid fa-envelope"></i></span
              ><strong class="fs-2"
                >Subscribe now and get special offers</strong
              >
            </h2>
          </div>
          <div class="col-5">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Insert your email"
            />
            <div class="btn btn-primary my-btn">SEND</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SliderHome from "./SliderHome.vue";
import FeaturedCard from "./FeaturedCard.vue";
import TestimonialCard from "./TestimonialCard.vue";
import { state } from "../store";
import { filterArticles } from "../store";
import { getArticleByFeature } from "../store";
import SmallCard from './SmallCard.vue';
export default {
  components: { SliderHome, FeaturedCard, TestimonialCard, SmallCard },
  computed: {
    getArticles() {
      return state.filteredArticles;
    },
    getArticlesTopSeller() {
      return state.filteredArticlesTopSeller;
    },
    getArticlesNewArrivals() {
      return state.filteredArticlesNewArrivals;
    },
    getReviews() {
      return state.testimonials;
    },
  },
  mounted() {
    this.getArticlesFilter("Men");
    this.getArticlesFilterByFeature("Best Seller");
    this.getArticlesFilterByFeature("New Arrivals");
    this.changeReview("c1");
  },
  methods: {
    getArticlesFilter(el) {
      filterArticles(el);
    },
    getArticlesFilterByFeature(el) {
      getArticleByFeature(el);
    },

    //function for carousel multiple item next
    nextCard(id) {
      const sliderContainer = document.getElementById(id);
      const item = sliderContainer.getElementsByClassName("col");
      sliderContainer.append(item[0]);
    },

    //function for carousel multiple item precv
    previousCard(id) {
      const sliderContainer = document.getElementById(id);
      const item = sliderContainer.getElementsByClassName("col");
      sliderContainer.prepend(item[item.length - 1]);
    },
    changeReview(id) {
      document.getElementById(id).classList.toggle("active");

      setInterval(() => {
        state.testimonials.forEach((el) => {
          el.active = !el.active;
        });
        if (id === "c1") {
          document.getElementById(id).classList.toggle("active");
          document.getElementById("c2").classList.toggle("active");
        } else if (id === "c2") {
          document.getElementById(id).classList.toggle("active");
          document.getElementById("c1").classList.toggle("active");
        }
      }, 7000);
    },
    changeClass(id) {
      state.testimonials.forEach((el) => {
        el.active = !el.active;
      });
      if (id === "c1") {
        document.getElementById(id).classList.toggle("active");
        document.getElementById("c2").classList.toggle("active");
      } else if (id === "c2") {
        document.getElementById(id).classList.toggle("active");
        document.getElementById("c1").classList.toggle("active");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
.section {
  padding-top: 5rem;
  padding-bottom: 5rem;

  h2,
  h6 {
    margin: 0;
    text-align: center;
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
      li {
        padding: 1rem 2.5rem;
        display: inline-block;
        cursor: pointer;
        width: 15%;
        border-left: 1px solid $menu-item;
        border-top: 1px solid $menu-item;
        border-bottom: 1px solid $menu-item;
        background-color: lighten($menu-item, $amount: 30);
        &:hover {
          background-color: white;
        }

        &:last-child {
          border-right: 1px solid $menu-item;
        }
      }
    }
  }
  .card-items {
    overflow: hidden;
    padding: 3rem 0;
    position: relative;

    .prev,
    .next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      padding: 0.75rem 0.5rem;
      background-color: rgba($menu-item, 0.5);
      cursor: pointer;
      z-index: 999;
      transition: background-color 0.3s ease-in;
      color: white;

      &:hover {
        background-color: rgba($menu-item, 1);
      }
    }
    .prev {
      left: 0;
    }
    .next {
      right: 0;
    }
  }
}
.collection {
  height: 700px;
  overflow: hidden;

  .col {
    height: 100%;
    padding: 0;
    position: relative;

    img {
      width: 100%;
      aspect-ratio: 1;
      object-fit: cover;
    }
    .overlayer-description {
      position: absolute;
      width: 100%;
      bottom: 25%;
      text-align: center;
      left: 50%;
      margin: 0 auto;
      z-index: 99999;
      transform: translate(-50%);

      h2,
      h6 {
        color: white;
        font-weight: bold;
        margin-bottom: 1rem;
      }
      h2 {
        font-size: 2.5rem;
      }
      .btn {
        border-radius: 20px;

        &:hover {
          background-color: rgba($color: #000000, $alpha: 0.2);
          color: white;
        }
      }
    }
  }
}
.banner-offers {
  background-image: url("../../public/img/bkgd_confetti-compressor.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  .col {
    height: 400px;
  }
  .overlayer-description {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 3rem;
    text-align: left;
    top: 25%;
    color: white;

    h2 {
      text-align: left;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    .btn {
      border-radius: 20px;

      &:hover {
        background-color: rgba($color: #000000, $alpha: 0.2);
        color: white;
      }
    }
  }
  .offer-1 {
    height: 100%;
    background-image: url("../../public/img/promo_box_1_bg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .offer-2 {
    height: 100%;
    background-image: url("../../public/img/promo_box_2_bg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
}
.banner-testimonials {
  background-image: url("../../public/img/testimonials_home_1_bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  height: 600px;
  position: relative;

  .container {
    height: 400px;
  }
  .reviews-container {
    position: absolute;
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .review-pagination {
      position: absolute;
      bottom: 0%;
      left: 50%;
      transform: translate(-25%, 100%);
      .active {
        background-color: white;
      }
      span {
        display: inline-block;
        margin-right: 10px;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        border: 1px solid white;

        &:hover {
          background-color: white;
        }
      }
    }
  }
}
.blog-section {
  border-bottom: 1px solid rgba($menu-item, 0.5);
}
.post-img {
  overflow: hidden;

  img {
    width: 100%;
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
      transform: scale(1.5);
      opacity: 0.7;
    }
  }
}
.small-card .col {
  color: rgba($font-color,.8);
}

.brands {
  background-color: rgba($menu-item, 0.3);
}
.newsletter {
  background-color: $newsletter-color;

  h2 {
    font-weight: bolder;
    color: white;
    span {
      width: 50px;
      height: 50px;
      padding: 0.5rem;
      background-color: darken($newsletter-color, 4 );
      border-radius: 40px;
      color: rgba($menu-item, 0.5);
      margin-right: 10px;
    }
  }

  .btn {
    border-radius: 30px;
    padding: .5rem 1.25rem;
  }
}
</style>