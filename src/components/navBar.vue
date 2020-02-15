<template>
    <div id="navBar" class='nav-wrapper'>
        <nav>
            <ul>
                <router-link to="/">Home</router-link>
                <router-link to="/about">About Me</router-link>
                <a href="https://github.com/jesscosio">Github</a>
                <a href="https://www.linkedin.com/in/jesscosio/">LinkedIn</a>
                <a href="https://www.calpoly.edu/">CalPoly- SLO</a>

                <!-- <router-link to="/languages">Languages</router-link> -->
                <!-- <router-link to="/pokemon">Pokemon</router-link>
                
                <router-link to="/hobbies">Hobbies</router-link>
                <router-link to="/blog">Blog</router-link> -->
            </ul>
        </nav>
         </div>
</template>

<script>


export default {
    name: "NavBar"
 
}
</script>

<style scoped>
    ul {
        margin: 0;
        padding: 0;
    }
    a {
        padding: 15px;
        margin: 0;
        flex-basis: 100%;
        font-size: 16px;
        font-weight: 400;
        font-family: "Monaco", Helvetica, sans-serif;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
    }
    a:active {
        background-color: rgba(255,255,255,0.25);
    }
    
</style>