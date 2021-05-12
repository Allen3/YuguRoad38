<template>
    <v-container>
        <h3 class="section-header">Shows</h3>
        <v-row>
            <event-card v-for="(show, i) in shows"
                        :key="i"
                        :value="show"
            ></event-card>
        </v-row>
    </v-container>
</template>

<script>
    import {
        mapState,
    } from 'vuex'

    export default {
        name: "Show",

        components: {
            EventCard: () => import('@/components/base/EventCard'),
        },

        computed: {
            ...mapState(['shows'])
        }
    }
</script>

<style scoped>
    .section-header {
        font-family: 'selima', sans-serif;
        font-size: 3em;
    }
</style>