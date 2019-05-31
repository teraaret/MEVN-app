<template>
    <div class="container">
        <h1>Все посты по категории `{{ tag.title }}`</h1>
        <ul>
            <router-link :to="{name: 'Posts'}">Назад к постам</router-link>
            <router-link :to="{name: 'Tags'}">Назад к тегам</router-link>
        </ul>
<!--        {{ tag }}-->
<!--        {{ posts }}-->
        <p v-if="!posts.length" class="error">В этой категории нет постов.</p>
        <div class="post" v-for="post in posts" v-if="posts.length">
            <h3>
                <router-link :to="{ name: 'Post', params: { id: post._id }}">
                    {{post.title}}
                </router-link>
            </h3>
            <p>{{post.description}}</p>
            <hr>
            <p>
                Тег:
                <router-link :to="{ name: 'Tag', params: { id: post.tag._id }}">{{ post.tag.title }}</router-link>
            </p>
            
            <div class="_right">
                <router-link :to="{ name: 'EditPost', params: { id: post._id }}">Редактировать</router-link>
                <button class="button-link" @click="removePost(post._id, $event)">Удалить</button>
            </div>
        </div>
    </div>
</template>


<script>
    
    import PostsService from '@/services/PostsService';
    import TagsService from '@/services/TagsService';
    
    export default {
        name: 'PostsPage',
        data() {
            return {
                tag: {
                    id: "",
                    title: ""
                },
                posts: []
            }
        },
        computed: {
        },
        methods: {
            async getTag() {
                const response = await TagsService.getTag({
                    id: this.$route.params.id
                });
                this.tag.id = response.data.tag._id;
                this.tag.title = response.data.tag.title;
                
                this.posts = response.data.posts;
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
            this.getTag()
        }
    }

</script>