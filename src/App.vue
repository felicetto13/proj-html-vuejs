<template>
  <div id="app">
    <!-- component header; other component inside are TopBar and TheNavbar  -->
    <TheHeader>
      <!-- TopBar component  -->

      <!-- TheNavbar -->
    </TheHeader>

    <!-- component main -->
    <TheMain></TheMain>

    <!-- component Footer -->
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue"
import TheMain from "./components/TheMain.vue"
import TheFooter from "./components/TheFooter.vue"

export default {
  name: 'App',
  components: {
    TheHeader, TheMain, TheFooter
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main";
#app{
  font-size: .9rem;
}
</style>
