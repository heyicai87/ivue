<template>
  <div>
    <Card style="width:350px">
      <p slot="title">
        <Icon type="ios-film-outline"></Icon>
        经典电影
    </p>
      <a href="#" slot="extra" @click.prevent="changeLimit">
        <Icon type="ios-loop-strong"></Icon>
        换一换
    </a>
      <ul>
        <li v-for="item in randomMovieList">
          <a :href="item.url" target="_blank">{{ item.name }}</a>
          <span>
                    <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon><Icon type="ios-star-half" v-else></Icon>
                    {{ item.rate }}
                </span>
        </li>
      </ul>
    </Card>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        movieList: [
          {
            name: '肖申克的救赎',
            url: 'https://movie.douban.com/subject/1292052/',
            rate: 9.6
          },
          {
            name: '这个杀手不太冷',
            url: 'https://movie.douban.com/subject/1295644/',
            rate: 9.4
          },
          {
            name: '霸王别姬',
            url: 'https://movie.douban.com/subject/1291546/',
            rate: 9.5
          },
          {
            name: '阿甘正传',
            url: 'https://movie.douban.com/subject/1292720/',
            rate: 9.4
          },
          {
            name: '美丽人生',
            url: 'https://movie.douban.com/subject/1292063/',
            rate: 9.5
          },
          {
            name: '千与千寻',
            url: 'https://movie.douban.com/subject/1291561/',
            rate: 9.2
          },
          {
            name: '辛德勒的名单',
            url: 'https://movie.douban.com/subject/1295124/',
            rate: 9.4
          },
          {
            name: '海上钢琴师',
            url: 'https://movie.douban.com/subject/1292001/',
            rate: 9.2
          },
          {
            name: '机器人总动员',
            url: 'https://movie.douban.com/subject/2131459/',
            rate: 9.3
          },
          {
            name: '盗梦空间',
            url: 'https://movie.douban.com/subject/3541415/',
            rate: 9.2
          }
        ],
        randomMovieList: []
      }
    },
    methods: {
      changeLimit () {
        function getArrayItems (arr, num) {
          const tempArray = []
          for (let index in arr) {
            tempArray.push(arr[index])
          }
          const returnArray = []
          for (let i = 0; i < num; i++) {
            if (tempArray.length > 0) {
              const arrIndex = Math.floor(Math.random() * tempArray.length)
              returnArray[i] = tempArray[arrIndex]
              tempArray.splice(arrIndex, 1)
            } else {
              break
            }
          }
          return returnArray
        }
        this.randomMovieList = getArrayItems(this.movieList, 5)
      }
    },
    mounted () {
      this.changeLimit()
    }
  }
</script>
<style lang="css" scoped>

</style>
