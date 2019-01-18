import Start from '@/components/StartPage'
import Posts from '@/components/PostsPage'
const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  }
]

export default routes