<template>
    <div id="app">
        <el-container>
            <!--<el-header>Header</el-header>-->
            <el-main>
                <router-view/>
            </el-main>
            <el-footer>
                <foot/>
            </el-footer>
        </el-container>
    </div>
</template>

<style lang="less">
    @import 'common/common.less';
    @import './styles/app.less';
</style>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import foot from './components/foot.vue';

    @Component({
        components: {
            foot
        }

    })

    export default class Foot extends Vue {
    }
</script>
