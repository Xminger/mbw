<template>
    <div class="detail">
        <div class="detail-toolbar">
            <i class="el-icon-top-right"></i>
        </div>
        <div class="detail-banner">
            <scrollImg :scrollList="scrollList" :scrollConfig="scrollConfig" @scrollClick="scrollClick"></scrollImg>
        </div>
        <div class="detail-content">
            <h2>详情</h2>
            <div class="detail-content-main">
asdfasdf
            </div>
        </div>
        <div class="detail-custom">
            <div>自定义title</div>
            <div>自定义内容</div>
        </div>
        <div class="detail-comment">
            <div>问答（Q&A）</div>
            <div>
                Q&A 内容
            </div>
        </div>
        <div class="detail-recommend">
            推荐的内容
        </div>
        <foot :menuList="menuList" @clickEvent="menuClick"></foot>
    </div>
</template>

<style lang="less" scoped>
    @import "../styles/detail.less";
</style>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';
    import foot from '@/components/foot.vue';
    import scrollImg from '@/components/scrollImg.vue';

    @Component({
        components: {
            foot,
            scrollImg
        }
    })

    export default class detail extends Vue {
        private menuList!: Array<any>;

        private data() {
            return {
                menuList: [
                    {
                        iconClass: 'el-icon-star-off',
                        url: '/favorite',
                        style: 'padding: 2vw 0;',
                        isJump: false,
                        isFavorite: true
                    },
                    {
                        iconClass: '',
                        text: '购买',
                        url: '/',
                        style: 'color: #ddd;background: #f00; padding: 3.5vw 0; font-size: 3vw',
                        isJump: true
                    }
                ],
                scrollConfig: {
                    autoPlay: false
                },
                scrollList: [
                    {
                        imgUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
                    },
                    {
                        imgUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
                    }
                ]
            }
        }

        // 菜单点击
        menuClick(item: any) {
            if (item.isFavorite) {
                for (let i = 0; i < this.menuList.length; i++) {
                    if (this.menuList[i].isFavorite) {
                        this.menuList[i].iconClass = 'el-icon-star-on';
                    }
                }
            }
        }
        // 焦点图点击
        scrollClick(item: any) {
            alert('点击了焦点图：' + JSON.stringify(item));
        }
    }
</script>
