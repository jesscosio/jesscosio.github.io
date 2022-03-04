<template>
<div id="BlogPage">
    <navBar />
</div>
    
</template>

<script>
import navBar from '../components/navBar.vue';

const largeScreen = 724;
const smallScreen = 330;

const HomePage = {
    name: 'BlogPage',
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
        },

    }
    
}; 
export default BlogPage;
</script>  

<style scoped>

#BlogPage {
    position: fixed;
    height: 100vh;
    width: 100vw;
    
}

   

</style>
