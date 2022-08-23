<template>
    <div class='container-fluid'>
      <div class='row'>
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
              Bespoke Python script that scrapes information from the client’s new customer sign up process, 
              logs customer info, notifies the client about any missing details, 
              selects from and sends one of several onboarding emails depending on customer particulars,
              and creates new customer contact card within client's workflow.
            </p>
            <div class='row'>
              <div class='col'>
                <h4 class='m-3 text-center'>
                  <b-badge class='bg-success'>Python</b-badge>
                  <b-badge class='bg-primary'>SQLite3</b-badge>
                  <b-badge class='bg-warning'>Google People API</b-badge>
                  <b-badge class='bg-info'>Pandas</b-badge>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div class='col-xl-7 align-self-center'>
          <blockquote class="blockquote text-center text-success">
            <h4 class="mb-5">
              "Unlike others we've contracted, Andrew worked within our system constraints to find a solution that met our particular needs.
              Having this step of our workflow automated has been a <strong>huge time saver.</strong>"
            </h4>
            <h4>
              <footer class="blockquote-footer text-success">Phil</footer>
            </h4>
          </blockquote>     
        </div>
      </div>
    </div>
</template>

<script>
    export default {
    name: 'ApplicantProcessor',
    }
</script>