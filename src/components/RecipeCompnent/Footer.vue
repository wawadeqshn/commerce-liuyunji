<template>
    <footer class="Footer" v-show="footerShow">
        <div>Copyright © 2024~2025 流云迹-生活小妙招  <span class="RecordNo">京ICP备2024066269号-1</span></div>
        <!--<div>流云迹-生活小妙招</div>-->
    </footer>
</template>

<script>
    import store from "../../store"
  export default {
    name: "Footer",
    computed:{
        footerShow(){
            return store.state.footer.show;
        }
    }
  }
</script>

<style scoped lang="less">
    @import '../../static/css/base.less';
    /*pc端*/
    @media only screen and (min-device-width : 768px) {
        .Footer{
            text-align: center;
            background-color: @TranslucentWhitleBackg;
            color: @FontColorGray;
            padding: 2rem 1rem 1.6rem;
            margin-top: 1rem;
        }
        .RecordNo{
            margin-left: 0.8rem;
        }
        .Footer :nth-child(1){
            margin-bottom: 1rem;
        }
    }

    /*移动端*/
    @media only screen and (max-device-width : 768px) {
        .Footer{
            text-align: center;
            background-color: @fore_color;
            color: @footerColor;
            padding: 1.5rem;
            margin-top: 1rem;
        }
        .RecordNo{
            display: inline-block;
            margin-top: 0.3rem;
            margin-bottom: 0.3rem;
        }
    }

</style>