<template>
    <div class="home">
        <helloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    </div>
</template>

<style lang="less" scoped>
    @import '../styles/home.less';
</style>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import helloWorld from "@/components/helloWorld.vue"; // @ is an alias to /src

    @Component({
        components: {
            helloWorld
        }
    })
    export default class Home extends Vue {
    }
</script>
