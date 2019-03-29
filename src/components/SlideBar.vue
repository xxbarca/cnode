<template>
    <div class="autherinfo">
        <div class="authersummay">
            <div class="topbar">作者</div>
            <router-link :to='{name: "user_info", params: {name: userInfo.loginname}}'>
                <img :src="userInfo.avatar_url" alt="">
            </router-link>
        </div>

        <div class="recent_topics">
            <div class="topbar">最近主题</div>
            <ul>
              <li v-for='(item, index) in topiclimitby5' :key="index">
                <router-link :to='{name: "post_content", params: {id: item.id, name: item.author.loginname}}'>
                  {{ item.title }}
                </router-link>
              </li>
            </ul>
        </div>

        <div class="recent_replies">
            <div class="topbar">最近回复</div>
            <ul>
              <li v-for='(item, index) in replylimitby5' :key="index">
                <router-link :to='{name: "post_content", params: {id: item.id, name: item.author.loginname}}'>
                  {{ item.title }}
                </router-link>
              </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SlideBar',
    data() {
        return {
            userInfo: {}
        }
    },
    methods: {
        getUserInfo() {
            this.$axios.get(`/api/v1/user/${this.$route.params.name}`).then(res => {
                if (res.data.success === true) {
                  console.log(res.data.data)
                  this.isLoading = false
                  this.userInfo = res.data.data
                }
                }).catch(error => {
                    console.log(error)
                })
            }
    },
    computed: {
      topiclimitby5() {
        if (this.userInfo.recent_topics > 5) {
          return this.userInfo.recent_topics.slice(0, 5)
        }
        return this.userInfo.recent_topics
      },
      replylimitby5() {
        if (this.userInfo.recent_replies > 5) {
          return this.userInfo.recent_replies.slice(0, 5)
        }
        return this.userInfo.recent_replies

      }
    },
    beforeMount() {
        this.getUserInfo()
    }
}
</script>

<style scoped>

.authersummay, .recent_replies, .recent_topics {
    background-color: #fff;
  }
  .autherinfo {
    width: 328px;
    float: right;
    margin-top: 0;
  }
  li{
    padding: 3px 0 ;
  }
  .recent_replies ul, .recent_topics ul {
    margin-top: 0px;
    margin-bottom: 0px;
    list-style: none;
    padding-left: 14px;
  }

  ul a {
    font-size: 12px;
    text-decoration: none;
    color: #778087;
  }

  .topbar {
    /* padding: 10px; */
    background-color: #f6f6f6;
    height: 16px;
    font-size: 12px;
    /* margin-top: 10px; */
  }

  img {
    height: 48px;
    width: 48px;
    border-radius: 3px;
    margin: 10px;
  }

  .loginname {
    width: 100px;
    float: right;
    margin-top: 22px;
    margin-right: 159px;
    font-size: 14px;
  }

  .loginname a {
    text-decoration: none;
    color: #778087;
  }

  .authersummay .topbar {
    margin-top: 0px;
  }

</style>
