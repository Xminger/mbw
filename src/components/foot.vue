<template>
    <div class="foot">
        <el-row>
            <el-col v-for="item in menuList"
                    class="menuItem"
                    :key="item.id"
                    :span="item.span">
                <div @click="jumpUrl(item.url)">
                    <i :class="item.iconClass"></i>
                    {{item.text}}
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style lang="less">
    @import '../styles/foot.less';
</style>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';

    @Component
    export default class foot extends Vue {
        private menuList!: Array<any>;

        private data () {
            return {
                menuList: [
                    {
                        id: 1,
                        span: 6,
                        iconClass: 'el-icon-s-home',
                        text: '首页',
                        url: '/'
                    },
                    {
                        id: 2,
                        span: 6,
                        iconClass: 'el-icon-s-grid',
                        text: '分类',
                        url: '/classification'
                    },
                    {
                        id: 3,
                        span: 6,
                        iconClass: 'el-icon-user-solid',
                        text: '我的',
                        url: '/my'
                    },
                    {
                        id: 4,
                        span: 6,
                        iconClass: 'el-icon-star-on',
                        text: '收藏',
                        url: '/favorite'
                    }
                ]
            }
        };

        jumpUrl(url:any) {
            this.$router.push(url);
        }
    }
</script>
