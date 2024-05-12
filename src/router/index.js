import Vue from 'vue';
import Router from 'vue-router';

const RecipeIndex = () =>
  import(/* webpackChunkName: "recipePages" */ '@/components/MainPage/RecipeIndex');

const RecipeIndexCopy = () =>
  import(/* webpackChunkName: "recipePages" */ '@/components/MainPage/RecipeIndex-copy');


const RecipeDetail = () =>
  import(/* webpackChunkName: "recipePages" */ '@/components/MainPage/RecipeDetail');

const AboutMe = () =>
  import(/* webpackChunkName:"simpleMenu" */ '@/components/MainPage/AboutMe');
Vue.use(Router);

export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'RecipeIndex',
      component: RecipeIndex
    },
    {
      path:"/RecipeIndexCopy",
      name:'RecipeIndexCopy',
      component:RecipeIndexCopy
    },
    {
      path: '/RecipeDetail',
      name: 'RecipeDetail',
      component: RecipeDetail
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: AboutMe
    }
  ]
});
