import ScrollHandlerMixin from '../mixins/scrollHandler'


export default {
    instal(Vue) {
        Vue.mixin(ScrollHandlerMixin),
            Vue.prototype.$log = function () {
                console.log('simplePlugin works')
            }
    }
}