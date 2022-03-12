<template>
    <nav-bar>
        <div slot="left" class="left" @click="backClick"><img src="~assets/img/common/back.svg" alt=""></div>
        <div slot="center" class="title">
            <div v-for="(item , index) in titles" :key="index" class="title-item" :class="{active:currentIdex === index}" @click="showTitle(index)">{{item}}</div>
        </div>
    </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
    components: {
        NavBar
    },
    data () {
        return {
            titles:['商品','参数','评论','推荐'],
            currentIdex:0,
        }
    },
    methods: {
        showTitle(index){
            this.currentIdex = index
        },
        backClick(){
            // this.$router.go(-1)
            this.$router.back()
        }
    }
}
</script>

<style scoped>
    .title{
        display: flex;
        font-size: 13px;
    }

    .title-item{
        flex: 1;
    }

    .left img{
        width: 15px;
        margin-top: 15px;
    }

    .active{
        color: var(--color-tint);
    }
</style>