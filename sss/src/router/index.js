import {createRouter, createWebHistory} from 'vue-router'
import CharacterView from '../views/CharacterView'
import Attributes from "../components/Attributes";
import MornComments from "../components/mornn/Comments";
import Toggles from "../components/Toggles";
import SkillList from "../components/SkillList";
import Skill from "../components/Skill";

const router = createRouter({
    history: createWebHistory('sss'),
    routes: [
        {
            path: '/',
            redirect: {name: 'character-profile', params: {character: 'sofia'}}
        },
        {
            path: '/character',
            redirect: {name: 'character-profile', params: {character: 'sofia'}}
        },
        {
            path: '/character/mornn',
            component: CharacterView,
            redirect: {name: 'mornn-profile'},
            props: {character: 'mornn'},
            children: [
                {
                    path: 'profile',
                    name: 'mornn-profile',
                    component: MornComments
                },
            ]
        },
        {
            path: '/character/:character',
            component: CharacterView,
            redirect: {name: 'character-profile'},
            props: true,
            children: [
                {
                    path: 'profile',
                    name: 'character-profile',
                    components: {default: Toggles, detailedInformation: Attributes}
                },
                {
                    path: 'skills/:skill?',
                    name: 'character-skills',
                    components: {default: SkillList, detailedInformation: Skill},
                },
            ]
        },
    ]
})

export default router
