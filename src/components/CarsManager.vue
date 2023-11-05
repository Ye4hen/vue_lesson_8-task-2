<template>
    <div class="secondary__container">
        <cars-filter />
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        <cars-list :cars-data="filterCarsList" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CarsFilter from './CarsFilter.vue'
import CarsList from './CarsList.vue'
export default {
    components: { CarsList, CarsFilter },
    name: 'CarsManager',

    computed: {
        ...mapGetters(['filterCarsList', 'errorMessage']),
    },

    methods: {
        ...mapActions(['getCarsList']),
    },

    created() {
        this.getCarsList()
    },
}
</script>

<style lang="scss" scoped>
</style>