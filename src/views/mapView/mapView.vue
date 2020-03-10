<template>
    <div>
        <div class = mapBox :style="{height:mapHeight+'px'}">
<!--            <img src="~assets/img/test.jpg" alt="" v-if="show">-->
<!--            <img src="~assets/img/test1.jpg" alt="" v-else>-->
            <router-view></router-view>
        </div>

        <tabControl :tabItem="['World Map','China Map']"
                    class="tabControl" @tabClick = "tabClick" ref = "tabControl" :height=30 :width=200
                     />

        <scroll class="inf-our" :rollHeight = 62>
            <div slot="content" class="content">emmmmmmmmmmmmm</div>
        </scroll>

    </div>
</template>

<script>
    import tabControl from "components/content/tabControl/tabControl";
    import scroll from "components/common/scroll/scroll";

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
              show:true
          }
        },
        methods:{
            tabClick(index){
                switch (index) {
                    case 0:
                        this.show = true
                        this.$router.push('/worldMap')
                        break
                    case 1:
                        this.show = false
                        this.$router.push('/chinaMap')
                        break
                }
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