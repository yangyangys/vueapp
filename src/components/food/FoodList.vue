<template>
    <div>
        <ul class="food-list">
            <li class="food" v-for="food in foodList" :key="food.id" @click="goDetail(food.id)">
                <div class="food-img">
                    <img :src="food.albums" alt="">
                </div>
                 <div class="food-info">
                    <p class="title">{{food.title}}</p>
                    <p>{{food.tags}}</p>
                    <p>主料：{{food.ingredients}}</p>
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
            let url='./static/data/getMenuList.json'
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
        goDetail(id){
            this.$router.push('/food/foodDetail/'+id);
        }
    },
    mounted() {
        this.loadData();
        window.onscroll=()=>{
            //this.loadData();
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
    .food-list{margin:0.8rem 0;}
    .food{display:flex;padding:0 0.2rem;border-bottom:1px solid #ccc;}
    .food-img{flex:2 1 0;margin-right: 0.2rem;}
    .food-img img{height:1.9rem;width:100%;margin:6% 0;}
    .food-info{flex:2 1 0;}
    .food-info p{font-size: 1.1em;font-weight: 500;}
    .food-info p.title{font-weight:600;color:#000;font-size:1.4em;}
    .loading{margin-bottom:0.3rem;text-align: center;}
    .tip{text-align: center;}
</style>
