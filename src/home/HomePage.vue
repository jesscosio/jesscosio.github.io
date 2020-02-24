<template>
<div id="HomePage">
    <img id='homeImg'/>
    <navBar />
</div>
    
</template>

<script>
import navBar from '../components/navBar.vue';

const largeScreen = 724;
const smallScreen = 330;

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
        this.loadBackground();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
        document.body.style.overflow = ""; // -- should reset modified body -- 
    },
    methods: {
        handleResize: function() {

            this.windowWidth = window.innerWidth;
            this.loadBackground();
        },
        loadBackground: function() {
            document.body.style.overflow = "hidden";
            document.body.style.margin = 0;
            let img;

            if(this.windowWidth >= largeScreen) {
                img =  import(/* webpackChunkName: "largeImage" */ "../assets/mowgli-lrg.jpg");
            } else if (this.windowWidth < largeScreen && this.windowWidth > smallScreen) {
                img =  import(/* webpackChunkName: "medImage" */ "../assets/wrongway-med.jpg");
            } else {
                img =  import(/* webpackChunkName: "smallImage" */ "../assets/stomp.jpg");
            }      

            img.then((data)=>{
                document.getElementById("homeImg").src = data.default;
            });
        }
    }
    
}; 
export default HomePage;
</script>  

<style scoped>

#homeImg {
        height: 100%;
        opacity: 80%;
        background-size: cover;
        background-repeat: no-repeat;
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
