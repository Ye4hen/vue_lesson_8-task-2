<template>
    <div class="filters">
        <div class="filters__item">
            <label>
                Тип транспорта
                <select v-model="autoTypeSelect">
                    <option v-for="autoType in autoTypeOptions" :key="autoType" :value="autoType">
                        {{ autoType }}
                    </option>
                </select>
            </label>
        </div>
        <div class="filters__item-checkbox">
            Тип кузова
            <label v-for="bodyType in bodyTypeOptions" :key="bodyType">
                {{ bodyType }}
                <input
                    @click="handleBodyTypeCheckbox(bodyType)"
                    v-model="bodyTypeBox"
                    :value="bodyType"
                    type="checkbox"
                />
            </label>
        </div>
        <div class="filters__item">
            <label>
                Марка
                <select v-model="brandSelect">
                    <option v-for="brand in brandOptions" :key="brand" :value="brand">
                        {{ brand }}
                    </option>
                </select>
            </label>
        </div>
        <div class="filters__item">
            <label>
                Модель
                <select v-model="modelOptionsSelect">
                    <option v-for="model in modelOptions" :key="model" :value="model">
                        {{ model }}
                    </option>
                </select>
            </label>
        </div>
        <div class="filter__item--selects">
            Роки
            <label>
                <select v-model="fromYearSelect">
                    <option v-for="year in yearOptions" :key="year" :value="year">
                        {{ year }}
                    </option>
                </select>
                <select v-model="toYearSelect">
                    <option v-for="year in yearOptions" :key="year" :value="year">
                        {{ year }}
                    </option>
                </select>
            </label>
        </div>
        <button @click="clearFilters">Скинути фільтри</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'CarsFilter',

    data() {
        return {
            bodyTypeBox: [],
        }
    },

    computed: {
        ...mapGetters([
            'brandOptions',
            'autoTypeOptions',
            'bodyTypeOptions',
            'modelOptions',
            'yearOptions',
            'getAutoTypeSelectVal',
            'getBrandOptionsSelectVal',
            'getModelOptionsSelectVal',
            'getFromYearSelectVal',
            'getToYearSelectVal',
        ]),

        autoTypeSelect: {
            get() {
                return this.getAutoTypeSelectVal
            },
            set(newType) {
                this.updateAutoType(newType)
            },
        },
        brandSelect: {
            get() {
                return this.getBrandOptionsSelectVal
            },
            set(newBrand) {
                this.updateBrand(newBrand)
            },
        },
        modelOptionsSelect: {
            get() {
                return this.getModelOptionsSelectVal
            },
            set(newModel) {
                this.updateModel(newModel)
            },
        },
        fromYearSelect: {
            get() {
                return this.getFromYearSelectVal
            },
            set(newYear) {
                this.updateFromYear(newYear)
            },
        },
        toYearSelect: {
            get() {
                return this.getToYearSelectVal
            },
            set(newYear) {
                this.updateToYear(newYear)
            },
        },
    },

    methods: {
        ...mapActions([
            'updateAutoType',
            'updateBrand',
            'updateModel',
            'updateBodyType',
            'updateFromYear',
            'updateToYear',
            'dropFilters',
        ]),
        handleBodyTypeCheckbox(bodyType) {
            this.updateBodyType(bodyType)
        },
        clearFilters() {
            this.dropFilters()
            this.bodyTypeBox = []
        },
    },
}
</script>

<style lang="scss" scoped>
</style>