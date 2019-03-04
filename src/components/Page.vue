<template>
  <div>
    <transition enterActiveClass="animated lightSpeedIn" leaveActiveClass="animated lightSpeedOut" mode="out-in">
      <router-view></router-view>
    </transition>
    <Page :total="25" @on-change="next" :page-size="5"></Page>
  </div>
</template>
<script>
  export default{
    data () {
      return {
      }
    },
    mounted () {
      this.$router.push('/1')
    },
    methods: {
      next (e) {
        console.log(e)
        console.log(this.$router.push('/' + e))
      }
    }
  }
</script>
<style lang="css" scoped>

</style>
