<template>
    <div class="card-list">
        <el-card class="card-list-item"
                 v-for="item in cardList"
                 @click="routerGo(item.url)"
                 :key="item.id">
            <img class="card-list-item-image" :src=item.imgSrc>
            <div class="card-list-item-title">{{item.title}}</div>
            <div class="card-list-item-other clearfix">
                <time class="card-list-item-time">{{ item.time }}</time>
                <span class="card-list-item-money">${{item.money}}</span>
            </div>
        </el-card>
    </div>
</template>

<style lang="less" scoped>
    @import '../styles/homeCard.less';
    .card-list {
        &-item {
            margin-bottom: 20px;
            &-image {
                display: block;
                width: 100%;
            }
            &-title {
                padding: 10px 0;
            }
            &-other {
                position: relative;
            }
            &-money {
                position: absolute;
                top: 0;
                right: 0;
                background: #fff;
            }
            &-time {
                width: 100%;
            }
        }
    }
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
