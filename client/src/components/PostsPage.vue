<template>
    <div id="page">
        <h1>Posts page</h1>
        <div v-for="post in posts">
            <hr>
            <h3>{{post.title}}</h3>
            <p>{{post.description}}</p>
        </div>
        <router-link :to="{ name: 'Start' }">Index Page</router-link>
    </div>
</template>


<script>
  import PostsService from '@/services/PostsService'
  export default {
    name: 'PostsPage',
    data () {
      return {
        posts: []
      }
    },
    methods: {
      async getPosts () {
        const response = await PostsService.fetchPosts()
        this.posts = response.data
      }
    },
    mounted () {
      this.getPosts()
    }
  }
</script>