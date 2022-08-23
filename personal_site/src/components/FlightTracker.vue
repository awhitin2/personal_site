<template>
    <div class='container-fluid'>
      <div class='row'>
        <div class='col-5'>
          <div class='jumbotron'>
            <h5><strong>Description:</strong></h5>
            <p>
              Enter flight details and receive SMS alerts about any changes. 
              Includes validation on entered flight details and user phone number.
            </p>
          </div>
          <div class='row'>
            <div class='col'>
              <h3 class='m-3'>
                <b-badge class='bg-success'>Python</b-badge>
                <b-badge class='bg-primary'>REST API</b-badge>
                <b-badge class='bg-warning'>Flask</b-badge>
                <b-badge class='bg-info'>VUE.js</b-badge>
              </h3>
              <h3 class='m-3 text-center'>
                <b-badge class='bg-dark'>SQL Alchemy</b-badge>
                <b-badge class='bg-danger'>Heroku</b-badge>
              </h3>
            </div>
          </div>
        </div>
        <div class='col'>
          <img class="img-fluid img-thumbnail" src="@/assets/flight_tracker.jpg" alt="Flight tracker landing page">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
    name: 'FlightTracker',
    }
</script>