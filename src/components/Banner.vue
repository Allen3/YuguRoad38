<template>
    <v-carousel
            hide-delimiters="true"
            height="1000"
            cycle
    >
        <v-carousel-item
                v-for="(item, i) in carousel_items"
                :key="i"
                :src="item.src"
        >
        </v-carousel-item>

    </v-carousel>
</template>

<script>
    export default {
        name: "Banner",

        data: () => ({
            carousel_items: [
                {
                    src: require('@/assets/cover_1.jpeg'),
                },
                {
                    src: require('@/assets/cover_2.jpg'),
                },
                {
                    src: require('@/assets/cover_3.jpeg'),
                },
            ],
        })
    }
</script>

<style scoped>

</style>