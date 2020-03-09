<template>
    <div>
        <div class="rollTitle"><slot name="rollTitle"></slot></div>
        
        <div class="rollSide" :style="{ height: rollHeight + 'px' }">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "scrollItem",
        components:{

        },
        props:{
            rollHeight:Number
        },
        mounted() {
        }
    }
</script>

<style scoped>
    .rollSide {
         /*height: 510px;*/
        overflow-x: hidden;
        overflow-y: scroll;
        text-align: left;
    }
    .rollSide::-webkit-scrollbar {
        display: none;
    }

</style>