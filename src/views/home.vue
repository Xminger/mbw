<template>
    <div class="home">
        <div class="home-list">
            <card :cardList="cardList"></card>
        </div>
<!--        <foot></foot>-->
    </div>
</template>

<style lang="less" scoped>
    @import '../styles/home.less';
</style>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import card from '@/components/card.vue';
    import foot from '@/components/foot.vue';

    @Component({
        components: {
            card,
            foot
        }

    })

    export default class Home extends Vue {
        cardList: Array<any> = [];

        mounted(): void {
            this.initData()
        }

        initData() {
            // 列表
            this.$axios('/homeList')
                .then(res => {
                    console.log(res);
                    this.cardList = res.data;
                })
                .catch(error => {
                    this.$alert(error.msg || '系统出小差了，请稍后重试');
                })
        }
    }
</script>
