import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import PostList from '../components/PostList'
import UserInfo from '../components/UserInfo'
import SlideBar from '../components/SlideBar'
import NewUserGuide from '../components/NewUserGuide'

Vue.use(Router)

export default new Router({
    routes: [{
		name: 'root',
		path: '/',
		components: {
			main: PostList
		}
	}, {
		name: 'post_content',
		path: '/topic/:id&auther=:name',
		components: {
			main: Article,
			slideBar: SlideBar
		}
	}, {
		name: 'user_info',
		path: '/user_info/:name',
		components: {
			main: UserInfo
		}
	}, {
		name: 'newUserGuide',
		path: '/newUserGuide',
		components: {
			main: NewUserGuide
		}
	}]
})
