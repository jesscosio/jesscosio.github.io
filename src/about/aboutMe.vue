<template>
    <div id="about">
        <navBar/>
        <img id="aboutImg" data-src="../assets/heraldsquare.jpg" alt="heraldsquare">
        
         <span class="bio">
            <p>Contact • EMAIL : jessica.cosio@icloud.com • MOBILE : (805) 865-6148 
            <p>EDUCATION • CALIFORNIA POLYTECHNIC STATE UNIVERSITY SAN LUIS OBISPO, CA B.S. Software Engineering</p>
            <p>EXPERIENCE• MACY’S INC. Software Engineer</p>
            <p>
                Winter 2015
SAN FRANCISCO, CA
Aug 2015 - Present
o Full stack web development – Javascript, Node, Backbone, HTML, CSS/SCSS, responsive, Angular, Java, Jboss, Maven
o A/B testing and KPI tracking through web analytics implementations
o Analytics using IBM coremetrics
o High priority/urgent code delivery and defect fixes
o Unit test coverage and performance test base lining behind delivered features o Strong emphasis on process and delivery- especially using lean principles
o Web app marketing research - emphasis on privacy and UX implications o Daily documentation of work as a steady habit
o Weekly showcase of work to business stakeholders
            </p>
            <p>Tech Star Executive Development Program Aug 2015 – Jan 2016
o Balanced platform development with human resources managed training sessions
o Delivered monthly showcase to program stakeholders, managers, and colleagues
o Mobile Platform and Content Engineering- creation of common components for web developers, executed library updates</p>


<p>• AUTOLIV – NIGHT VISION Goleta, CA
Software Intern June 2015-Aug 2015
o Insured validity of gain calibration testing software used for night vision cameras o Created test documentation for verification of calibration software
o Developed small script for one off need from EE lab
PROJECTS
• MACY’S VOICE LAB: Researched and developed voice applications for Google Home and Alexa platforms utilizing Google Cloud and AWS Lambda. Assisted with architecting a single codebase and creating module components.
• SHOPPABLE CONTENT LEAN LAB : Responsible for running experiments and studying behavior of Macy’s customers on the responsive website to gain insight on producing
valuable content recommendations.
• MOBILE WEB INNOVATION LEAN LAB : Responsible for running front-end experiments and studying the behavior of our mobile web customers to gain insight into providing an enhanced mobile shopping experience. Utilized A/B testing techniques and worked under principles of Fast, Clean, and Modern.
• GOOGLE AMP HACKATHON, NYC 2018: Macy’s homepage written in AMP.
• MACY’S HACKATHON TOP 5 CONTESTANT, 2017: Thumbs up! implemented a tap and zoom capability on the mobile website’s browse and search pages for viewing a high resolution image
of the product.
• MACY’S IDEA LAB, MEN’ S WEARHOUSE ONLINE TUXEDO RENTAL PROJECT: Assisted in the “crawl” phase of a new partnership with Men’s Wearhouse that would ease the rental process for groups including the process for sizing and ordering.
• MOBILE WEB PLATFORM : Developed code and took ownership alongside a veteran team for optimizing the Macy's website for mobile/tablet devices. </p>
         </span>
        
        
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

.bio {
    font-size: 14px;
    font-weight: 400;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
img {
    float: right;
    max-height: 250px;
    display: inline;
}

#about /deep/ a {
   color: black;
}

</style>