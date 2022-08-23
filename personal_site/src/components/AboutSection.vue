<template>
  <div class="container" id='about'>
    <div class='row'>
      <div class='col-7'>
        <h1>About me</h1>
        <hr class="my-4 bg-warning" style="height:3px;border:none">
        <p>
          Experienced fintech professional with strong technical skills and a background in structured finance, business strategy, and international development. 
          I have a passion for leveraging technology and creative financing solutions to channel development capital into corners of the globe where financing is most challenging.
          My ideal job is a tech position at a boutique, international development-focused firm where I can combine and leverage my diverse experience with international finance/structured finance, international development, and software design.
        </p>
      </div>
      <div class='col'>
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
export default {
  name: 'AboutSection',
}
</script>