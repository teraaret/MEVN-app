<template>
    <div class="container">
        <h1>Редактирование `{{tag.title}}`</h1>
        
        <ul>
            <router-link :to="{ name: 'Tags' }">Назад к категориям</router-link>
        </ul>
        
        <div class="form">
            <input type="text" placeholder="Title" v-model.trim="tag.title">
            <button type="button" @click="editTag()" v-if="fields_ready">Редактировать</button>
            <p v-if="!fields_ready">Заполнены не все поля</p>
        </div>
    </div>
</template>


<script>

    import TagsService from '@/services/TagsService'
    export default {
        name: 'EditTagPage',
        data() {
            return {
                tag: {
                    title: '',
                }
            }
        },
        computed: {
            fields_ready() {
                return (this.tag.title !== '' && this.tag.description !== '') ? true : false;
            }
        },
        methods: {
            async getTag() {
                const response = await TagsService.getTag({
                    id: this.$route.params.id
                })
                this.tag.title = response.data.title
            },
            async editTag() {
                if (this.fields_ready) {
                    const response = await TagsService.updateTag({
                        id: this.$route.params.id,
                        title: this.tag.title,
                    });
                    console.log(response);
                    this.$router.push({
                        name: 'Tags'
                    });
                }
            }
        },
        mounted() {
            this.getTag()
        }
    }

</script>