<template lang="pug">
.main.main--wrapper
    router-view(v-if="authenticated")
    div(v-else) Not logged in!!!
</template>

<script lang="ts">
export default {
    name: 'App',
    data() {
        return {}
    },
    computed: {
        authenticated() {
            return this.$store.getters['auth/authenticated']
        }
    },
    methods: {},
}
</script>

<style>
.main {
    width: 100%;
    height: 100%;
    position: relative;
}
</style>