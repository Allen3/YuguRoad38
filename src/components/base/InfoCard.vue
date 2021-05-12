<template>
    <v-col
            cols="12"
            :md="size === 2 ? 6 : size === 3 ? 4 : undefined"
    >
        <v-card elevation="7"
                :height="value.prominent ? 450 : 350"
                color="grey lighten-1"
                dark>
            <v-img
                    :src="require(`@/assets/bios/${value.hero}`)"
                    height="100%"
                    gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
            >
                <v-row
                        class="fill-height text-right ma-0"
                >
                    <v-col cols="12">
                        <v-chip
                                v-for="label in value.labels"
                                :key="label"
                                label
                                class="ml-2 mb-2 text-uppercase"
                                color="grey darken-3"
                                text-color="white"
                                small
                                @click.stop=""
                        >
                            {{ label }}
                        </v-chip>

                        <h2 class="text-h4 font-weight-bold mb-2">
                            {{ value.name }}
                        </h2>


                        <h3 class="subtitle-1 font-weight-bold mb-2">
                            {{ value.title + ' ' + value.role}}
                        </h3>

                        <div class="caption">
                            {{ value.description }}<br>
                        </div>
                    </v-col>

                    <v-col align-self="end">
                        <v-chip
                                class="ma-0"
                                color="primary"
                                label
                                small
                                @click.stop=""
                        >                        
                        <div v-if="value.gender === 'M' ">
                            I  adore  him!
                        </div>
                        <div v-else>
                            I  adore  her!
                        </div>                
                        </v-chip>
                    </v-col>
                </v-row>

            </v-img>

        </v-card>

    </v-col>
</template>

<script>
    export default {
        name: "InfoCard",

        props: {
            size: {
                type: Number,
                required: true,
            },
            value: {
                type: Object,
                default: () => ({}),
            },
        },
    }
</script>

<style scoped>
    .v-image__image {
        transition: .3s linear;
    }
</style>