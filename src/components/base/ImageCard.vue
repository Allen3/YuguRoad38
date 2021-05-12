<template>
    <v-col cols="12" :md="4">
        <v-card>
            <v-img
                    :src="require(`@/assets/galleries/${value.hero}`)"
                    height="350"
                    gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
            ></v-img>
        </v-card>
    </v-col>
</template>

<script>
    export default {
        name: "ImageCard",

        props: {
            value: {
                type: Object,
                default: () => ({}),
            },
        }
    }
</script>

<style scoped>

</style>