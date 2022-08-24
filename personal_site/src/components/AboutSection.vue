<template>
  <div class="container" id='about'>
    <div class='row'>
      <div class='col-md-7'>
        <div class='row'>
          <div class='col-md'>
            <h1>About me</h1>
            <hr class="my-4 bg-warning" style="height:3px;border:none">
            <p>
              Enthusiastic software development engineer with 2.5 years of experience in Python for data science/analytics 
              and 1.5 years of experience in full-stack software engineering. Expert in Python for backend development, 
              full-stack development, scripting, data wrangling, and data analysis. Competent in both front and 
              backend application development. Passionate and rapid learner and with an educational and professional background 
              in structured finance, business strategy, and international development. 
            </p>
          </div>
        </div>        
      </div>
      <div class='col-md-5'>
        <img src="@/assets/headshot.jpg" class="img-fluid text-center" alt="headshot">
      </div>
    </div>
  </div>
</template>

<style>
  hr {
      border: none;
      height: 4px;
  }
</style>

<script>
import SkillsTable from '@/components/SkillsTable.vue'

export default {
  name: 'AboutSection',
  components: {
    SkillsTable
  }
}
</script>
