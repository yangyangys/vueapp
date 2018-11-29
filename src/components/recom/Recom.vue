<template>
    <div>
        <common-footer></common-footer>
        <router-view></router-view>
    </div>
</template>
<script>

import CommonFooter from '../common/Footer'
export default {
    components:{
        CommonFooter,
    }
}
</script>
<style scoped>

</style>


