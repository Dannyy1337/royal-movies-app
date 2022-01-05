import VueRouter from 'vue-router'

import RouterComponent from '../components/film/RouterComponent.vue'
import FilmsList from '../components/film/FilmsList.vue'
import FilmPage from '../components/film/FilmPage.vue'
import NotFound from '../components/film/404.vue'
import FilmsLayout from '../components/film/FilmsLayout.vue'
import TimetablePage from '../components/film/TimetablePage.vue'
// import Burger from '../components/film/modal/Burger.vue'


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: RouterComponent
            // component: Burger
        },
        {
            path: '/all-films',
            name: 'filmsLayout',
            component: FilmsLayout,
            children: [
                {
                    path: '',
                    name: 'films',
                    component: FilmsList
                },
                {
                    path: ':id',
                    name: 'filmPage',
                    component: FilmPage
                },
                {
                    path: '*/*',
                    redirect: { name: 'films' }
                },
            ]
        },

        {
            path: '*',
            name: 'notFound',
            component: NotFound
        },

        {
            path: '/timetable',
            name: 'timetable',
            component: TimetablePage
        },
    ]
})