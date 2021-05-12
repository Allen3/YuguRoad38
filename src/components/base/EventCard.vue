<template>
    <v-col cols="12" :md="12">
        <v-card elevation="5"
                :height="300"
                dark>
            <v-row class="fill-height ma-0">
                <v-col cols="12 ">

                    <v-chip
                            label
                            class="ml-2 mb-2 text-uppercase float-right"
                            color="grey darken-3"
                            text-color="white"

                            medium
                    >
                        {{ value.location }}
                    </v-chip>

                    <v-chip
                            label
                            class="ml-2 mb-2 text-uppercase float-right"
                            color="grey darken-3"
                            text-color="white"
                            medium
                    >
                        {{ value.date }}
                    </v-chip>

                    <v-list two-line class="mt-10">
                        <template v-for="song in value.songs"
                                  :song="song"
                        >
                            <v-list-item two-line :key="song">
                                <v-list-item-content>
                                    <v-list-item-title>{{ song.name }}</v-list-item-title>
                                    <v-list-item-subtitle>{{ song.composer }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                    </v-list>
                </v-col>
            </v-row>

        </v-card>
    </v-col>
</template>

<script>
    export default {
        name: "Card",

        props: {
            value: {
                type: Object,
                default: () => ({}),
            },
        },
    }
</script>

<style scoped>

</style>