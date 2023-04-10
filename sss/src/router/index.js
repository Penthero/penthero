import {createRouter, createWebHistory} from 'vue-router'
import SofiaView from '../views/SofiaView.vue'
import SofiaStatusToggles from '../components/sofia/StatusToggles.vue'

const router = createRouter({
    history: createWebHistory('sss'),
    routes: [
        {
            path: '/',
            redirect: {name: 'sofia-profile'}
        },
        {
            path: '/character',
            redirect: {name: 'sofia-profile'}
        },
        {
            path: '/character/sofia',
            component: SofiaView,
            redirect: {name: 'sofia-profile'},
            children: [
                {
                    path: 'profile',
                    name: 'sofia-profile',
                    component: SofiaStatusToggles,
                },
            ]
        },
        {
            path: '/character/alith',
            name: 'alith-profile',
            component: SofiaView,
            children: [
                {
                    path: '/character/alith/skills',
                    name: 'alith-skills',
                    component: SofiaView
                },
            ]
        },
    ]
})

export default router
