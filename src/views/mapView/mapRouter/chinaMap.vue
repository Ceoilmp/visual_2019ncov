<template>
    <div class="map-area" :id="mapId"></div>
</template>
<script>
    import loadBMap from "common/loadBMap";
    export default {
        data() {
            return {
                mapId: 'BMap-' + parseInt(Date.now() + Math.random()),
                myMap: null
            }
        },
        mounted() {
            this.initMap()
        },
        methods: {
            initMap() {
                let ak = 'MxbXq3gadXKFYlNmG6UIF2m1CBtwanba'
                loadBMap(ak)
                    .then(() => {
                        // 百度地图API功能
                        this.myMap = new BMap.Map(this.mapId) // 创建Map实例
                        this.myMap.centerAndZoom(new BMap.Point(116.404, 39.915), 11) // 初始化地图,设置中心点坐标和地图级别
                        //添加地图类型控件
                        this.myMap.addControl(
                            new BMap.MapTypeControl({
                                mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
                            })
                        )
                        this.myMap.centerAndZoom("北京",1);
                        this.myMap.enableScrollWheelZoom(true) //开启鼠标滚轮缩放
                        this.myMap.setMapStyleV2({
                            styleId: 'dfc7488231a018f4698d37c5d20039ad'
                        });
                    })
                    .catch(err => {
                        console.log('地图加载失败')
                    })
            }
        }
    }
</script>
<style scoped>
    .map-area {
        width: 100%;
        height: 500px;
    }
</style>
