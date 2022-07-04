<template>
    <div :class="{'active':testimonial.active}" class="review">
        <div class="avatar-testomonial">
            <img :src="'img/'+testimonial.avatarPath" :alt="testimonial.authorReview">
        </div>
        <div class="text-review">
            <p>{{ testimonial.textReview }}</p>
        </div>
        <div class="author-review">
            <strong>{{testimonial.authorReview}}</strong>, {{ testimonial.teamAuthor }}
        </div>
    </div>
</template>

<script>
export default {
    props:{
        testimonial: Object
    },
    data(){
        return{
            activeReview: {},
        };
    },
    mounted(){
        
    },
    methods:
    {
        
    }

}
</script>

<style lang="scss" scoped>
.review {
    opacity: 0;
    transition: opacity .8s ease-in-out;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: white;

    .text-review {
        padding: 0 3rem;
        font-size: 1.1rem;
    }

    .author-review {
        font-size: 1.3rem;
    }
}
.active {
    opacity: 1;
    }
</style>