<template>
    <v-footer
            class="justify-center"
            color="#292929"
            height="200"
    >
        <div class="title font-weight-light grey--text text--lighten-1 text-center">
            &copy; {{ (new Date()).getFullYear() }} — Made with 💜 by Allen_3
        </div>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>