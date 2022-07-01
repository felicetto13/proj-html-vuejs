<template>
  <header>
    <TopBar></TopBar>
  </header>
</template>

<script>
import TopBar from "./TopBar.vue";
export default {
  components: { TopBar },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
header {
    border-bottom: 1px solid $menu-item;
}
</style>