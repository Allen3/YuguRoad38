<template>
    <v-app>
        <core-bar></core-bar>

        <v-main>
            <section id="carousel">
                <core-banner></core-banner>
            </section>
            <section id="about">
                <core-info></core-info>
            </section>

            <section id="roster">
                <core-roster></core-roster>
            </section>

            <section id="show">
                <core-show></core-show>
            </section>

            <section id="gallery">
                <core-gallery></core-gallery>
            </section>

            <section id="footer">
                <core-footer></core-footer>
            </section>

        </v-main>

        <v-footer>

        </v-footer>
    </v-app>
</template>

<script>

    export default {
        name: 'App',

        components: {
            CoreBar: () => import('@/components/AppBar'),
            CoreRoster: () => import('@/components/Roster'),
            CoreBanner: () => import('@/components/Banner'),
            CoreInfo: () => import('@/components/About'),
            CoreShow: () => import('@/components/Show'),
            CoreGallery: () => import('@/components/Gallery'),
            CoreFooter: () => import('@/components/Footer'),
        },
    };
</script>

<style>
    @font-face {
        font-family: "selima";
        src: url("../public/css/fonts/selima.woff") format("woff"),
        url("../public/css/fonts/selima.otf") format("opentype");
    }
</style>