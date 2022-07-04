<template>
  <header>
    <TopBar></TopBar>
    <TheNavbar></TheNavbar>
  </header>
</template>

<script>
import TheNavbar from './TheNavbar.vue';
import TopBar from "./TopBar.vue";
export default {
  components: { TopBar, TheNavbar },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
header {
  box-shadow: 1px 1px 1px 10px black;
  position: sticky;
}
</style>