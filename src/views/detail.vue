<template>
    <div class="detail">
        <div class="detail-toolbar">
            <i class="el-icon-top-right"></i>
        </div>
        <div class="detail-banner">

        </div>
        <div class="detail-content">
            富文本编辑器里面的内容
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
        <!-- foot -->
    </div>
</template>

<style lang="less" scoped>
    @import "../styles/detail.less";
</style>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';
    import imgScroll from 'components/imgScroll.vue';

    export default class detail extends Vue{
    }
</script>
