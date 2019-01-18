<template>
    <div class="container">
        <h1>New post</h1>
        <router-link :to="{name: 'Index'}">Index page</router-link>
        <form>
            <input type="text" placeholder="Title" v-model.trim="post.title" autocomplete="off">
            <textarea cols="30" rows="5" placeholder="Description" v-model.trim="post.description"></textarea>
            <button type="button" @click="addPost()">Add post</button>
        </form>
    </div>
</template>


<script>
    import PostsService from '@/services/PostsService'
    
    export default {
        name: 'Newpost',
        data() {
            return {
                post: {
                    title: '',
                    description: ''
                }
            }
        },
        methods: {
            async addPost() {
                if (this.post.title !== '' && this.post.description !== '') {
                    await PostsService.addNewPost({
                        title: this.post.title,
                        description: this.post.description
                    })
                    this.$router.push({
                        name: 'Posts'
                    });
                } 
                else {
                    alert('Empty fields!')
                }
            },
            goBack() {
                this.$router.push({
                    name: 'Posts'
                })
            }
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
