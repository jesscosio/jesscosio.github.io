<template>
    <div id="about">
        <navBar/>
        <img id="aboutImg" data-src="../assets/heraldsquare.jpg" alt="heraldsquare">
        
         <div class="bio">
            <p> Contact • EMAIL : jessica.cosio@icloud.com • MOBILE : (805) 865-6148 </p>
            <h2> EDUCATION </h2><h3>CALIFORNIA POLYTECHNIC STATE UNIVERSITY SAN LUIS OBISPO, CA B.S. Software Engineering</h3>
            <h2> EXPERIENCE</h2> 
<h3>Macy’s Inc. Software Engineer San Francisco, CA Aug 2015 - Present</h3>
            <p>
<br>• Full stack web development – [javascript, html, css/scss, node, npm, webpack, vue, git, react, typescript, express, backbone, responsive]
<br>• A/B testing and KPI tracking through web analytics implementations
<br>• Analytics using IBM coremetrics
<br>• High priority/urgent code delivery and defect fixes
<br>• Unit test coverage and performance test base lining behind delivered features 
<br>• Strong emphasis on process and delivery- especially using lean principles
<br>• Web app UX research - investigated implications, and proceeded with implementation 
<br>• Daily documentation of work as a steady habit
<br>• Weekly showcase of work to business stakeholders
            </p>
<h3>Macy's Inc. Tech Star Executive Development Program San Francisco, CA Aug 2015 – Jan 2016</h3>
    <p>
• Mobile web platform development team - [javascript,jquery, html,css/scss, handlebars, hapi, grunt]
<br> • Contributions to Macy's mobile single page webapp
<br> • Human resources sponsored training sessions
<br>• Delivered monthly showcase to program stakeholders, managers, and colleagues
<br>• Mobile Platform and Content Engineering- creation of common components for web developers, executed library updates</p>


<h3>Autoliv – Night Vision Goleta, CA Software Intern June 2015-Aug 2015</h3>
<p>
• Performed validation of newly updated gain calibration software on production floor equipment  <br>
• Wrote documentation used for the validation of software used to calibrate night vision cameras <br>
• Installed updates of calibration software on production floor equipment<br>
• Worked with EE lab to deliver script that transferred template files - [powershell]<br>
</p>

<h2>PROJECTS</h2>
<p>
• MACY'S STORE HUB: [javascript, vue, vuex, node, npm, webpack] Front End development for a Macy's internal tool that manages Macy's store event information
<br>• MACY'S OMNICLIENT STYLIST TOOL: [ javascript, node, angular, java, jboss, maven, sql ] Full stack development for a Macy's internal webapp used by Macy's store stylists to communicate with their clients via text
<br>• MACY’S VOICE LAB: [typescript, node, express, firebase, google cloud, aws-lambda, actions on google, alexa v2] Researched and developed voice applications for Google Home and Alexa platforms utilizing Google Cloud and AWS Lambda. Assisted with developing a shareable component that developers could extend 
<br>• SHOPPABLE CONTENT LEAN LAB : [javascript, node, backbone, handlebars] Responsible for running experiments and studying behavior of Macy’s customers on the responsive website to gain insight on producing
valuable content recommendations.
<br>• MOBILE WEB INNOVATION LEAN LAB : [javascript, node, backbone, handlebars] Responsible for running front-end A/B experiments, studying the signals of our mobile web customers and implementing features that provide an enhanced mobile shopping experience. 
<br>• GOOGLE AMP HACKATHON, NYC 2018: Macy’s homepage written in AMP
<br>• MACY’S HACKATHON TOP 5 CONTESTANT, 2017: Thumbs up! implemented a tap and zoom capability on the mobile website’s browse and search pages for viewing a high resolution image
of the product
<br>• MACY’S IDEA LAB, MEN’ S WEARHOUSE ONLINE TUXEDO RENTAL PROJECT: Developed front-end for “crawl” phase of a new partnership with Men’s Wearhouse that would ease the rental process for groups including the process for sizing and ordering
<br>• MOBILE WEB PLATFORM : Developed code and took ownership alongside a veteran team for optimizing the Macy's website for mobile/tablet devices
 </p>   
         </div>
        </div>
</template>

<script>
import navBar from "../components/navBar.vue";
// import welcomeCard from "../about/cards/welcomeCard.vue";

export default {
    name: "AboutMe",
    components: {
        navBar,
        // welcomeCard
    },
    mounted() {
        const img =  import(/* webpackChunkName: "heraldsquare" */ "../assets/heraldsquare.jpg");
        img.then((data)=>{
            document.getElementById("aboutImg").src = data.default;
        });
        
        
    }
}
</script>

<style scoped>

#about {
    text-align: center;
}
.bio {
    font-size: 14px;
    font-weight: 400;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
img {
    display: block;
    max-height: 250px;
    display: inline;
    margin-top: 10px;
}

#about /deep/ a {
   color: black;
}

</style>