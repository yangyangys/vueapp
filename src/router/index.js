import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Recom from '@/components/recom/Recom'
import RecomList from '@/components/recom/RecomList'
import Food from '@/components/food/Food'
import FoodList from '@/components/food/FoodList'
import FoodDetail from '@/components/food/FoodDetail'
import Active from '@/components/active/Active'
import ActiveList from '@/components/active/ActiveList'
import ActiveDetail from '@/components/active/ActiveDetail'
import PhotoDetail from '@/components/active/PhotoDetail'
import Video from '@/components/video/Video'
import VideoList from '@/components/video/VideoList'


Vue.use(Router)

export default new Router({
  // mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/recom/recomlist'
    },
    {
      path:'/recom',
      name:'Recom',
      component:Recom,
      children:[{
        path:'recomlist',
        component:RecomList,
      }]
    },
    {
      path:'/food',
      name:'Food',
      component:Food,
      redirect:'/food/foodlist',
      children:[{
        path:'foodlist',
        name:'FoodList',
        component:FoodList,
      },
      {
        path:'foodDetail/:id',
        name:'FoodDetail',
        component:FoodDetail,
      }],
    },
    {
      path:'/active',
      name:'Active',
      component:Active,
      redirect:'/active/activeList',
      children:[{
        path:'activeList',
        name:'ActiveList',
        component:ActiveList,
      }],
    },
    {
      path:'/activeDetail',
      name:'ActiveDetail',
      component:ActiveDetail,
      
    },
    {
      path:'/photoDetail/:index',
      name:'PhotoDetail',
      component:PhotoDetail,
    },
    {
      path:'/video',
      name:'Video',
      component:Video,
      redirect:'/video/videoList',
      children:[{
        path:'videoList',
        name:'VideoList',
        component:VideoList,
      },]
    }
  ]
})
