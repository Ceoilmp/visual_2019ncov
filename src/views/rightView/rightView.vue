<template>
    <div id="rightView">
        <div class="data">
            <div class="dead">
                <div class="summarize">
                    <div class="sum-title">Total Deaths</div>
                    <div class="sum-num">3592</div>
                </div>
                <scroll :rollHeight="scrollHeight">
                    <div v-for="item in testData" slot="content">
                        <div class = des-content>
                            <span class="content-num">{{item.deadCount}}</span>
                            <span class="content-name">{{item.cityEnglishName}}</span>
                        </div>
                    </div>
                </scroll>
            </div>

            <div class="recover">
                <div class="summarize">
                    <div class="sum-title">Total Recovered</div>
                    <div class="sum-num">59922</div>
                </div>
                <scroll :rollHeight="scrollHeight">
                    <div v-for="item in testData" slot="content">
                        <div class = des-content>
                            <span class="content-num">{{item.curedCount}}</span>
                            <span class="content-name">{{item.cityEnglishName}}</span>
                        </div>
                    </div>
                </scroll>
            </div>
        </div>
        <div class = mapBox>
            <img src="~assets/img/1.jpg" alt="" v-if="currentIndex === 0">
            <img src="~assets/img/2.jpg" alt="" v-else-if ="currentIndex === 1">
            <img src="~assets/img/3.jpg" alt="" v-else>
        </div>

        <tabControl :tabItem="['Actual','Logarithmic','Daily Cases']"
                    class="tabControl" @tabClick = "tabClick" ref = "tabControl" :height=30 :width=300
        />
    </div>
</template>

<script>
    import scroll from "components/common/scroll/scroll";
    import {getTestData} from "common/fun.js";
    import tabControl from "components/content/tabControl/tabControl";

    export default {
        name: "rightView",
        components:{
            scroll,
            tabControl
        },
        props:{
            fullHeight:Number
        },
        data(){
            return{
                testData:Array,
                currentIndex:Number
            }
        },
        computed:{
            scrollHeight(){
                return this.fullHeight - 400
            }
        },
        created() {
            this.testData = getTestData().cities
            console.log(this.testData);
        },
        methods:{
            tabClick(index){
                this.currentIndex = index
                // switch (index) {
                //     case 0:
                //         this.show = true
                //         break
                //     case 1:
                //         this.show = false
                //         break
                //     case 2:
                //         this.show = false
                //         break
                // }
            }
        }
    }
</script>

<style scoped>
    #rightView{
        color: #ffffff;
        font-size: 14px;
    }
    .data{
        display: flex;
        justify-content: space-between;
        border-bottom: #000 solid 10px;
    }
    .dead ,.recover{
        flex:1;
        border-right: #000 solid 10px;
    }
    .summarize{
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom: #000000 solid 10px;
    }
    .sum-title{
        font-weight: lighter;
    }

    .sum-num{
        font-size: 30px;
        font-weight: bold;
    }
    .recover .sum-num{
        color: #5cab1e;
    }

    .des-content{
        padding-top: 14px;
        padding-bottom: 14px;
        border-bottom: #555 solid 1px;
        font-size: 16px;
    }
    .content-name{
        font-weight: lighter;
    }
    .content-num{
        padding-left: 40px;
        padding-right: 20px;
    }
    .recover .content-num{
        color: #5cab1e;
    }

    .mapBox{
        height: 200px;
        background-color: white;
    }

    .mapBox img{
        width: 100%;
        height: 100%;
        display: block;
    }

    .tabControl{
        font-size: 10px;
        padding: 0;
    }

</style>