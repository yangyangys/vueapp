<template>
    <div>
        <common-header><span slot="title">菜谱视频</span></common-header>
        <common-footer></common-footer>
        <router-view></router-view>
    </div>
</template>
<script>
import CommonHeader from '../common/Header'
import CommonFooter from '../common/Footer'
export default {
    components:{
        CommonHeader,
        CommonFooter,
    }
}
</script>
<style scoped>

</style>


