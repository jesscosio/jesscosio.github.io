<template>
<div id="HomePage">
    <div v-bind:style="{width:windowWidth+'px'}"  v-bind:class="[{homeImgLrg: windowWidth >= 724}, {homeImgSml: windowWidth <= 320}, {homeImgMed: windowWidth < 724}, 'homeImg']"></div>
    
    <navBar />
</div>
    
</template>

<script>
import navBar from '../components/navBar.vue';

const HomePage = {
    name: 'HomePage',
    components: {navBar},
    data : function(){
        return {
            windowWidth: window.innerWidth
        };
        
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        document.body.style.overflow = "hidden";

    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
        document.body.style.overflow = "";
    },
    methods: {
        handleResize: function() {
            this.windowWidth = window.innerWidth;
        }
    }
    
}; 
export default HomePage;
</script>  

<style scoped>

.homeImgLrg {
    background-image: url("../assets/mowgli-lrg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
}
.homeImgMed {
    background-image: url("../assets/wrongway-med.jpg");
    background-size: cover;
    background-repeat: no-repeat;
}
.homeImgSml {
    background-image: url("../assets/citywalk-sml.jpg");
    background-size: cover;
    background-repeat: no-repeat;
}

.homeImg {
        height: 100%;
        width: 100%;
        opacity: 80%;
}
#HomePage {
    position: fixed;
    height: 100vh;
    width: 100vw;
    
}

    #HomePage /deep/ nav {
        position: absolute;
        top: 0;
        text-align: center;
        width: 100%;
    }
    #HomePage /deep/ ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

</style>
