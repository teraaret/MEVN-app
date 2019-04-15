<template>
    <div class="container">
        <h1>Категории ({{tags.length}})</h1>
        
        <ul>
            <router-link :to="{name: 'NewTag'}">Новая категория</router-link>
        </ul>
        
        <div class="post" v-for="tag in tags">
            <h3>
                <router-link :to="{ name: 'Tag', params: { id: tag._id }}">
                    {{tag.title}}
                </router-link>
            </h3>
            <div class="_right">
                <router-link :to="{ name: 'EditTag', params: { id: tag._id }}">Редактировать</router-link>
                <button class="button-link" @click="removeTag(tag._id, $event)">Удалить</button>
            </div>
        </div>
        
        <br v-if="tags.length == 0">
        <p v-if="tags.length == 0">Нет ни одной категории.</p>
    </div>
</template>


<script>

    import TagsService from '@/services/TagsService'
    
    export default {
        name: 'TagsPage',
        data() {
            return {
                tags: []
            }
        },
        methods: {
            async getTags() {
                const response = await TagsService.fetchTags()
                this.tags = response.data.tags
            },
            async removeTag(value, event) {
                if (event.ctrlKey) {
                    await TagsService.deleteTag(value);
                    this.getTags();
                    return true;
                }
                else {
                    if(confirm('Действительно удалить?')){
                        await TagsService.deleteTag(value);
                        this.getTags();
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        },
        mounted() {
            this.getTags()
        }
    }

</script>
