<template>
    <div class="container">
        <h1>{{ msg }}</h1>
        <ul>
            <li>
                <router-link :to="{name: 'Newpost'}">New post</router-link> | 
                <router-link :to="{ name: 'Posts' }">Posts Page</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Index page'
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
