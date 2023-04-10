import {createRouter, createWebHistory} from 'vue-router'
import CharacterView from '../views/CharacterView'
import SofiaStatusToggles from '../components/sofia/StatusToggles.vue'
import Attributes from "../components/Attributes";
import AlithStatusToggles from '../components/alith/StatusToggles.vue'

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
    ]
})

export default router
