<template>
  <div class="layout">
    <Menu mode="horizontal" theme="dark" activeName="1" @on-select="select">
      <div class="layout-logo"></div>
      <div class="layout-nav">
        <Menu-item name="1">
          <Icon type="ios-navigate"></Icon>
          导航一
        </Menu-item>
       <Menu-item name="2">
          <Icon type="ios-keypad"></Icon>
          导航二
       </Menu-item>
        <Menu-item name="3">
          <Icon type="ios-analytics"></Icon>
          导航三
        </Menu-item>
        <Menu-item name="4">
          <Icon type="ios-paper"></Icon>
          导航4
        </Menu-item>
      </div>
    </Menu>
    <Tabs value="name1" :animated="false">
      <Tab-pane label="标签一" name="name1">
          <Row id="tab1" class="fade active">
            <Col :xs="24" :sm="12" :md="6" :lg="6" class="padding">
            <Input v-model="num1" placeholder="请输入...">
            </Input>
            </Col>
            <Col :xs="24" :sm="12" :md="6" :lg="6">
              col-6
              <router-link to="/Grid/123">回到Grid页面</router-link>
            </Col>
            <Col :xs="24" :sm="12" :md="6" :lg="6">
              <input type="text" id="datepicker" @click="choseTime">
            </Col>
            <Col :xs="24" :sm="12" :md="6" :lg="6">col-6</Col>
          </Row>
      </Tab-pane>
      <Tab-pane label="标签二" name="name2">
          <Row id="tab2" class="fade">
            <Col :xs="24" :sm="12" :md="6" :lg="6" class="padding">
              <Input @on-focus="dateChose" @on-click="dateChoice" icon="ios-clock-outline" id="date" v-model="num2" placeholder="ss.ss.ss.">
              </Input>
            </Col>
            <Col :xs="24" :sm="12" :md="6" :lg="6">
              col-6
              <router-link to="/Grid/123">回到Grid页面</router-link>
            </Col>
            <Col :xs="24" :sm="12" :md="6" :lg="6">{{ age }}</Col>
            <Col :xs="24" :sm="12" :md="6" :lg="6">{{ sex }}</Col>
          </Row>
      </Tab-pane>
      <Tab-pane label="标签三" name="name3">
        <div id="tab3">
          <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
        </div>
      </Tab-pane>
    </Tabs>
  </div>
</template>
<script>
  import QrcodeVue from 'qrcode.vue'
  import { mapState } from 'vuex'
//  import '../../static/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min'
  export default {
    components: {
      QrcodeVue
    },
    data () {
      return {
        num1: '',
        num2: '',
        value: 'https://www.baidu.com',
        size: 100
      }
    },
    computed: {
      ...mapState({
        age: state => state.age,
        sex: state => state.sex
      })
    },
    methods: {
      select (e) {
        console.log(e)
//        this.$router.push(e)
        console.log(window.$('#tab' + e).attr('id'))
        console.log(window.$.fn)
//        console.log(this.jquery('#tab' + e).attr('id'))
        console.log(this.getId('#tab' + e, 'id'))
        this.$router.push('/public/18')
      },
      choseTime () {
        window.$('#datepicker').datetimepicker({
          format: 'yyyy-mm-dd hh:ii'
        })
      },
      dateChoice () {
        console.log('hello')
        window.$('#date').datetimepicker({
          format: 'yyyy-mm-dd hh:ii'
        })
      },
      dateChose () {
        console.log('hi')
        window.$('#date').datetimepicker({
          format: 'yyyy-mm-dd hh:ii'
        })
      }
    }
  }
</script>
