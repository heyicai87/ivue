<template>
  <div class="row">
    <Row type="flex">
      <Col class="blue" span="12">
        <Input v-model="sex" placeholder="请输入...">
        </Input>
        <Input v-model="age" placeholder="请输入...">
        </Input>
        <Button type="primary" @click="toRoute">click me</Button>
      </Col>
      <Col span="12">
        col-十二
        <router-link to="/layout/cycle">布局页面</router-link>
      </Col>
    </Row>
    <br>
    <Row>
      <Col span="8">
        <Button type="primary" @click="toTest">click it</Button>
      </Col>
      <Col span="8">col-8</Col>
      <Col span="8">{{$route.params.id}}</Col>
    </Row>
    <br>
    <Row>
      <Col :xs="24" :sm="12" :md="6" :lg="6">
        <ul id="tree" class="ztree"></ul>
      </Col>
      <Col :xs="24" :sm="12" :md="6" :lg="6">
        <Date-picker type="date" placeholder="选择日期" :value="new Date()" :options="options1" style="width: 200px"></Date-picker>
      </Col>
      <Col :xs="24" :sm="12" :md="6" :lg="6">
        {{ num }}
      </Col>
      <Col :xs="24" :sm="12" :md="6" :lg="6">
        <!--<VueUEditor></VueUEditor>-->
        {{ message }}
      </Col>
    </Row>
  </div>
</template>
<script>
//  import '../../static/zTree_v3-master/js/jquery.ztree.core'
  export default {
//    components: {
//      VueUEditor
//    },
    data () {
      return {
        sex: '',
        age: '',
        message: '',
        num: '',
        options1: {
          disabledDate (date) {
            return date && date.valueOf() < Date.now()
//            const disabledDay = date.getDate()
//            return disabledDay === 15
          }
        }
      }
    },
    watch: {
      message () {
//        alert('update')
      }
    },
    mounted () {
      console.log('nihao')
      // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
      var setting = {
        view: {
          selectedMulti: false,
          showIcon: true,
          showTitle: true
        },
        check: {
          enable: true,
          chkboxType: { 'Y': 'ps', 'N': 'ps' }
        },
        data: {
          key: {
            name: 'name'
          },
          simpleData: {
            enable: true,
            idKey: 'id',
            pIdKey: 'superId',
            rootPId: ''
          }
        }
      }
      // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
      var zNodes = [
        {
          name: 'test1',
          open: true,
          children: [
            {name: 'test1_1'}, {name: 'test1_2'}]
        },
        {
          name: 'test2',
          open: true,
          children: [
            {name: 'test2_1'}, {name: 'test2_2'}]
        }
      ]
      console.log(window.$.fn.zTree.init)
      window.$.fn.zTree.init(window.$('#tree'), setting, zNodes)
      window.$.fn.zTree.getZTreeObj('tree').expandAll(true)
    },
    beforeRouteEnter (to, from, next) {
      console.log(from.path) // 跳转路径之前的当前路径
      console.log(to.path) // 将要跳转的路径
      console.log(to.params.id) // 跳转路径所带的参数
      console.log(from.params) // 当前路径的参数
      console.log('欢迎来到' + to.path)
      next()
      next(c => {
        c.message = from.path
        if (from.params.id) c.num = to.params.id + from.params.id
        c.num = to.params.id
      })
    },
    methods: {
      toRoute () {
        this.$store.commit('SET_AGE', this.age)
        this.$store.commit('SET_SEX', this.sex)
        this.$router.push('/layout/cycle')
      },
      toTest () {
        console.log('hey')
        console.dir(this.$ajax)
        console.dir(this.$vueAjax)
      }
    }
  }
</script>
