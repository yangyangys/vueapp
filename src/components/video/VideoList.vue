<template>
    <div class="foodlist">
        <ul class="food-list">
            <li class="food" v-for="food in foodList" :key="food.id">
                <div class="food-img">
                    <video :src="food.albums" controls></video>
                </div>
                 <div class="food-info">
                    <p>{{food.title}}</p>
                    <p>{{food.time}} / {{food.player}}</p>
                </div>
            </li>
            <div class="loading" v-show="loadingShow"><img src="../../assets/img/loading.gif"></div>
            <div class="tip" v-show="tip"><h4>小主，到底了</h4></div>
        </ul>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return {
            foodList:[],
            loadingShow:false,
            tip:false,

        }
    },
    methods:{
        loadData(){
            let url='./static/data/videodata.json'
            Axios.get(url).then(res=>{
                let list = res.data.result;
                let data = list.slice(this.foodList.length, this.foodList.length + 5);
                if(data.length<5){
                    this.tip=true;
                }
                this.foodList= this.foodList.concat(data);
            }).catch(
                ()=>{
                    
                }
            );
        },
    },
    mounted() {
        this.loadData();
        window.onscroll=()=>{
            let clientHeight = document.documentElement.clientHeight;
            let scrollTop = Math.ceil(document.documentElement.scrollTop||
            document.body.scrollTop);
            let scrollHeight=document.documentElement.scrollHeight;
            if(clientHeight + scrollTop >= scrollHeight){
                this.loadingShow = true;
                if(!this.tip){
                    this.loadData();
                }else{
                    this.tip=true;
                    this.loadingShow = false;
                }
            }
        }
    },
}
</script>
<style scoped>
    .foodlist{margin-bottom:1rem;}
    .food-list{margin-top:1rem;}
    .food{display:flex;padding:0.2rem;border-bottom:1px solid #ccc;}
    .food-img{flex:2 1 0;margin-right: 0.2rem;}
    .food-img video{width:100%;}
    .food-info{flex:2 1 0;}
    .food-info p{color:#666;font-family: "微软雅黑";font-size:0.7em;}
    .food-info p:first-child{color:#000;font-size:0.3rem;}
    .loading{margin-bottom:0.3rem;text-align: center;}
    .tip{text-align: center;}
</style>
