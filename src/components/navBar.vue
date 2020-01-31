<template>
    <div id="navBar" class='nav-wrapper'>
        <nav>
            <ul>
                <router-link to="/">Home</router-link>
                <router-link to="/about">About Me</router-link>
                <router-link>Languages</router-link>
                <!-- <router-link>Pokemon</router-link>
                
                <router-link>Hobbies</router-link>
                <router-link>Blog</router-link> -->
            </ul>
        </nav>
         </div>
</template>

<script>


export default {
    name: "NavBar",
 
}
</script>