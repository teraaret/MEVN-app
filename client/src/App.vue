<template>
    <div id="app">
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