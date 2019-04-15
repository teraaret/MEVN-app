<template>
    <div class="container">
        <h1>Новая категория</h1>
        <ul>
            <router-link :to="{ name: 'Tags' }">Назад к категориям</router-link>
        </ul>
        <div class="form">
            <input type="text" placeholder="Title" v-model.trim="tag.title" autocomplete="off">
            <button type="button" @click="addTag()" v-if="fields_ready">Добавить</button>
        </div>
    </div>
</template>


<script>

    import TagsService from '@/services/TagsService'
    
    export default {
        name: 'Newtag',
        data() {
            return {
                tag: {
                    title: '',
                }
            }
        },
        computed: {
            fields_ready() {
                return (this.tag.title !== '') ? true : false;
            }
        },
        methods: {
            async addTag() {
                if (this.fields_ready) {
                    await TagsService.addNewTag({
                        title: this.tag.title,
                    })
                    this.$router.push({
                        name: 'Tags'
                    });
                } 
                else {
                    alert('Заполнены не все поля')
                }
            },
            goBack() {
                this.$router.push({
                    name: 'Tags'
                })
            }
        }
    }

</script>