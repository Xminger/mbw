<template>
    <div id="imgScroll">
        <ul>
            <li v-for="(item, index) in imgList"
                :key="index">
                <img :src="item.imgSrc" :alt="item.imgAlt || ''">
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';

    export default class imgScroll extends Vue {
        @Prop() imgLis: Array<any> = [];

    }
</script>

<style lang="less" scoped>
    #imgScroll {

    }
</style>
