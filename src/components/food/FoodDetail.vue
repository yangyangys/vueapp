<template>
    <div class="detail">
        <div class="detail-content">
            <div class="detail-img">
                <img :src="foodDetail.albums">
            </div>
            <div class="detail-info">
                <h2 v-text="foodDetail.title"></h2>
                <p v-text="foodDetail.tags"></p>
            </div>
        </div> 
        <hr />
        <div class="step">
            <div>
                <h3>材料</h3>
                <p>{{foodDetail.ingredients}}{{foodDetail.burden}}</p>
            </div>
            <div>
                <h3>步骤</h3>
                <div v-for="(step,index) in steps" :key="index" class="process">
                    <p >{{step.step}}</p>
                    <div class="img"><img :src="step.img" alt=""></div>
                </div>
            </div>  
        </div>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return{
            foodDetail:[],
            steps:[],

        }
    },
    mounted(){
        let url1='./static/data/getMenuList'+this.$route.params.id+'.json'
        Axios.get(url1).then(res=>{
            this.foodDetail=res.data.result[0];
            this.steps=this.foodDetail.steps;
            }
            
        ).catch(()=>{
            
        }
           
        );

    }
}
</script>
<style scoped>
    .detail{margin:0.8rem 0 1rem 0;}
    .detail-content{display: flex;padding:0 0.2rem;}
    .detail-img{flex:2 1 0;margin-right:0.3rem;overflow: hidden;}
    .detail-img img{width:98%;height:1.8rem;margin:6% 0;}
    .detail-info{flex:2 1 0;margin:auto;}
    .detail-info p{font-size:1.1em;}
    .detail-info h2{font-size:1.5em;color: orange;}
    .step{padding:0 0.2rem;}
    h3{text-align: center;font-weight:600;font-size:0.4rem;line-height: 0.8rem;}
    p{font-size:1.3em;font-weight: 400;}
    .process{width:100%;font-size:1em;}
    .process .img{width:100%;display: flex;justify-content: center;margin:0.2rem auto;height: 3.6rem;overflow: hidden;}
</style>



