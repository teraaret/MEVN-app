<template>
    <div class="container">
        <h1><sup>MEVN</sup><sub>APP</sub></h1>
        <p>Powered by express, mongo, vue & node</p>
        <ul>
            <router-link :to="{name: 'Newpost'}">Новый пост</router-link>
            <router-link :to="{name: 'Posts'}">Все посты</router-link>
            <router-link :to="{name: 'Settings'}">Настройки</router-link>
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