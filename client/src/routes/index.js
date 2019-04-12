import Index from '@/components/Index'
import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost'
import Post from '@/components/Post'
import EditPost from '@/components/EditPost'
import Settings from '@/components/Settings'

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
        name: 'Post',
        component: Post
    },
    {
        path: '/posts/edit/:id',
        name: 'EditPost',
        component: EditPost
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings
    },
]

export default routes
