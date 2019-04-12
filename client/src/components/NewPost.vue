<template>
    <div class="container">
        <h1>Новый пост</h1>
        <ul>
            <router-link :to="{name: 'Index'}">Главная</router-link>
            <router-link :to="{ name: 'Posts' }">Все посты</router-link>
        </ul>
        <div class="form">
            <input type="text" placeholder="Title" v-model.trim="post.title" autocomplete="off">
            <textarea cols="30" rows="5" placeholder="Description" v-model.trim="post.description"></textarea>
            <button type="button" @click="addPost()" v-if="fields_ready">Добавить</button>
        </div>
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
        computed: {
            fields_ready() {
                return (this.post.title !== '' && this.post.description !== '') ? true : false;
            }
        },
        methods: {
            async addPost() {
                if (this.fields_ready) {
                    await PostsService.addNewPost({
                        title: this.post.title,
                        description: this.post.description
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
