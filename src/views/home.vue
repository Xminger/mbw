<template>
    <div class="home">
        <div class="home-list">
            <card :cardList="cardList"></card>
        </div>
        <foot></foot>
    </div>
</template>

<style lang="less" scoped>
    @import '../styles/home.less';
</style>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import card from '@/components/card.vue';
    import foot from '@/components/foot.vue';
    import {login} from '@/common/api';

    @Component({
        components: {
            card,
            foot
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

        mounted(): void {
            this.initData()
        }

        initData() {
            login({a: 1, b: 2})
                .then(res => {
                    console.log('res1');
                    console.log(res);
                })
                .catch(error => {
                    console.log('error1');
                    console.log(error);
                })
        }
    }
</script>
