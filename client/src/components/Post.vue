<template>
    <div class="container">
        <h1>{{ post.title }}</h1>
<!--        {{ post }}-->
        <p v-for="par in post.description">
            {{par}}
        </p>
        <hr>
        <p v-if="post.tag">
            Тег: 
            <router-link :to="{ name: 'Tag', params: { id: post.tag._id }}">{{ post.tag.title }}</router-link>
        </p>
        <p v-else>Тег: не указан</p>
        
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
                    description: [],
                    tag_id: '',
                    tag: {}
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
                this.post.tag_id = response.data.tag_id;
                this.post.tag = response.data.tag;
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