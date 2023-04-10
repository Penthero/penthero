import {createRouter, createWebHistory} from 'vue-router'
import CharacterView from '../views/CharacterView'
import Attributes from "../components/Attributes";
import SofiaStatusToggles from '../components/sofia/StatusToggles'
import AlithStatusToggles from '../components/alith/StatusToggles'
import ParethStatusToggles from '../components/pareth/StatusToggles'
import MornnComments from '../components/mornn/Comments'
import MornnDescription from '../components/mornn/Description'

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
        {
            path: '/character/mornn',
            component: CharacterView,
            redirect: {name: 'mornn-comments'},
            props: { character: 'mornn' },
            children: [
                {
                    path: 'comments',
                    name: 'mornn-comments',
                    components: { default: MornnDescription, detailedInformation: MornnComments},
                },
            ]
        },
    ]
})

export default router
