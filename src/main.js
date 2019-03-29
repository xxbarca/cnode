// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import iView from 'iview';
import 'iview/dist/styles/iview.css'

Vue.use(iView)

Vue.config.productionTip = false


Vue.prototype.$axios = Axios
// Axios.defaults.baseURL = 'https://cnodejs.org'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.filter('formatDate', function (str) {
    if (!str) return ''
    var date = new Date(str)
    var time = new Date().getTime() - date.getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    if (time < 0) return ''
    if (time / 1000 < 30)         return `刚刚`
    if (time / 1000 < 60)         return `${parseInt(time / 1000)}秒前`
    if (time / 60000 < 60)        return `${parseInt(time / 60000)}分钟前`
    if (time / 3600000 < 24)      return `${parseInt(time / 3600000)}小时前`
    if (time / 86400000 < 31)     return `${parseInt(time / 86400000)}天前`
    if (time / 2592000000 < 12)   return `${parseInt(time / 2592000000)}月前`
    return parseInt(time / 31536000000) + '年前'
  }
)
//处理显示板块的文字
Vue.filter('tabFormatter', function (post) {
if(post.good == true)   return '精华'
if(post.top == true)    return '置顶'
if(post.tab == 'ask')   return '问答'
if(post.tab == 'share') return '分享'
  return '招聘'
})
