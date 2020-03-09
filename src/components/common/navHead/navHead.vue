<template>
    <div>
        <navBar>
            <div slot="left">
                <img src="~assets/img/logo.png" alt="">
                <span>2019-nCov Visualization</span>
            </div>
            <div>
                <img src="~assets/img/head/application.png" alt="">
            </div>
        </navBar>
    </div>
</template>

<script>
    import navBar from "components/content/navBar/navBar";
    export default {
        name: "head",
        components:{
            navBar
        }
    }
</script>

<style scoped>

</style>