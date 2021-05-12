<template>
    <v-container>
        <h3 class="section-header">Gallery</h3>
        <v-row>
            <image-card v-for="(pic, i) in pics"
                        :key="i"
                        :value="pic"/>
        </v-row>
    </v-container>

</template>

<script>
    import {
        mapState,
    } from 'vuex';

    export default {
        name: "Gallery",

        components: {
            ImageCard: () => import('@/components/base/ImageCard'),
        },

        computed: {
            ...mapState(['pics']),
        }
    }
</script>

<style scoped>
    .section-header {
        font-family: 'selima', sans-serif;
        font-size: 3em;
    }
</style>