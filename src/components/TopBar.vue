<template>
<div style="border-bottom: 1px solid gray">
    <div class="container">
    <div class="top-bar">
      <div class="social-bar">
        <ul class="list-unstyled">
          <li>
            <a href="facebook.com"><i class="fa-brands fa-facebook-f"></i></a>
          </li>
          <li>
            <a href="twitter.com"><i class="fa-brands fa-twitter"></i></a>
          </li>
          <li>
            <a href="instagram.com"><i class="fa-brands fa-instagram"></i></a>
          </li>
          <li>
            <a href="youtube.com"><i class="fa-brands fa-youtube"></i></a>
          </li>
        </ul>
      </div>
      <div class="account-bar">
        <ul class="list-unstyled">
          <li><a href="#">Shopping Cart</a></li>
          <li>
            <a href="#">My Account <i class="fa-solid fa-angle-down"></i></a>
            <ul class="list-unstyled d-none">
              <li>Profile</li>
              <li>Account</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          </li>
          <li class="cart">
            <a href="#"
              ><i class="fa-solid fa-cart-shopping"></i> Cart
              <i class="fa-solid fa-angle-down"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
.top-bar {
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: $font-color;
  }
  ul {
    display: flex;
    margin: 0;

    li {
      padding: 1rem;
      cursor: pointer;
      &:hover {
        background-color: lighten($menu-item, $amount: 30);
        
      }
    }
  }
  .social-bar {
    align-self: center;
  }
  .account-bar {
    align-self: center;
    color: lighten($menu-item, $amount: 30);
    a {
        color: $menu-item;
    }
    li {
      border-right: 1px solid $menu-item;
      align-self: center;
      &.cart {
          padding:  1rem 2.5rem;
          border-right: 0; 
          background-color: lighten($menu-item, $amount: 30);
          a , i{
              color: $font-color;
              padding: 0 .5rem;
          }
          &:hover{
            background-color: lighten($menu-item, $amount: 20);
          }
          
      }
       
    }
  }
}
</style>