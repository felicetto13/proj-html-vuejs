<template>
  <div class="slides-container">
    <div class="slides">
      <img
        class="w-100"
        :src="'img/' + currentSlide.imgPath"
        :id="'slide' + currentSlide.id"
        :alt="'slide numbers' + (currentSlide.id + 1)"
      />
      <div class="text-slides">
        <h1 class="text-uppercase">brand new arrivals</h1>
        <h3 class="text-uppercase">new collection from new york</h3>
        <div class="d-flex gap-5 justify-content-center">
          <button class="btn btn-outline-light text-uppercase">View All</button>
          <button class="btn btn-outline-light text-uppercase">lookbook</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slidesHome: [
        {
          id: 0,
          name: "",
          imgPath: "home1_slide_one_bg.jpg",
        },
        {
          id: 1,
          name: "",
          imgPath: "home1_slide_two_bg.jpg",
        },
        {
          id: 2,
          name: "",
          imgPath: "home1_slide_three_bg.jpg",
        },
      ],
      startIndex: 0,
      currentSlide: {},
    };
  },
  mounted() {
    (this.currentSlide = this.slidesHome[this.startIndex]),
      setInterval(this.automaticSlider, 3000);
  },
  methods: {
    startingSlide() {
      debugger;
      this.currentSlide = this.slidesHome[this.startIndex];
    },
    automaticSlider() {
      if (this.startIndex === 2) {
        this.currentSlide = this.slidesHome[this.startIndex];
        this.startIndex = 0;
      } else {
        this.currentSlide = this.slidesHome[this.startIndex];
        this.startIndex++;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
.slides-container {
  width: 100%;
  position: relative;
  .slides {
    width: 100%;
    position: relative;
    height: 600px;

    img{
        height: 100%;
        aspect-ratio: 1;
        object-fit: cover;
    }

    .text-slides {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: $white;
    text-align: center;
    h1{
        font-weight: bold;
        font-size: 4rem;
    }
    h3{
        margin-bottom: 2rem;
    }

    button {
        border-radius: 50px;
        border: 3px solid;
        padding: 1rem 1.5rem ;
    }
    }
    }
  
}
</style>