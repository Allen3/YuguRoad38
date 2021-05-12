import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        rosters: require('@/data/rosters.json'),
        shows: require('@/data/shows.json'),
        pics: require('@/data/pics'),
        items: [
            {
                text: 'Home',
                href: '#!',
            },
            {
                text: 'About',
                href: '#about',
            },
        ],
    },
})
