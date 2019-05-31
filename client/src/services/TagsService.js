import api from '@/services/api'

export default {
    fetchTags() {
        return api().get('tags')
    },
    addNewTag(params) {
        return api().post('tags', params)
    },
    getTag(params) {
        return api().get(`tags/${params.id}`)
    },
    getPostsByTag(params) {
        return api().get(`posts/tag/${params.id}`)
    },
    updateTag(params) {
        return api().put(`tags/${params.id}`, params)
    },
    deleteTag(id) {
        return api().delete(`tags/${id}`)
    }
}
