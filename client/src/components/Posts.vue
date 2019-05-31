<template>
    <div class="container">
        <h1>Все посты ({{posts.length}})</h1>
        <ul>
            <router-link :to="{name: 'NewPost'}">Новый пост</router-link>
        </ul>
<!--        {{ posts }}-->
        <p v-if="ready && !posts.length">Пока что не создано ни одного поста.</p>
        <div class="post" v-for="post in posts" v-if="posts.length && ready">
<!--            {{ post }}-->
            <h3>
                <router-link :to="{ name: 'Post', params: { id: post._id }}">
                    {{post.title}}
                </router-link>
            </h3>
            <p>{{post.description}}</p>
            <hr>
            <p v-if="post.tag">
                Тег:
                <router-link :to="{ name: 'Tag', params: { id: post.tag._id }}">{{ post.tag.title }}</router-link>
            </p>
            <p v-else>Тег: не указан</p>
            
            <div class="_right">
                <router-link :to="{ name: 'EditPost', params: { id: post._id }}">Редактировать</router-link>
                <button class="button-link" @click="removePost(post._id, $event)">Удалить</button>
            </div>
        </div>
    </div>
</template>


<script>
    
    import PostsService from '@/services/PostsService';
    
    export default {
        name: 'PostsPage',
        data() {
            return {
                posts: [],
                ready: false
            }
        },
        methods: {
            async getPosts() {
                const response = await PostsService.fetchPosts();
                this.posts = response.data.posts;
                this.ready = true;
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
        created() {
            this.getPosts()
        }
    }

</script>