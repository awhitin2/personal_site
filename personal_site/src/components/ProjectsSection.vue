<template>
  <div class="container" id='projects'>
    <h1>Projects</h1>
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
            <b-card-text>Tab contents 1</b-card-text>
          </b-tab>
          <b-tab title="Applicant Processor">
            <b-card-text>Tab contents 2</b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
  </div>
</template>

<script>
import FlightTracker from '@/components/FlightTracker.vue'
import AlbumBrowser from '@/components/AlbumBrowser.vue'

export default {
  name: 'AboutSection',
  components: {
    FlightTracker,
    AlbumBrowser
  }

}
</script>

