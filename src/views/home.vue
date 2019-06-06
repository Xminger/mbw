<template>
    <div class="home">
        <div class="home-list">
            <card :cardList="cardList"></card>
        </div>
    </div>
</template>

<style lang="less" scoped>
    @import '../styles/home.less';
</style>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import card from '@/components/homeCard.vue';

    @Component({
        components: {
            card
        }

    })
    export default class Home extends Vue {
        private cardList!: Array<any>;

        private data() {
            return {
                cardList: [
                    {
                        id: 1,
                        imgSrc:
                            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        time: new Date().getFullYear()
                            + '-'
                            + (new Date().getMonth() + 1)
                            + '-'
                            + new Date().getDay(),
                        title: '标题标题标题标题标题标题标题标题标题标题标题标题',
                        money: 123,
                        url: '/detail/1'
                    },
                    {
                        id: 2,
                        imgSrc:
                            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        time: new Date().getFullYear()
                            + '-'
                            + (new Date().getMonth() + 1)
                            + '-'
                            + new Date().getDay(),
                        title: '标题标题标题标题标题标题标题标题标题标题标题标题',
                        money: 123,
                        url: '/detail/2'
                    },
                    {
                        id: 3,
                        imgSrc:
                            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        time: new Date().getFullYear()
                            + '-'
                            + (new Date().getMonth() + 1)
                            + '-'
                            + new Date().getDay(),
                        title: '标题标题标题标题标题标题标题标题标题标题标题标题',
                        money: 123,
                        url: '/detail/3'
                    }
                ]
            }
        }
    }
</script>
