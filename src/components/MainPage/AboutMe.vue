<template>
  <transition name="Fade" mode="out-in">
    <div>
      <div class="FlexContent">
        <div class="LeftPart">
          <div class="BigBlock main-text">
            <div class="TitleFontLine">网站说明</div>
            <p>
              <i
                class="iconfont icon-aihao1 AboutMeIcon"
                style="color: #49a9ee"
              ></i
              >建站初衷：提供一个日常生活经验总结资源库，提升日常生活必备技能，能百病自疗。传播中医文化和知识，增加社会对中医的认可。
            </p>
            <p>
              <i
                class="iconfont AboutMeIcon icon-aihao1"
                style="color: #49a9ee"
              ></i
              >网站信息会持续更新，如果您有好的办法，也可随时联系我。
            </p>
            <p>
              <i
                class="iconfont AboutMeIcon icon-aihao1"
                style="color: #f46e65"
              ></i
              >本网站不对任何未经授权的使用或修改本网站内容的行为承担责任。
            </p>
            <p>
              <i
                class="iconfont AboutMeIcon icon-aihao1"
                style="color: #f46e65"
              ></i
              >本网站不对任何未经授权的复制、转载、摘编、整合等行为承担责任。
            </p>
          </div>

          <div class="BigBlock AboutMeMarginTop main-text">
            <div class="TitleFontLine">随缘打赏，感谢</div>
            <div class="img-container" >
              <img id="img" src="../../static/img/1.png" style="width: 415px; height: 415px;"/>
            </div>
            <div class="img-container" >
              <img id="img" src="../../static/img/2.png" style="width: 415px; height: 415px;"/>
            </div>
          </div>
        </div>
        <div class="RightPart">
          <div
            class="GitPart"
            @mouseenter="setButtonAnimate(true)"
            @mouseleave="setButtonAnimate(false)"
          >
          <div class="BigBlock AboutMeMarginTop">
            <div class="TitleFontLine">联系我</div>
              <div class="img-reward" style="width: 220px; height: 300px;">
                <img id="img" src="../../static/img/contact.jpg" style="width: 220px; height: 300px;"/>
              </div>
            </div>
          </div>

          <div class="BigBlock AboutMeMarginTop">
            <div class="TitleFontLine">联系我</div>
            <div
              class="BlogStatistic"
              style="border-top: none; padding-bottom: 0"
            >
              
              <div class="BlogStatisticItem my-pointer" @click="infoMessage('liuyunji6666')">
                <i
                    class="iconfont AboutMeIcon icon-weixin"
                    style="color: #f46e65"
                  ></i>
              </div>
              <div class="BlogStatisticItem my-pointer" @click="infoMessage('1964205323@qq.com')">
                <i
                  class="iconfont icon-youxiang AboutMeIcon"
                  style="color: #49a9ee"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--<Heartfelt></Heartfelt>-->
    </div>
  </transition>
</template>

<script>
//import Heartfelt from "../SonCompnent/Heartfelt";
import Store from "../../store";

export default {
  name: "AboutMe",
  data: function () {
    return {
      buttonAnimate: false,
    };
  },
  components: {
    //Heartfelt,
  },
  methods: {
    // 设置按钮动画的开始与停止
    setButtonAnimate: function (status) {
      this.buttonAnimate = status;
    },
    // 联系我的弹出框
    infoMessage: (message) => {
      Store.commit('ChangeTip', {
          Show: true,
          Title: message
        });
    }
  },
  mounted: function () {
    Store.commit("ChangeActive", 2); // 切换Topbar高亮
    Store.commit("changeFooter",true); // 展示footer 
  },
};
</script>

<style scoped lang="less">
@import "../../static/css/AboutMe";
.about-UrlName {
  font-size: 14px;
  height: 1rem;
  padding-left: 0.5rem;
}
.about-url-card {
  padding: 0;
}

.img-container {
  display: inline-block;
  border: 2px solid #000; /* 边框 */
  border-radius: 5px; /* 圆角 */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* 阴影 */
  padding: 5px; /* 内边距 */
  margin: 10px 20px 20px 76px; /* 外边距 */
}
 
.img-container img {
  display: block;
  max-width: 100%; /* 图片宽度不超过容器宽度 */
  height: auto; /* 高度自动调整 */
}


.img-reward {
  display: inline-block;
  border: 2px solid #000; /* 边框 */
  border-radius: 5px; /* 圆角 */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* 阴影 */
  padding: 5px; /* 内边距 */
  margin: 10px 42px 15px 10px; /* 外边距 */
}
 
.img-reward img {
  display: block;
  max-width: 100%; /* 图片宽度不超过容器宽度 */
  height: auto; /* 高度自动调整 */
}


</style>
