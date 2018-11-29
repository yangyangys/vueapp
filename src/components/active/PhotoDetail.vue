<template>
    <v-touch class="detail" :style="aobj" @swipeleft="swipeLeft" @swiperight="swipeRight" @tap="tap">
        
    </v-touch>
    
</template>
<script>
export default {
    data(){
        return{
            nowIndex:0,
        }
    },
    computed:{
        aobj(){
            return{
                background:`#000 url(${this.$store.state.photoList[this.nowIndex].src}) no-repeat center / contain`,
            }  
        }
    },
    mounted() {
        this.nowIndex=this.$route.params.index;
    },
    methods:{
        swipeLeft(){
            this.nowIndex++;
            if(this.nowIndex == this.$store.state.photoList.length){
                this.nowIndex = 0;
            }
        },
        swipeRight(){
            this.nowIndex--;
            if(this.nowIndex < 0){
                this.nowIndex = this.$store.state.photoList.length - 1;
            }
        },
        tap(){
            history.back(-1);
        }
    }
}
</script>
<style scoped>
 .detail{position: absolute;top:0;right: 0;bottom:0;left:0;}
</style>
