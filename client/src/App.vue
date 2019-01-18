<template>
    <div id="app">
        <img src="./assets/logo.png">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'App'
    }

</script>

<style>
    body {
        background-color: #222;

    }

    #app {
        width: 960px;
        margin: 0 auto;
        text-align: center;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #eee;
        margin-top: 60px;
    }
    
    a {
        color: #41B883;
    }

</style>
