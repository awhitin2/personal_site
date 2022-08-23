<template>
  <div class="container" id='projects'>
    <h1>Recent Projects</h1>
    <hr class="my-4 bg-warning" style="height:3px;border:none">
      <b-card no-body>
        <b-tabs pills card justified>
          <b-tab title="Flight Tracker" active>
            <b-card-text>
              <flight-tracker></flight-tracker>
            </b-card-text>
          </b-tab>
          <b-tab title="Album Browser">
            <b-card-text>
              <album-browser></album-browser>
            </b-card-text>
          </b-tab>
          <b-tab title="Workout App">
            <b-card-text>
              <workout-app></workout-app>
            </b-card-text>
          </b-tab>
          <b-tab title="Applicant Processor">
            <b-card-text>
              <applicant-processor></applicant-processor>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
  </div>
</template>

<script>
import FlightTracker from '@/components/FlightTracker.vue'
import AlbumBrowser from '@/components/AlbumBrowser.vue'
import WorkoutApp from '@/components/WorkoutApp.vue'
import ApplicantProcessor from '@/components/ApplicantProcessor.vue'

export default {
  name: 'AboutSection',
  components: {
    FlightTracker,
    AlbumBrowser,
    WorkoutApp,
    ApplicantProcessor
  }

}
</script>

