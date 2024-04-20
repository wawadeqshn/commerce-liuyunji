<template>
  <transition name="Fade" mode="out-in">
    <div>
      <div class="TopBarHeight"></div>
      <div class="ArticleDetailHeader">
        <!--<img :src="Article.ArticleCover" />-->
        <div class="HeaderContent" v-if="!Article.ArticleCover">
          <span>{{ Article.Title }}</span>
          <span>{{ Article.Summary }}</span>
        </div>
      </div>
      <div class="ArticleDetailContent">
        <div class="ArticleDetailContentTab">
          <transition name="Fade" mode="out-in">
            <img
              src="../../static/img/BlogDetailSkele_PC.jpg"
              class="BlogDetailSkeletonScreenPC"
              v-show="BlogDetailSkeletonScreen"
            />
          </transition>

          <img
            src="../../static/img/BlogDetailSkele_Mobile.jpg"
            class="BlogDetailSkeletonScreenMobile"
            v-show="BlogDetailSkeletonScreen"
          />

          <h1>{{ Article.Title }}</h1>
          <div class="ArticleCreateTime" v-if="BlogDetailSkeletonScreen">
            发布时间：{{ Article.CreateDate }}
          </div>
          <div class="markdown-body" v-html="Article.Content">
            {{ Article.Content }}
          </div>
          <div class="OpenMessageSubmitButton" @click="MessageReturn()">
            返回
          </div><br/><br/><br/><br/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Marked from "marked";
import Store from "../../store";
import highlight from "highlight.js";
import "highlight.js/styles/github.css"; // 黑色风格
// import 'highlight.js/styles/atom-one-dark.css' // 清新风格
  import dataList from '../../static/json/dataList.json';
export default {
  name: "RecipeDetail",
  computed: {
    MessageText: {
      get() {
        return Store.state.MessageText;
      },
      set(Value) {
        Store.commit("ChangeMessageText", Value);
      },
    },
  },
  data() {
    return {
      Article: {},
      ArticleCommentNickName: "",
      ArticleCommentEmail: "",
      ArticleCommentUrl: "",
      /*ArticleCommentText: '',*/
      ArticleCommentDate: "",
      ArticleCommentList: "",
      BlogDetailSkeletonScreen: true,
    };
  },
  mounted: function () {
    window.showMarkedImage = function(e, href) {
      let el = e.target
      let rfs =
        el.requestFullscreen ||
        el.webkitRequestFullscreen ||
        el.mozRequestFullscreen ||
        el.msRequestFullscreen
      if(rfs) rfs.call(el); // 这里rfs()会执行失败，因为rfs返回的是个单纯的函数，没有对象去调用它了
    }
    // 初始化文章内容
    this.InitPage();
  },
  methods: {
    // 初始化页面
    InitPage: function () {
      let id = this.$route.query._id;
      var that = this;
      var localDataArray = dataList.data;
      localDataArray.forEach((item,index) => {
        if(item._id==id){
          that.Article = item;
        }
      });
      if(that.Article.CreateDate == undefined || that.Article.CreateDate ==null){
        console.log("警告!非法数据");
        that.BlogDetailSkeletonScreen=false;
        return; 
      }
      // 关闭骨架屏
      that.BlogDetailSkeletonScreen = false;
      //that.Article.CreateDate = that.DateFormat(that.Article.CreateDate);
      const rendererMD = new Marked.Renderer();
      rendererMD.image = function (href, title, text) {
        return `<img onclick="showMarkedImage(event, '${href}')" src="${href}" alt="${text}" title="${
          title ? title : ""
        }">`;
      };
      Marked.setOptions({
        renderer: rendererMD,
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
          return highlight.highlightAuto(code).value;
        },
      });
      that.Article.Content = Marked(that.Article.Content).replace(
        /<pre>/g,
        "<pre class='language-html'>"
      ); //Markdown格式字符串转html
    },
    MessageReturn: function () {
      this.$router.back()
    }
  }
  
};
</script>

<style scoped lang="less">
@import "../../static/css/BlogDetail";
</style>
