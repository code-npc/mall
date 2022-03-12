<template>
<div id="detail">
    <detail-navbar></detail-navbar>
    <detail-swiper :topImages="topImage"></detail-swiper>
    <detail-base-info :Goods="goodsInfo"></detail-base-info>
</div>
</template>

<script>

import DetailNavbar from './childComps/DetailNavbar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'

import {getDetail,GoodsInfo} from 'network/detail'
export default {
    name:'Detail',
    components: {
        DetailNavbar,
        DetailSwiper,
        DetailBaseInfo
    },
    data () {
        return {
            iid:null,
            topImage:[],
            goodsInfo:{}
        }
    },
   
        created () {
        //1.保存传入的iid
        this.iid = this.$route.params.iid

        //根据iid请求详情数据
        getDetail(this.iid).then(res =>{
        //获取顶部轮播图的数据    
            this.topImage = res.result.itemInfo.topImages
        //获取详情页商品的信息
            this.goodsInfo = new GoodsInfo( res.result.itemInfo,
                                            res.result.columns,
                                            res.result.shopInfo.services)
        })
       
    }
    
}
</script>

<style scoped>

</style>