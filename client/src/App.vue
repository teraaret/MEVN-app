<template>
    <div id="app">
        <ul>
            <router-link :to="{name: 'Index'}">Главная</router-link>
            <router-link :to="{name: 'Posts'}">Посты</router-link>
            <router-link :to="{name: 'Tags'}">Категории</router-link>
            <router-link :to="{name: 'Settings'}">Настройки</router-link>
        </ul>
        <img src="./assets/img/sun.png">
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>