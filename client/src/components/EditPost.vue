<template>
    <div class="container">
        <h1>Редактирование `{{post.title}}`</h1>
        
        <ul>
            <router-link :to="{ name: 'Posts' }">Назад к постам</router-link>
        </ul>
        
        <div class="form">
            <input type="text" placeholder="Title" v-model.trim="post.title">
            <textarea cols="30" rows="10" placeholder="Description" v-model.trim="post.description"></textarea>
            <button type="button" @click="editPost()" v-if="fields_ready">Редактировать</button>
            <p v-if="!fields_ready">Заполнены не все поля</p>
        </div>
    </div>
</template>


<script>
    
    import PostsService from '@/services/PostsService'
    export default {
        name: 'EditPostPage',
        data() {
            return {
                post: {
                    title: '',
                    description: ''
                }
            }
        },
        computed: {
            fields_ready() {
                return (this.post.title !== '' && this.post.description !== '') ? true : false;
            }
        },
        methods: {
            async getPost() {
                const response = await PostsService.getPost({
                    id: this.$route.params.id
                })
                this.post.title = response.data.title
                this.post.description = response.data.description
            },
            async editPost() {
                if (this.fields_ready) {
                    const response = await PostsService.updatePost({
                        id: this.$route.params.id,
                        title: this.post.title,
                        description: this.post.description
                    });
                    console.log(response);
                    this.$router.push({
                        name: 'Posts'
                    });
                }
            }
        },
        mounted() {
            this.getPost()
        }
    }

</script>