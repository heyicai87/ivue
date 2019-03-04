<template>
  <div>
    <Carousel autoplay v-model="value1" :autoplay-speed="3500">
      <Carousel-item>
        <router-link to="/">
          <img src="../assets/logo.png" alt="">
        </router-link>
      </Carousel-item>
      <Carousel-item>
        <router-link to="/grid/123">
          <img src="../assets/logo.png" alt="">
        </router-link>
      </Carousel-item>
      <Carousel-item>
        <router-link to="/layout/cycle">
          <img src="../assets/logo.png" alt="">
        </router-link>
      </Carousel-item>
      <Carousel-item>
        <router-link to="/page">
          <img src="../assets/logo.png" alt="">
        </router-link>
      </Carousel-item>
    </Carousel>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        value1: 0
      }
    }
  }
</script>
<style lang="css" scoped>

</style>
