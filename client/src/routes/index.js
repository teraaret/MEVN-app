import Index from '@/components/Index'

import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost'
import Post from '@/components/Post'
import EditPost from '@/components/EditPost'

import Tags from '@/components/Tags'
import NewTag from '@/components/NewTag'
import Tag from '@/components/Tag'
import EditTag from '@/components/EditTag'

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
        name: 'NewPost',
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
        path: '/tags',
        name: 'Tags',
        component: Tags
    },
    {
        path: '/tags/new',
        name: 'NewTag',
        component: NewTag
    },
    {
        path: '/tags/:id',
        name: 'Tag',
        component: Tag
    },
    {
        path: '/tags/edit/:id',
        name: 'EditTag',
        component: EditTag
    },
    
    {
        path: '/settings',
        name: 'Settings',
        component: Settings
    },
]

export default routes
