<template>
    <div class="container">
        <h1>Posts page</h1>
        <router-link :to="{ name: 'Index' }">Index Page</router-link> |
        <router-link :to="{name: 'Newpost'}">New post</router-link>
        <div class="post" v-for="post in posts">
            <h3>{{post.title}}</h3>
            <p>{{post.description}}</p>
            <router-link :to="{ name: 'EditPost', params: { id: post._id }}">edit</router-link>
            <button type="button" @click="removePost(post._id)">delete</button>
            <hr>
        </div>
    </div>
</template>


<script>
    import PostsService from '@/services/PostsService'
    export default {
        name: 'PostsPage',
        data() {
            return {
                posts: []
            }
        },
        methods: {
            async getPosts() {
                const response = await PostsService.fetchPosts()
                this.posts = response.data.posts
            },
            async removePost(value) {
                await PostsService.deletePost(value)
                this.getPosts()
            }
        },
        mounted() {
            this.getPosts()
        }
    }

</script>

<style scoped="" lang="less">

    .container {
        .post {
            margin-top: 20px;
            text-align: left;
        }
        
        button {
            color: #41B883;
            border: none;
            background-color: transparent;
            font-size: 16px;
            text-decoration: underline;
            cursor: pointer;
        }
    }
    
</style>