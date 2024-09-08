<template>
  <section id="footer-section">
    <div class="container">
      <h5 id="thanks"> <span>Thanks</span> for taking the time to check out my portfolio. </h5>
      <a id="repository-link" class="link" href="https://github.com/TrevorWheeler/portfolio" target="_blank"
        rel="noreferrer">
        <span>Source Code</span>
      </a>
      <p id="scroll-top" @click="scrollToTop">Back to top</p>
    </div>
  </section>
</template>

<script setup lang="ts">
function scrollToTop(): void {
  const projectsElement = document.getElementById('hero-section');
  if (projectsElement) {
    projectsElement.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style lang="scss">
#footer-section {
  height: 100%;
  padding: 7em 15px 13em;

  @media only screen and (min-width: 768px) {
    padding: 7em 4em 4rem;
  }

  @media only screen and (max-height: 450px) {
    padding: 7em 15px 12em;
  }

  @media only screen and (min-width: 1366px) {
    padding: 10em 4em;
  }

  @media only screen and (min-width: 1650px) {
    padding: 15em 4em;
  }

  #thanks {
    margin: 0 0 40px 0;
    text-align: center;
    align-self: center;
    color: var(--primary);
    font-size: 3.6em;
    font-weight: 400;

    @media only screen and (min-width: 768px) {
      font-size: 3.6em;
      margin: 0 0 70px 0;
    }

    @media only screen and (min-width: 1366px) {
      margin: 0 auto 40px;
    }

    @media only screen and (min-width: 1920px) {
      font-size: 5em;
    }
  }


  #repository-link {
    margin: 0 auto 0rem;

    @media only screen and (min-width: 768px) {
      margin: 0 auto 7em;
    }
  }

  #scroll-top {
    cursor: pointer;
    display: none;
    margin: 0 auto;
    color: var(--primary);
    text-align: center;
    font-size: 1.8em;
    font-weight: 600;
    transition: 0.2s linear;

    @media only screen and (min-width: 768px) {
      display: block;
    }

    &:hover {
      color: var(--accent);
      transition: 0.2s linear;
    }
  }
}
</style>
