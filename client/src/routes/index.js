import Index from '@/components/IndexPage'
import Posts from '@/components/PostsPage'
import NewPost from '@/components/NewPostPage'
import EditPost from '@/components/EditPostPage'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/posts',
        name: 'Posts',
        component: Posts
    },
    {
        path: '/posts/new',
        name: 'Newpost',
        component: NewPost
    },
    {
        path: '/posts/:id',
        name: 'EditPost',
        component: EditPost
    }
]

export default routes
