<template>
    <div class="container">
        <h1>Новый пост</h1>
        <ul>
            <router-link :to="{ name: 'Posts' }">Назад к постам</router-link>
        </ul>
<!--        {{ tags }}-->
        <div class="form">
            <input type="text" placeholder="Title" v-model.trim="post.title" autocomplete="off">
            <textarea cols="30" rows="5" placeholder="Description" v-model.trim="post.description"></textarea>
            <p v-if="!tags.length">Не создан ни один тег.</p>
            <select v-model.trim="post.tag_id" v-if="tags.length">
                <option v-for="tag in tags" :value="tag._id">{{ tag.title }}</option>
            </select>
            
            <button type="button" @click="addPost()" v-if="fields_ready">Добавить</button>
        </div>
    </div>
</template>


<script>
    
    import TagsService from '@/services/TagsService';
    import PostsService from '@/services/PostsService';
    
    export default {
        name: 'Newpost',
        data() {
            return {
                tags: [],
                post: {
                    title: '',
                    description: '',
                    tag_id: ''
                }
            }
        },
        computed: {
            fields_ready() {
                return (this.post.title && this.post.description && this.post.tag_id) ? true : false;
            }
        },
        methods: {
            async getTags() {
                const response = await TagsService.fetchTags();
                this.tags = response.data.tags;
            },
            async addPost() {
                if (this.fields_ready) {
                    await PostsService.addNewPost({
                        title: this.post.title,
                        description: this.post.description,
                        tag_id: this.post.tag_id,
                    })
                    this.$router.push({
                        name: 'Posts'
                    });
                } 
                else {
                    alert('Заполнены не все поля')
                }
            },
            goBack() {
                this.$router.push({
                    name: 'Posts'
                })
            }
        },
        mounted() {
            this.getTags();
        }
    }

</script>