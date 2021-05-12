<template>
    <v-container>
        <h3 class="section-header">Our Roster</h3>
        <v-row>
            <info-card
                    v-for="(member, i) in members"
                    :key="member.name"
                    :size="layout[i]"
                    :value="member"
            />
        </v-row>
    </v-container>
</template>

<script>
    import {
        mapState,
    } from 'vuex'

    export default {
        name: "Roster",

        components: {
            InfoCard: () => import('@/components/base/InfoCard'),
        },

        data: () => ({
            layout: [3, 3, 3, 3, 3, 3, 3, 3, 3]
        }),

        computed: {
            ...mapState(['rosters']),

            members() {
                return this.rosters;
            }
        }
    }
</script>

<style scoped>
    .section-header {
        font-family: 'selima', sans-serif;
        font-size: 3em;
    }
</style>