<template>
    <div class='container-fluid'>
      <div class='row flex-column-reverse flex-xl-row'>
        <div class='col-xl-5'>
          <div class='jumbotron'>
            <div class='row mb-2 justify-content-end'>
              <div class='col-2'> 
                <a href="https://github.com/awhitin2/album_browser_git" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-github" style="font-size: 2rem"></i>
                </a>
              </div>
              <div class='col-2'> 
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-box-arrow-up-right" style="font-size: 2rem"></i>
                </a>
              </div>
            </div>
            <h5><strong>Description:</strong></h5>
            <p>
              Displays info for Apple Music trending albums, allowing a user to select an album for additional details 
              (scraped from Apple Music) and allows users to favorite/unfavorite albums and songs.     
            </p>
            <div class='row'>
              <div class='col'>
                <h4 class='m-3 text-center'>
                  <b-badge class='bg-success'>Python</b-badge>
                  <b-badge class='bg-primary'>Flask</b-badge>
                  <b-badge class='bg-warning'>REST API</b-badge>
                  <b-badge class='bg-info'>VUE.js</b-badge>
                  <b-badge class='bg-dark'>BeautifulSoup</b-badge>
                  <b-badge class='bg-danger'>Heroku</b-badge>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div class='col-xl-7'>
          <div class="embed-responsive embed-responsive-4by3">
            <video class="embed-responsive-item" controls>
              <source src="@/assets/album_browser.webm" type="video/webm">
              <p>Your browser doesn't support HTML video. Here is
                a instead.</p>
            </video>
          </div>
          
        </div>
      </div>
    </div>
</template>

<script>
    export default {
    name: 'AlbumBrowser',
    }
</script>