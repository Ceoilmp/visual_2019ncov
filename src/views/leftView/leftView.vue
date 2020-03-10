<template>
    <div id="leftView">
        <div class="summarize">
            <div class="sum-title">Total Confirmed</div>
            <div class="sum-num">106,026</div>
        </div>
        <scroll :rollHeight="scrollHeight">
            <div slot="rollTitle" class="rollTitle">Confirmed Case by<br>Country/Region</div>
            <div v-for="item in testData" slot="content">
                <div class = des-content>
                    <span class="content-num">{{item.currentConfirmedCount}}</span>
                    <span class="content-name">{{item.cityEnglishName}}</span>
                </div>
            </div>
        </scroll>

        <div class="updateTime">
            <div class="updateTime-title">Last Updated Time</div>
            <div class="updateTime-data">{{updateTime}}</div>
        </div>
    </div>
</template>

<script>
    import scroll from "components/common/scroll/scroll";
    import {getTestData} from "common/fun.js"

    export default {
        name: "leftView",
        components:{
            scroll
        },
        props:{
            fullHeight:Number
        },
        data(){
            return{
                testData:Array,
                updateTime:{
                    type:String,
                    default:'2020/3/8 11.18'
                }
            }
        },
        computed:{
            scrollHeight(){
                return this.fullHeight - 300
            }
        },
        created() {
            this.testData = getTestData().cities
            console.log(this.testData);
            this.updateTime = '2020/3/8 11.18AM'
        }
    }
</script>

<style scoped>
    #leftView{
        color: #ffffff;
        font-size: 14px;
    }
    .rollTitle{
        font-weight: lighter;
        padding-top: 15px;
        padding-bottom: 15px;
        border-bottom: #555 solid 1px;
    }
    .summarize{
        text-align: center;
        padding-top: 15px;
        padding-bottom: 15px;
        border-bottom: #000000 solid 10px;
    }
    .sum-title{
        font-weight: lighter;
    }
    .sum-num{
        font-size: 30px;
        font-weight: bold;
        color: red;
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
        color: red;
        padding-left: 50px;
        padding-right: 20px;
    }

    .updateTime{
        border-top: #000 solid 10px;
    }

    .updateTime div{
        text-align: center;
    }
    .updateTime-title{
        font-size: 10px;
        font-weight: lighter;
        margin-top: 14px;
        /*margin-bottom: 4px;*/
    }
    .updateTime-data{
        font-size: 10px;
        margin-top: 14px;
        margin-bottom: 6px;
        font-weight: bold;
    }

</style>