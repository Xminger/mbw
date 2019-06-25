<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="less">
    @import 'common/common.less';
    @import './styles/app.less';
</style>

<script lang="ts">
    import {Vue} from 'vue-property-decorator';
    export default class app extends Vue{

    }
</script>
