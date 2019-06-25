<template>
    <div class="foot">
        <el-row>
            <el-col v-for="(item, index) in menuList"
                    class="menuItem"
                    :key="index"
                    :span="24/menuList.length">
                <div @click="clickEvent(item)" :style="item.style || ''">
                    <i v-if="item.iconClass" :class="item.iconClass"></i>
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
    import {Vue, Component, Prop} from 'vue-property-decorator';

    @Component
    export default class foot extends Vue {

        @Prop({
            type: Array,
            default: () => {
                return [
                    {
                        iconClass: 'el-icon-s-home',
                        text: '首页',
                        url: '/',
                        isJump: true
                    },
                    {
                        iconClass: 'el-icon-s-grid',
                        text: '分类',
                        url: '/classification',
                        isJump: true
                    },
                    {
                        iconClass: 'el-icon-user-solid',
                        text: '我的',
                        url: '/my',
                        isJump: true
                    },
                    {
                        iconClass: 'el-icon-star-on',
                        text: '收藏',
                        url: '/favorite',
                        isJump: true
                    }
                ];
            }
        })
        menuList!: Array<any>


        clickEvent(item: any) {
            if (item.isJump) {
                this.$router.push(item.url);
            }
            else {
                this.$emit('clickEvent', item);
            }
        }
    }
</script>
