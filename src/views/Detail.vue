<template>
  <div>详情页</div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            // 商品详情列表
            goodsdetaillist:[],
        }
    },
    methods:{
        getDate(){
            let id=this.$route.query.id;
            let that = this;
            let url = 'http://localhost:8080/data/goodsdetail.json';
            axios
                .get(url)
                .then(function(response) {
                    // console.log(response);
                    that.goodsdetaillist = response.data.goodsdetaillist[id];
                    console.log(that.goodsdetaillist);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    },
    activated(){
        this.getDate()
    },
    created(){
    }
}
</script>

<style>

</style>