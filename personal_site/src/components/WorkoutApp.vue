<template>
    <div class='container-fluid'>
      <div class='row flex-column-reverse flex-xl-row'>
        <div class='col-xl-5'>
          <div class='jumbotron'>
            <div class='row mb-2 justify-content-end'>
              <div class='col-2'> 
                <a href="https://github.com/awhitin2/WorkoutApp" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-github" style="font-size: 2rem"></i>
                </a>
              </div>
            </div>
            <h5><strong>Description:</strong></h5>
            <p>
              Fully functional mobile app built with Python and KivyMD. 
              The app allows a user to create and edit custom workouts, 
              log workout results, view previous result history, view and edit previously completed sessions, 
              view some built-in data analytics, and interface with an interactive graph to visualize workout history.   
            </p>
            <div class='row'>
              <div class='col'>
                <h4 class='m-3 text-center'>
                  <b-badge class='bg-success'>Python</b-badge>
                  <b-badge class='bg-primary'>KivyMD</b-badge>
                  <b-badge class='bg-warning'>KV Lang</b-badge>
                  <b-badge class='bg-info'>NoSQL</b-badge>
                  <b-badge class='bg-dark'>Google Firebase</b-badge>
                  <b-badge class='bg-danger'>MatPlotLib</b-badge>
                  <b-badge class='bg-success'>Pandas</b-badge>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div class='col-xl-7 align-self-center'>
          <h3 class='text-success text-center'>Demo video coming soon!</h3>          
        </div>
      </div>
    </div>
</template>

<script>
    export default {
    name: 'WorkoutApp',
    }
</script>