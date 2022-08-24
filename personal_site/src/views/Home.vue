<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <i class="bi bi-house" style="font-size: 1.5rem"></i>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#experience">Experience</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#contact">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#contact">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class='container-fluid mt-5'>
      <landing-section></landing-section>
      <about-section></about-section>
      <projects-section></projects-section>
      <experience-section></experience-section>
      <contact-section></contact-section>
    </div>
    <my-footer></my-footer>
  </div>
</template>



<script>
// @ is an alias to /src
import LandingSection from '@/components/LandingSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'Home',
  components: {
    LandingSection,
    AboutSection,
    ExperienceSection,
    ProjectsSection,
    ContactSection,
    MyFooter
  }
}
</script>
