<template>
    <div class="my-scrollbar">
        <TopBar></TopBar>
        <router-view></router-view>
        <Footer></Footer>
        <Tips></Tips>
        <Loading></Loading>
        <AirPlane></AirPlane>
        <!-- <spring-festival></spring-festival> -->
    </div>
</template>
<script>
  import TopBar from './components/RecipeCompnent/TopBar'
  import Footer from './components/RecipeCompnent/Footer'
  import Tips from './components/RecipeCompnent/Tips'
  import Loading from './components/RecipeCompnent/Loading'
  import AirPlane from './components/RecipeCompnent/Airplane'
  // import springFestival from '@/components/RecipeCompnent/theme/springFestival'

  export default {
    name: 'app',
    components: {
      TopBar: TopBar,
      Footer:Footer,
      Tips: Tips,
      Loading:Loading,
      AirPlane:AirPlane,
      // springFestival:springFestival
    }
  }
</script>

<style scoped lang="less">
.my-scrollbar::-webkit-scrollbar {/*滚动条整体样式*/

  width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/

  height: 1px;

}

.my-scrollbar::-webkit-scrollbar-thumb {/*滚动条里面小方块*/

  border-radius: 10px;

  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);

  background: #535353;

}

.my-scrollbar::-webkit-scrollbar-track {/*滚动条里面轨道*/

  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);

  border-radius: 10px;

  background: #EDEDED;

}
</style>
