<template>
    <div class="container">
        <h1>Настройки</h1>
        <div class="settings">
            <label for="theme">Цветовая схема:
                <select id="theme" @change="setTheme()" v-model="theme">
                    <option value="dark">Dark night</option>
                    <option value="milky">Milky islands</option>
                    <option value="rainy">Rainy morning</option>
                </select>
            </label>
        </div>
    </div>
</template>


<script>

//    import PostsService from '@/services/PostsService'
    export default {
        data () {
            return {
                theme: this.$cookie.get('theme')
            }
        },
        methods: {
            setTheme() {
                this.$cookie.set('theme', this.theme, 1);
                this.$router.go();
//                this.$router.push({
//                    name: 'Settings'
//                })
            }
        }
    }

</script>
