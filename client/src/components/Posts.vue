<template>
    <div class="container">
        <h1>Все посты ({{posts.length}})</h1>
        <ul>
            <router-link :to="{name: 'Index'}">Главная</router-link>
            <router-link :to="{name: 'Newpost'}">Новый пост</router-link>
            <router-link :to="{name: 'Settings'}">Настройки</router-link>
        </ul>
        <div class="post" v-for="post in posts">
            <h3>
                <router-link :to="{ name: 'Post', params: { id: post._id }}">
                    {{post.title}}
                </router-link>
            </h3>
            <p>{{post.description}}</p>
            <div class="_right">
                <router-link :to="{ name: 'EditPost', params: { id: post._id }}">Редактировать</router-link>
                <button class="button-link" @click="removePost(post._id, $event)">Удалить</button>
            </div>
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
            async removePost(value, event) {
                if (event.ctrlKey) {
                    await PostsService.deletePost(value);
                    this.getPosts();
                    return true;
                }
                else {
                    if(confirm('Действительно удалить?')){
                        await PostsService.deletePost(value);
                        this.getPosts();
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        },
        mounted() {
            this.getPosts()
        }
    }

</script>