<template>
    <div class="container">
        <cars-manager />
    </div>
</template>

<script>
import CarsManager from './components/CarsManager.vue'
export default {
    name: 'App',
    components: { CarsManager },
}
</script>
<style lang="scss">
@import '@/assets/style/';
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 60px 0;
}
</style>
