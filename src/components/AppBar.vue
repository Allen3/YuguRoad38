<template>
    <v-app-bar app flat
    >
        <v-container class="mx-auto py-0"
        >
            <v-row align="center">
                <v-img
                        :src="require('@/assets/logo.jpg')"
                        class="mr-5"
                        contain
                        height="48"
                        width="48"
                        max-width="48"
                />

                <v-toolbar-title class="bar-title font-weight-black">
                    YuguRoad38
                </v-toolbar-title>

                <v-spacer></v-spacer>
                <v-btn
                        v-for="(item,i) in items"
                        :key="i"
                        class="mx-1"
                        text
                >
                    {{ item }}
                </v-btn>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script>
    export default {
        name: "AppBar",

        data: () => ({
            items: [
                "home",
                "roster",
                "show",
                "gallery",
            ]
        }),
    }
</script>

<style scoped>
    .bar-title {
        font-family: 'selima', sans-serif;
        font-size: 3.2em;
    }
</style>