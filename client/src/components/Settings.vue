<template>
    <div class="container">
        <h1>Настройки</h1>
        <ul>
            <router-link :to="{name: 'Index'}">Главная</router-link>
            <router-link :to="{name: 'Posts'}">Все посты</router-link>
        </ul>
        <div class="settings">
            <label for="theme">Цветовая схема:
                <select id="theme" @change="setTheme()">
                    <option value="dark">Dark night</option>
                    <option value="light">Milk islands</option>
                    <option value="rainy">Rainy morning</option>
                </select>
            </label>
        </div>
    </div>
</template>


<script>

export default {
    data () {
        return {
            theme: null
        }
    },
    methods: {
        setTheme() {
            alert('y');
        }
    }
}

</script>
