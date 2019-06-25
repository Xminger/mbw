<template>
    <Swiper v-if="scrollList.length > 0"
            :autoPlay="scrollConfig.autoPlay"
            :showIndicator="scrollConfig.showIndicator"
            :interval="scrollConfig.interval"
            :duration="scrollConfig.duration">
        <Slide v-for="(item, index) in scrollList"
               :key="index"
               style="text-align: center;"
               @click="clickScroll(item)">
            <img :src="item.imgUrl" alt="" style="display: inline-block; border: none;">
        </Slide>
    </Swiper>
</template>

<style lang="less" scoped>
    @import "../styles/scrollImg.less";
</style>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';
    import {Swiper, Slide} from 'vue-swiper-component';

    @Component({
        components: {
            Swiper,
            Slide
        }
    })

    export default class scrollImg extends Vue {
        @Prop({
            type: Array,
            default: () => {
                return [];
            }
        })
        scrollList!: Array<any>;

        @Prop({
            type: Object,
            default: () => {
                return {
                    autoPlay: true, // 是否自动轮播
                    showIndicator: true, // 是否显示轮播的那个点
                    interval: 2500, // 每两次隔多久滚动一次
                    duration: 500 // 每次滚动一页需要多久时间
                };
            }
        })
        scrollConfig!: Object;

        clickScroll(item: any) {
            this.$emit('scrollClick', item);
        }
    }
</script>
