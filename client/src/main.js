// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueCookie from 'vue-cookie';
Vue.use(VueCookie);

import App from './App'
import router from './router'



Vue.config.productionTip = false

/* eslint-disable no-new */
var app = new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>',
    data: {
        theme: null
    },
    methods: {
        render_styles() {
            if ( this.$cookie.get('theme') == undefined ) {
                this.$cookie.set('theme', 'dark', 1);
            }
            this.theme = this.$cookie.get('theme');
//            require('@/assets/less/style.less');
            require('@/assets/less/theme/'+this.theme+'.less');
            require('@/assets/less/transitions.less');
        }
    },
    created() {
        this.render_styles();
    }
})
