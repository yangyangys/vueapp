<template>
    <div class="header">
        <h2 class="title"><slot name="title">123</slot></h2>
    </div>
    
</template>
<script>
    export default{

    }
</script>
<style scoped>
    .header{width:100%;height:0.8rem;background:rgba(255,255,255,.8);position: fixed;top:0;line-height: 0.8rem;border-bottom:1px solid #f1f1f1;}
    .header .title{color: #000;position: absolute;top:50%;left:50%;transform: translate(-50%,-50%);font:0.4rem/0.8rem '微软雅黑';}
</style>

