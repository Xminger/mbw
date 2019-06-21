<template>
    <div class="card-list">
        <el-card class="card-list-item"
                 v-for="item in cardList"
                 :key="item.id">
            <img class="card-list-item-image"
                 :src=item.imgSrc
                 @click="routerGo(item.url)">
            <div class="card-list-item-title">{{item.title}}</div>
            <div class="card-list-item-other clearfix">
                <time class="card-list-item-time">{{ item.time }}</time>
                <span class="card-list-item-money">￥{{item.money}}</span>
            </div>
        </el-card>
    </div>
</template>

<style lang="less" scoped>
    @import '../styles/homeCard.less';
</style>

<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";
    @Component({})
    export default class Card extends Vue {
        @Prop() private cardList!: Array<any>;

        private routerGo(url: string) {
            this.$router.push(url);
        }
    }
</script>
