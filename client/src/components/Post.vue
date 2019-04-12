<template>
    <div class="container">
        <h1>{{ post.title }}</h1>
        <p v-for="par in post.description">
            {{par}}
        </p>
        
        <ul>
            <router-link :to="{name: 'Index'}">Главная</router-link>
            <router-link :to="{name: 'EditPost', params: { id: post.id }}">Редактировать</router-link>
            <router-link :to="{name: 'Posts'}">Все посты</router-link>
        </ul>
    </div>
</template>


<script>
    
    import PostsService from '@/services/PostsService'
    export default {
        data () {
            return {
                post: {
                    id: '',
                    title: '',
                    description: []
                }
            }
        },
        methods: {
            async getPost() {
                const response = await PostsService.getPost({
                    id: this.$route.params.id
                });
                this.post.id = response.data._id;
                this.post.title = response.data.title;
                let breaks = /\n/gi;
                this.post.description = response.data.description.split("\n");
            },
        },
        mounted() {
            this.getPost()
        }
    }
    
</script>


<style scoped>

.container{
    
}

</style>