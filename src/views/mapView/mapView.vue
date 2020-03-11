<template>
    <div>
        <div class = mapBox :style="{height:mapHeight+'px'}">
<!--            <img src="~assets/img/test.jpg" alt="" v-if="show">-->
<!--            <img src="~assets/img/test1.jpg" alt="" v-else>-->
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>

        <tabControl :tabItem="['KAI','World Map','China Map']"
                    class="tabControl" @tabClick = "tabClick" ref = "tabControl" :height=30 :width=300
                     />

        <scroll class="inf-our" :rollHeight = 62>
            <div slot="content" class="content">emmmmmmmmmmmmm</div>
        </scroll>

    </div>
</template>

<script>
    import tabControl from "components/content/tabControl/tabControl";
    import scroll from "components/common/scroll/scroll";
    import result from "assets/json/area.json"
    import axios from 'axios'

    import {getMapArea,getMapNews} from "network/getMapData";

    export default {
        name: "mapView",
        components:{
            tabControl,scroll
        },
        props:{
          fullHeight:Number
        },
        computed:{
          mapHeight(){
              return this.fullHeight - 184
          }
        },
        data(){
          return{
              show:true,
              mapDataArea:{}
          }
        },
        mounted(){
            // console.log(result);
            // this.getMapData()
        },
        methods:{
            tabClick(index){
                switch (index) {
                    case 0:
                        this.show = true
                        this.$router.push('/gaodeMap')
                        break
                    case 1:
                        this.show = true
                        this.$router.push('/worldMap')
                        break
                    case 2:
                        this.show = false
                        this.$router.push('/chinaMap')
                        break
                }
            },
            getMapData(){
                getMapArea().then(res => {
                    this.mapDataArea = res
                    console.log(res);
                })

                getMapNews().then(res => {
                    console.log(res);
                })

                // axios.all(axios({
                //     url:'https://lab.isaaclin.cn/nCoV/api/area'
                // }),axios({
                //     url:'https://lab.isaaclin.cn/nCoV/api/news'
                // })).then(result => {
                //     console.log(result);
                // })
            }
        }
    }
</script>

<style scoped>
    .mapBox{
        /*height: 500px;*/
        background-color: black;
    }

    .mapBox img{
        width: 100%;
        height: 100%;
        display: block;
    }

    .inf-our{
        color: white;
        border-top: #000 solid 10px;
        font-size: 12px;
        font-weight: lighter;
    }

    .content{
        padding: 10px;
    }
</style>