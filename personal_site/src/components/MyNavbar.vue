<template>
  <div>
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
          <b-nav-item href="/Resume_web.pdf" target="_blank">Resume</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>

export default {
  name: 'AboutSection'
}
</script>