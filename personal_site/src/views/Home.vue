<template>
  <div class='container-fluid'>
    <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top">
      <b-navbar-brand href="#landing">
        <i class="bi bi-house" style="font-size: 1.5rem"></i>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/#about">About</b-nav-item>
          <b-nav-item href="/#projects">Projects</b-nav-item>
          <b-nav-item href="#">Resume</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class='container-fluid mt-5'>
      <landing-section></landing-section>
      <about-section></about-section>
      <projects-section></projects-section>
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
