<template>
    <div class="container">
        <h1>Edit post `{{post.title}}`</h1>
        <router-link :to="{name: 'Index'}">Index page</router-link>
        <form @submit.prevent="editPost()">
            <input type="text" placeholder="Title" v-model.trim="post.title">
            <textarea cols="30" rows="10" placeholder="Description" v-model.trim="post.description"></textarea>
            <button type="submit">edit post</button>
        </form>
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
        methods: {
            async getPost() {
                const response = await PostsService.getPost({
                    id: this.$route.params.id
                })
                this.post.title = response.data.title
                this.post.description = response.data.description
            },
            async editPost() {
                if (this.post.title !== '' && this.post.description !== '') {
                    await PostsService.updatePost({
                        id: this.$route.params.id,
                        title: this.post.title,
                        description: this.post.description
                    })
                    this.$router.push({
                        name: 'Posts'
                    })
                }
            }
        },
        mounted() {
            this.getPost()
        }
    }

</script>


<style scoped lang="less">
    .container {
        form {
            margin-top: 20px;
            text-align: center;
            input, textarea, button {
                background-color: #555;
                opacity: 0.8;
                margin: 0 auto;
                display: block;
                width: 400px;
                border: none;
                padding: 5px;
                color: white;
                border-top: 2px solid #111;
                &:hover {
                    opacity: 1;
                }
            }
            button {
                width: 410px;
            }
        }
    }

</style>
