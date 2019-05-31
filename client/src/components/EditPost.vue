<template>
    <div class="container">
        <h1>Редактирование `{{post.title}}`</h1>
        {{ post }}
        <ul>
            <router-link :to="{ name: 'Posts' }">Назад к постам</router-link>
        </ul>
        
        <div class="form">
            <input type="text" placeholder="Title" v-model.trim="post.title">
            <textarea cols="30" rows="10" placeholder="Description" v-model.trim="post.description"></textarea>
            <select v-model.trim="post.tag_id" v-if="tags.length">
                <option v-for="tag in tags" :value="tag._id">{{ tag.title }}</option>
            </select>
            
            <button type="button" @click="editPost()" v-if="fields_ready">Редактировать</button>
            <p v-if="!fields_ready">Заполнены не все поля</p>
        </div>
    </div>
</template>


<script>
    
    import TagsService from '@/services/TagsService';
    import PostsService from '@/services/PostsService';
    
    export default {
        name: 'EditPostPage',
        data() {
            return {
                post: {
                    title: '',
                    description: '',
                    tag_id: ''
                },
                tags: []
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
            async getPost() {
                const response = await PostsService.getPost({
                    id: this.$route.params.id
                })
                this.post.title = response.data.title
                this.post.description = response.data.description
                this.post.tag_id = response.data.tag_id
            },
            async editPost() {
                if (this.fields_ready) {
                    const response = await PostsService.updatePost({
                        id: this.$route.params.id,
                        title: this.post.title,
                        description: this.post.description,
                        tag_id: this.post.tag_id
                    });
                    console.log(response);
                    var target_id = this.$route.params.id;
                    this.$router.push( '/posts/' + target_id );
                }
            }
        },
        mounted() {
            this.getTags();
            this.getPost();
        }
    }

</script>