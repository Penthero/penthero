import {createRouter, createWebHistory} from 'vue-router'
import CharacterView from '../views/CharacterView'
import Attributes from "../components/Attributes";
import SofiaStatusToggles from '../components/sofia/StatusToggles.vue'
import AlithStatusToggles from '../components/alith/StatusToggles.vue'
import ParethStatusToggles from '../components/pareth/StatusToggles.vue'

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
            component: CharacterView,
            redirect: {name: 'sofia-profile'},
            props: { character: 'sofia' },
            children: [
                {
                    path: 'profile',
                    name: 'sofia-profile',
                    components: { default: SofiaStatusToggles, detailedInformation: Attributes},
                },
            ]
        },
        {
            path: '/character/alith',
            component: CharacterView,
            redirect: {name: 'alith-profile'},
            props: { character: 'alith' },
            children: [
                {
                    path: 'profile',
                    name: 'alith-profile',
                    components: { default: AlithStatusToggles, detailedInformation: Attributes},
                },
            ]
        },
        {
            path: '/character/pareth',
            component: CharacterView,
            redirect: {name: 'pareth-profile'},
            props: { character: 'pareth' },
            children: [
                {
                    path: 'profile',
                    name: 'pareth-profile',
                    components: { default: ParethStatusToggles, detailedInformation: Attributes},
                },
            ]
        },
    ]
})

export default router
