<template>
  <div class="container">
    <nav>
      <div class="logo-navbar">
        <img
          src="../../public/img/classic_shop_logo2x.png"
          class="logo-nav"
          alt="logo navbar"
        />
      </div>
      <div class="menu-items">
        <ul class="list-unstyled">
          <li><a href="#">Home <i class="fa-solid fa-angle-down"></i></a></li>
          <li><a href="#">Shop <i class="fa-solid fa-angle-down"></i></a></li>
          <li>
            <a href="#">Products <i class="fa-solid fa-angle-down"></i></a>
          </li>
          <li>
            <a href="#">Categories <i class="fa-solid fa-angle-down"></i></a>
          </li>
          <li><a href="#">News</a></li>
          <li>
            <a href="#">Elements <i class="fa-solid fa-angle-down"></i></a>
          </li>
          <li>
            <a href="#" class="btn btn-primary text-uppercase">shop now!</a>
          </li>
          <li>
            <input
              type="text"
              placeholder="Search articles.."
              class="searchInput"
            />
            <span class="search"><i class="fa-solid fa-magnifying-glass"></i></span>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
nav {
  display: flex;

  .logo-navbar {
      align-self: center;

        img {
          max-width: 50%;
            }
    }
  .menu-items {
    ul {
      display: flex;
      margin: 0;

      li {
        padding: 2rem 1rem;
        align-self: center;
        position:relative;

            a, i {
            text-decoration: none;
            color: $menu-item;
            }
            a.btn {
                color: $white;
                border-radius: 20px;
            }
            &:hover:before {
                content: '';
                top: -7px;
                position: absolute;
                left: 0;
                right: 0;
                height: 4px;
                background-color: $myprimary-color;
            }
      }
    }
  }
}
</style>