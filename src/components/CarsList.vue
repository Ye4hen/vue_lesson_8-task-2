<template>
    <div class="cars">
        <ul class="cars__list">
            <li v-for="car in carsData" :key="car.id" class="cars__item">
                <a :href="car.link" class="cars__image">
                    <img :src="car.image" :alt="car.name" />
                </a>
                <div class="cars__main">
                    <h4 class="cars__title">
                        <a :href="car.link" class="cars__title-link">
                            {{ car.name }}
                        </a>
                    </h4>
                    <strong class="cars__price"> {{ car.price }}$ </strong>
                    <div class="cars__details details-car">
                        <div class="details-car__item">{{ car.mileage }} тис. км</div>
                        <div class="details-car__item">
                            {{ car.location }}
                        </div>
                        <div class="details-car__item">
                            {{ car.petrol }}
                        </div>
                        <div class="details-car__item">
                            {{ car.transmission }}
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CarsList',

    props: {
        carsData: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
</style>