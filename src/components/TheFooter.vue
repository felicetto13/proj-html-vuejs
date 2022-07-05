<template>
  <footer>
    <div class="section footer">
      <div class="container">
        <div class="row row-cols-4">
          <div class="col">
            <img src="img/classic_shop_logo_footer.png" />

            <div class="companies-data">
              <p>
                12345 North Main Street,<br />
                New York, NY 555555 <br />
                Phone: 1.800.555.6789 <br />
                Email: info@company.com <br />
                Web: Theme-fusion.com
              </p>
            </div>
            <div class="social-bar">
              <ul class="list-unstyled">
                <li>
                  <a href="facebook.com"
                    ><i class="fa-brands fa-facebook-f"></i
                  ></a>
                </li>
                <li>
                  <a href="twitter.com"><i class="fa-brands fa-twitter"></i></a>
                </li>
                <li>
                  <a href="instagram.com"
                    ><i class="fa-brands fa-instagram"></i
                  ></a>
                </li>
                <li>
                  <a href="youtube.com"><i class="fa-brands fa-youtube"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col item-element">
              <SmallCard feat="Best Seller"></SmallCard>
          </div>
          <div class="col">
              <h5 class="text-white text-uppercase">recent posts</h5>
              <ul class="list-unstyled link-item-container">
                  <li class="link-item"><i class="fa-solid fa-angle-right"></i> <a href="#">Aenean lorotis ascffge</a></li>
                  <li class="link-item"><i class="fa-solid fa-angle-right"></i> <a href="#">Duiscasdav fsdfsdqweq</a></li>
                  <li class="link-item"><i class="fa-solid fa-angle-right"></i> <a href="#">Aenean lorotis ascffge</a></li>
                  <li class="link-item"><i class="fa-solid fa-angle-right"></i> <a href="#">Aenean lorotis ascffge</a></li>
                  <li class="link-item"><i class="fa-solid fa-angle-right"></i> <a href="#">Aenean lorotis ascffge</a></li>
                  <li class="link-item"><i class="fa-solid fa-angle-right"></i> <a href="#">Aenean lorotis ascffge</a></li>
              </ul>
          </div>
          <div class="col">
                <h5 class="text-white text-uppercase">tags</h5>
                <div class="container-tags">
                    <button v-for="tag in getTags" :key="tag" class="btn mybtn-outline-light">
                        {{tag}}
                    </button>
                </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
        <div class="container">
            <p>© Copyright 2012 - 2022 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress</p>
            <img src="img/payment_cards_footer.png" alt="payment methods">
        </div>
    </div>
  </footer>
</template>

<script>
import {state} from '../store'
import SmallCard from './SmallCard.vue';
export default {
  components: { SmallCard },
    computed: {
        getBestSeller() {
            return state.filteredArticlesTopSeller
        },
        getTags(){
            return state.tags;
        }
            
},
mounted(){
    this.getBestSeller
}
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
.footer {
  background-color: #2b2e32;
  padding: 5rem 0;

  img {
    width: 200px;
  }
  .companies-data {
    color: white;
    padding: 2rem 0;
  }
  .social-bar {
    ul {
      display: flex;
      gap: 2rem;
      li a{
          color: white  ;
      }
    }
  }
}
.item-element {
    color: white;
}

.link-item {
    padding: 1rem 0;
    border-bottom: 1px solid gray;
    color: white;
    a{
        text-decoration: none;
        color: white;

        &:hover {
            text-decoration: underline;
        }
    }
}
.mybtn-outline-light {
    border: 1px solid gray;
    border-radius: 0;
    padding: .5rem 1rem;
    margin-right: 10px;
    margin-bottom: 10px;
    color: white;

    &:hover {
        background-color: rgba($color: #fff, $alpha: .1);
        color: white;
    }
}
.copyright {
    background-color: #1C1E21;
    text-align: center;
    padding: 3rem 0;
    color: white;
    p{
        margin-bottom: 1.5rem;
    }
}
</style>