<template>
    <div class="detail">
        <h2>活动详情</h2>
        <div class="con">
            <p>每条围裙都有自己的DNA,每天在人们做饭时候，保护着人们，它俨然是个爱的守护者。家家户户围裙上的美味印记各不相同，关于守护的故事也不相同。这有关于守护的故事需要你们查收。</p>
            <div v-for="(photo,index) in photoList" :key="index" class="photo">
                <router-link :to="'/photoDetail/'+index">
                    <img :src="photo.src" alt="">
                </router-link>
                <router-view></router-view>
            </div>
            <h4>参与方式</h4>
            <p class="word">发布#爱是不动声色的守护#话题(图片+文字),聊一聊你的守护故事,即可参与活动,将有机会把欣和六月鲜提供的精美礼品抱回家！</p>
            <h4>活动时间</h4>
            <span>2017.01.20~2017.01.29</span>
            <h4>发布话题要求</h4>
            <p class="word">1、同一账号连续发布相似内容不得超过10次，情节严重者将取消获奖资格; <br>2、杜绝复制粘贴恶意刷楼，情节严重者将取消获奖资格;<br>3、同一用户注册多个账号恶意刷奖，将取消获奖资格</p>
            <h4>评奖方式</h4>
            <p class="word">
                心意奖：活动结束后将结合互动内容主题契合度、吸引度、点赞数等方面综合评选出10名用户获得奖励。
            </p>
            <p class="word">幸运奖：随机抽选出10名用户获得奖励。</p> 
            <h4>奖品展示</h4>
            <p class="word">
                心意奖：欣和六月鲜安康礼盒(10名)
            </p>
            <img src="../../assets/img/7.jpg" alt="">

            <p class="word">幸运奖：欣和六月鲜围裙(10名)</p> 
            <img src="../../assets/img/8.jpg" alt="">
            <h3 @click="callback">关闭</h3>    
        </div>

    </div>

</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return{
            photoList:[],
        }
    },
    mounted () {
        let url='./static/data/photodata.json'
        Axios.get(url).then(res=>{
            this.photoList=res.data.photoData;
            this.$store.dispatch('actionphotoList',this.photoList);
        }).catch();
    },
    methods:{
        callback(){
            history.back(-1);
        }
    }
}
</script>
<style scoped>
    .detail h2{width:100%;height:0.8rem;text-align: center;background:rgba(255,255,255,.8);color:#000;border-bottom:1px solid #f1f1f1;font:0.4rem/0.8rem '微软雅黑';position: fixed;top:0;z-index: 100;}
    .con{margin-top:0.9rem;}
    p{width:95%;margin:0 auto;font-size:1.1em;font-family: '微软雅黑';}
    .photo{width:95%;margin:0 auto;}
    img{width:100%; margin-top:0.1rem;}
    h4{text-align: center;font-weight: 600;color:#666;font-family: '微软雅黑';margin:2% 0; }
    span{display: block; text-align: center;font-size:1.2em;color:#999;}
    p.word{color:#999;text-indent: 3%;}
    h3{height:0.7rem;line-height:0.7rem; text-align: center;color: #ff4c39;background: #fff;border-top:1px solid #f1f1f1;margin-top:0.1rem;font-size:0.3rem;letter-spacing: 0.3em;}
</style>
