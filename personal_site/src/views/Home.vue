<template>
  <div class='container-fluid'>
    <my-navbar></my-navbar>
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
import MyNavbar from '@/components/MyNavbar.vue'
import LandingSection from '@/components/LandingSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'Home',
  components: {
    MyNavbar,
    LandingSection,
    AboutSection,
    ExperienceSection,
    ProjectsSection,
    ContactSection,
    MyFooter
  }
}
</script>
