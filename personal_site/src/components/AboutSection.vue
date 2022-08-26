<template>
  <div class="container" id='about'>
    <div class='row flex-column-reverse flex-xl-row'>
      <div class='col-md-7'>
        <div class='row'>
          <div class='col-md'>
            <h1 class='pt-3'>About me</h1>
            <hr class="my-4 bg-warning" style="height:3px;border:none">
            <p>
              I'm an enthusiastic software development engineer with several years of experience in Python for data science/analytics 
              and more recent experience in full-stack software engineering. I'm a passionate and rapid learner and with an 
              educational and professional background in structured finance, business strategy, and international development. 
            </p>
            <p>
              While I have loved the big-picture of my previous work experience in international structured finance, nothing has captured my attention moment-by-moment like software development. 
              Solving puzzles and learning new things, whether it's a new framework or a new spoken language, are when I feel most engaged. 
              I'm thrilled to have found a career where I can engage in that kind of work day-to-day.
            </p>
          </div>
        </div>  
        <h4>Skills</h4>
        <div class='row mt-2'>
          <div class='col-md'>
            <b-card no-body>
              <b-tabs pills card justified>
                <b-tab title="Dev" active>
                  <b-card-text>
                    <tech-skills></tech-skills>
                  </b-card-text>
                </b-tab>
                <b-tab title="Data">
                  <b-card-text>
                    <data-skills></data-skills>
                  </b-card-text>
                </b-tab>
              </b-tabs>
            </b-card>
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
import TechSkills from '@/components/TechSkills.vue'
import DataSkills from '@/components/DataSkills.vue'

export default {
  name: 'AboutSection',
  components: {
    TechSkills,
    DataSkills
  }
}
</script>


            // <p>
            //   Down the road I aim to combine my passion for software development/tech-driven solutions 
            //   with my background in international finance and international development into a Fintech SAAS 
            //   platform to aid capital flows in developing countries.
            // </p>