<template>
    <div>
        <div class="select">
            <form action="">
                <input type="text" placeholder="搜索菜谱、食材" v-model="keyword">
                <div class="btn" @click="search">搜索</div>
            </form>
        </div>

        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
            <swipe-item class="slide4"></swipe-item>
        </swipe>
        <div class="co">
            <div class="today">
                <h4>今日餐桌 </h4>
                <h5>让你的餐桌与众不同</h5>
                <ul  class="today-list">
                    <li>
                        <img src="http://img4.imgtn.bdimg.com/it/u=380686605,3967526783&fm=26&gp=0.jpg" alt="">
                        <div class="word">
                            <p>必吃清单</p>
                            <span>秒选一周三餐</span>
                        </div>
                    </li>
                    <li>
                        <img src="http://img0.imgtn.bdimg.com/it/u=3035659065,3434438971&fm=26&gp=0.jpg" alt="">
                        <div class="word">
                            <p>时令食材</p>
                            <span>千种食材等您挑选</span>
                        </div>
                    </li>
                </ul>
            </div>        
            <div class="today">
                <h4>人群膳食 </h4>
                <h5>爱家人只需一顿饭</h5>
                <ul  class="today-list">
                    <li>
                        <img src="http://img4.imgtn.bdimg.com/it/u=1690451918,2268205892&fm=26&gp=0.jpg" alt="">
                        <div class="word">
                            <p>必吃清单</p>
                            <span>秒选一周三餐</span>
                        </div>
                    </li>
                    <li>
                        <img src="http://img2.imgtn.bdimg.com/it/u=2068700586,550077980&fm=26&gp=0.jpg" alt="">
                        <div class="word">
                            <p>时令食材</p>
                            <span>千种食材等您挑选</span>
                        </div>
                    </li>
                </ul>
                <ul  class="popel">
                    <li>
                        <img src="../../assets/img/food5.jpg" alt="">
                        <div class="word">
                            <p>必吃清单</p>
                            <span>秒选一周三餐</span>
                        </div>
                    </li>
                    <li>
                        <img src="../../assets/img/food6.jpg" alt="">
                        <div class="word">
                            <p>时令食材</p>
                            <span>千种食材等您挑选</span>
                        </div>
                    </li>
                </ul>
            </div>        
        </div>
    </div>
    
</template>
<script>
import 'vue-swipe/dist/vue-swipe.css'
import { Swipe, SwipeItem } from 'vue-swipe'
import Axios from 'axios'
export default {
    components:{
        'swipe': Swipe,
        'swipe-item': SwipeItem,
    },
    data(){
        return{
            keyword:'',
            foodList:[],
        }
    },
    mounted(){
        let url='./static/data/getMenuList.json'
        Axios.get(url).then(res=>{
            let list = res.data.result;
            this.foodList=list;
            }).catch(
                ()=>{
                  
                }
            );
    },
    methods:{
        search(){
            let arr=this.foodList.filter((val, index)=>{
                 if(val.title.includes(this.keyword)){
                     this.$router.push('/food/foodDetail/'+val.id);
                 }else{
                    this.keyword="您输入的数据已超过知识范围";
                 }
             });
             
         },
    }
}
</script>
<style scoped>
.select{width:100%;position: fixed;top:0;z-index:100;height:0.8rem;background: #fff;border-bottom:1px solid #f1f1f1;}
form{width:100%;position: relative;height:44px;}
form input{display: block; background: #eee;border-radius: 2px;padding:4px 8px;height: 25px;width:70%;margin:2% 0 1% 5%;outline:none;font-size:1.1em;}
form .btn{width:12%;border-radius: 2px;line-height:34px; text-align: center;background:#ff4c39;position: absolute;top:1%;right:6%;color:#fff;font-size:1.1em;}
.my-swipe {height: 220px;color: #fff;font-size: 30px;text-align: center;border-radius: 6px;margin:1rem 1% 0.2rem 1%;}
.slide1 {background:url('http://img.zcool.cn/community/0145f3589d3af1a8012060c8435091.jpg@2o.jpg');background-size: 100% 100%;}
.slide2 {background:url('http://pic12.photophoto.cn/20090729/0022005703186291_b.jpg');background-size: 100% 100%;}
.slide3 {background: url('http://site.meishij.net/r/91/86/1834091/a1834091_74999.jpg');background-size:100% 100%;}
.slide4 {background: url('http://img.zcool.cn/community/01374b589d3aeda801219c779eb84a.JPG@2o.jpg');background-size:100% 100%;}
.today h4{text-align: center;font-size:1.2em;}
.today h5{text-align: center;font-size:1.1em;}
.today ul{display: flex;justify-content: space-around;width:100%;margin:0 auto;}
.today ul.popel{margin-bottom:0.8rem;}
.today ul li{width:47%;height:110px;position: relative;margin:2% 0 2% 1%;}
.today ul li img{height:110px; width:100%;}
.today .word{background:rgba(255,255,255,0.6);color:#000; position: absolute;top:5%;left:8%;line-height:20px;font-weight:500;font-size:1.2em;padding:3% 2%;}
.today .word p{text-align:center;}

</style>

