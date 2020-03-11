<template>
    <div id="gaodeMap">
        lalalalla
    </div>
</template>

<script>
    import {request} from 'network/request.js'
    import {getMapArea,getMapNews} from "network/getMapData";

    export default {
        name: "gaodeMap",
        //变量定义的地方
        data() {
           return {
               //例子如下，变量类型和默认值
               // name:{
               //     type:String,
               //     default:'zhangkai'
               // }
               areaData:{}
           }
        },
        mounted() {
            //写代码的地方，mouted就是vue组件挂载之后调用的一个生命周期的函数
            this.getData()
        },
        methods:{
            //写函数的地方，在mouted里面用 this.xxx() 调用
            getData(){
                request('/area').then(res => {
                    this.areaData = res
                    console.log(res);
                })
                // getMapArea().then(res => {
                //     this.areaData = res
                //     console.log(res);
                // })
            }
         }
    }
</script>

<style scoped>
    #gaodeMap{
        color: white;
    }

</style>