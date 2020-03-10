<template>
  <div id="app">
    <mainFrame>
      <navHead slot="navHead"></navHead>

      <leftView slot="bodyLeft" :full-height="fullHeight"></leftView>
      <map-view slot = "mapBox" :fullHeight = "fullHeight"></map-view>
      <rightView slot="bodyRight" :full-height="fullHeight"></rightView>
    </mainFrame>
  </div>
</template>

<script>
  import mainFrame from 'components/common/mainFrame'
  import navHead from "components/common/navHead/navHead";

  import leftView from "views/leftView/leftView";
  import mapView from "views/mapView/mapView";
  import rightView from "views/rightView/rightView";

  export default {
    name: "app",
    components:{
      mainFrame,
      navHead,
      leftView,
      mapView,
      rightView
    },
    data(){
      return{
        fullHeight:Number,
        fullWidth:Number
      }
    },
    created(){
      this.fullHeight = document.documentElement.clientHeight;
      this.fullWidth = document.documentElement.clientWidth;
      console.log(this.fullHeight);
      console.log(this.fullWidth);
    },
    mounted() {
      this.get_bodyHeight();
    },
    methods: {
      get_bodyHeight() {
        //动态获取浏览器高度
        const that = this;
        window.onresize = () => {
          return (() => {
            window.fullHeight = document.documentElement.clientHeight;
            that.fullHeight = window.fullHeight;
          })();
        };
      }
    }
  }
</script>

<style>
  @import 'assets/css/base.css';
</style>
