<template>
  <transition name="Fade" mode="out-in">
    <div>
      <div class="TopBarHeight"></div>
      <div class="BlogIndexContent">
        <div class="BlogFlex">
          <div class="BlogIndexContentLeft">
            <img src="../../static/img/ArticleList.jpg" v-if="DefaultGraph.ArticleListPart"
                 class="BlogIndexContentLeftDefaultGraph">
            <div class="ArticleItem" v-for="(item,i) in ArticleList" v-bind:key="i"
                 @click="UpdateRouter('RecipeDetail',item)">
              <div class="ArticleItemCover" v-if="item.ArticleCover">
                <!--<img :src="item.ArticleCover">-->
                <h2 class="ArticleTitleText">{{ item.cureProblem }}</h2>
              </div>
              <div style="flex: 1">
                <div class="ArticleTitle">
                  <!--<div class="ArticleTag">{{ item.ArticleTag }}</div>-->
                  <h3 class="ArticleTitleText">{{ item.Title }}</h3>
                </div>
                <div class="ArticleContent" v-html="item.Summary">
                  {{ item.Summary }}
                </div>
                <div class="ArticleFooter">
                  <div class="ArticleFooterItem" style="border: none">
                    <i class="iconfont icon-biaoqian iconBlogIndex"></i>{{ item.ArticleTag }}
                  </div>
                  <div class="ArticleFooterItem" style="border: none">
                    <i class="iconfont icon-shijianzhongbiao iconBlogIndex"></i>{{ item.CreateDate }}
                  </div>
                  <!--<div class="ArticleFooterItem" style="border: none">
                    <i class="iconfont icon-yueduliang iconBlogIndex"></i>{{ item.articleReadNum ? item.articleReadNum : 0 }}
                  </div>-->
                  <!--<div class="ArticleFooterItem" style="border: none" v-show="item.CommentNum">
                    <i class="iconfont icon-pinglun iconBlogIndex"></i>{{ item.CommentNum }}
                  </div>-->
                </div>
              </div>
            </div>
            <div class="NoDataHint" v-if="!ArticleList.length">暂无数据</div>
            <div class="ListBottom" v-if="AticleBottom">客官不要再拽了,我是有底线的啊~~~</div>
            <Pagination v-on:PaginationToParent="ValueByPagition" ref="Pagi"></Pagination>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  //import Heartfelt from '../MyCompnent/Heartfelt';  
  import Pagination from '../MyCompnent/Pagination';
  import Store from '../../store';
  import dataList from '../../static/json/dataList.json';

  export default {
    name: "BlogIndex",
    components: {
      Pagination
    },
    data: function () {
      return {
        Tags: [],// 标签量
        ArticleList: [],// 文章列表        
        ArticleNum: 0,// 文章量     
        LeaveMessageNum: 0,// 留言量        
        CommentNum: 0,// 博客评论量
        HotArticleList: [],// 热门文章列表
        AticleBottom: false,// 文章底线
        buttonAnimate: false, // 首页源码入口动画效果
        // 缺省图
        DefaultGraph: {
          ArticleListPart: true,
          HotArticlePart: true,
          ArticleTagPart: true
        },
        stickyTop: 0
      }
    },
    mounted: function () {
      let that = this;
      this.InitArticleTag(this);
      Store.commit("ChangeActive", 0);
      if(window.innerHeight < 1042){
        this.stickyTop = -(942.3 - window.innerHeight + 76) + 46 + 'px'; 
      }else{
        this.stickyTop = 60 + "px"; 
      }
      Store.commit("changeFooter",false); 
    },
    methods: {
      InitArticleTag: function (That) {
        this.GetArticle('');
      },
      // 获取文章列表. 初始化的时候截取前面8条
      GetArticle: function (ArticleTag) {
        var localDataArray = dataList.data;
        // 把原数组进行深度拷贝,这样splice分页的时候不会改变原数组的数据
        let data=JSON.parse(JSON.stringify(localDataArray))
        var That = this;
        let tableData = data.splice(0,8);
        tableData.forEach(function (Item) {
          Item.CreateDate = Item.CreateDate.slice(0, 10);
        });
        That.DefaultGraph.ArticleListPart = false;// 隐藏骨架屏
        That.ArticleList = tableData;
      },
      //处理翻页
      ValueByPagition: function (SelectPage) {
        var That = this;
        var localDataArray = dataList.data;
        // 把原数组进行深度拷贝,这样splice分页的时候不会改变原数组的数据
        let data=JSON.parse(JSON.stringify(localDataArray))
        let tableData = data.splice(SelectPage * 8,8);
        tableData.forEach(function (Item) {
          Item.CreateDate = Item.CreateDate.slice(0, 10);
        });
        That.ArticleList = That.ArticleList.concat(tableData);
        if (tableData.length != 8) {
          That.AticleBottom = true;
          // 停止分页器的滚动监听
          That.$refs.Pagi.SetUpdate(false);
          // 下拉到底部后，展示footer
          Store.commit("changeFooter",true);
        } else {
          That.$refs.Pagi.SetUpdate(true);
          // 还有分页时，隐藏footer
          Store.commit("changeFooter",false);
        }
      },
      // 切换路由
      UpdateRouter: function (RouterName, articleMessage) {
        this.$router.push({
          name: "RecipeDetail",
          query: {
            _id:articleMessage._id
          }
        });
      },
      enter: function(status){
        this.buttonAnimate = status;
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../static/css/BlogIndex";
</style>
