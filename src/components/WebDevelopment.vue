<template>
  <div class="web-dev">
    <h1>CPSC 314 - Web Development</h1>
    <div class="sub-text">Riley Dillon</div>
    <a href="mailto:dillonr@gonzaga.edu" class="sub-text link">dillonr@gonzaga.edu</a>    
    <div class="sub-text">Paccar 107 T/Th 4:40-6PM</div>
    <p>
      <div class="title">Description</div>
      <div class="text">This course provides an overview of website development. Students will learn how the various features, including HTML5, CSS, JavaScript, Ajax, multimedia, HTTP, clients, servers, and databases, function together in today's web environment. The course will provide a web development foundation focusing on content and client-side components, with an overview of the server-side technologies. In addition, software and services that are easily incorporated into a website, for example, maps and content management, will be discussed and frontend frameworks will be introduced.</div>
    <p>
    <div class="title">Grading</div>
    <div class="text">
      <span class="percent">35%</span>&nbsp;Assignments     
    </div>
    <div class="text">
      <span class="percent">15%</span>&nbsp;Quizzes     
    </div>
    <div class="text">
      <span class="percent">20%</span>&nbsp;Project     
    </div>
    <div class="text">
      <span class="percent">30%</span>&nbsp;Exams     
    </div>
    <!-- <p> -->
    <!-- <div class="link" v-on:click="goToCalendar">Calendar</div> -->

  </div>
</template>

<script>
export default {
  name: 'WebDev',
  data () {
    return {
    }
  },
  methods: {
    goToCalendar () {
      this.$router.push({ name: 'Calendar' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.web-dev {
  padding: 0 20px;
}
.sub-text {
  font-size: 20px;
}
.title {
  font-size: 24px;
  text-align: left;
}
.text {
  font-size: 18px;
  padding-left: 20px;
  text-align: left;  
}
.link {
  font-size: 20px;
  color: #2c87aa;
  cursor: pointer;
  text-decoration: none;
}
.link:hover, .percent {
  font-weight: bold;
}
@media only screen and (max-width: 768px) {
  h1 {
    font-size: 26px;
  }
  .web-dev {
    padding: 0 10px;
  }
  .sub-text {
  font-size: 14px;
}
.title {
  font-size: 22px;
  text-align: left;
}
.text {
  font-size: 12px;
  padding-left: 10px;
}
.link {
  font-size: 14px;
}
}
</style>
