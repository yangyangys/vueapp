<template>
    <div class="footer">
        <ul>
            <li>
                <router-link to="/recom/recomlist">推荐</router-link> 
            </li>
            <li>
                <router-link to="/food">猜你喜欢</router-link> 
            </li>
            <li>
                <router-link to="/active">最IN活动</router-link> 
            </li>
            <li>
                <router-link to="/video">视频菜谱</router-link> 
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
       
    }
</script>
<style scoped>
    .footer{width:100%;height:0.8rem;position: fixed;bottom:0;line-height: 0.8rem;border-top:1px solid #f1f1f1;z-index: 100;background: #fff;}
    .footer ul{display: flex;justify-content: space-around;font-size: 1.1em;}
    .footer li a{color:#868686;outline:none;}
    .footer li a.router-link-active{color:#ff4c39;}
    
</style>



