<template>
  <section id="hero-section">
    <div class="hero-mobile-name-container">
      <h2 data-aos="fade-up" data-aos-duration="1000" class="hero-name"> Trevor Wheeler </h2>
    </div>
    <div class="hero-content-container">
      <h1 class="summary hero-summary" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"> Web
        <span>Developer</span> - Innovating Solutions & Enhancing User Experiences
      </h1>
      <div class="hero-links-container">
        <div class="hero-link-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
          @click="scrollToProjects">
          <div class="link hero-link hero-link-projects" v-scroll-to="'.projects'">
            <span>Explore Projects</span>
          </div>
        </div>
        <div class="hero-link-container" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          <a class="link hero-link hero-link-contact" href="mailto: sendtrevmail@gmail.com" target="_blank"
            rel="noreferrer">
            <span>Contact</span>
          </a>
        </div>
      </div>
    </div>
    <svg class="chevron-down" width="46" height="26" viewBox="0 0 46 26" fill="none" @click="scrollToProjects"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.3644 25.3029C22.2844 26.2324 23.7667 26.2324 24.6356 25.3029L45.2333 4.49255C46.2556 3.45978 46.2556 1.80735 45.2333 0.774578C44.2111 -0.258193 42.5756 -0.258193 41.5533 0.774578L24.6356 17.8669C23.7156 18.7964 22.2333 18.7964 21.3644 17.8669L4.44667 0.826217C3.42445 -0.206554 1.78889 -0.206554 0.766667 0.826217C-0.255556 1.85899 -0.255556 3.51142 0.766667 4.54419L21.3644 25.3029Z"
        fill="#06D6A0" />
    </svg>
  </section>
</template>

<script setup lang="ts">
function scrollToProjects(): void {
  const projectsElement = document.getElementById('projects');
  if (projectsElement) {
    projectsElement.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>



<style lang="scss">
#hero-section {
  height: calc(100vh - 70px);
  background-color: var(--secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px 0;
  transition: 0.1s;

  @media only screen and (max-height: 450px) {
    padding: 0 4em 0;
  }

  @media only screen and (min-width: 768px) {
    height: 100vh;
  }

  .hero-mobile-name-container {
    width: 100vw;
    position: absolute;
    top: 0;
    right: 0;
    text-align: center;

    @media only screen and (max-height: 450px) {
      text-align: left;
      padding: 0 4em 0;
    }

    @media only screen and (min-width: 768px) {
      display: none;
    }

    .hero-name {
      color: var(--primary);
      font-size: 1.8em;
      text-transform: uppercase;
      font-weight: 500;
      margin: 26px 0;
    }
  }

  .hero-content-container {
    max-width: 854px;
    align-self: center;
    padding: 45px 0 50px;

    @media only screen and (max-height: 450px) {
      display: flex;
      padding: 65px 0 50px;
    }
  }

  .summary {
    font-size: 3.6em;
    animation-delay: 0.1s;
    font-weight: 400;
    align-self: center;
    text-align: center;
    color: var(--primary);
    margin: 0 0 70px 0;
    letter-spacing: 1px;

    @media only screen and (min-width: 768px) {
      font-size: 5.7em;
    }

    @media only screen and (max-height: 450px) {
      padding: 0 1em 0 0;
      text-align: left;
      font-size: 3em;
      margin: 0;
    }

    @media only screen and (max-width: 320px) {
      margin: 30px 0 30px 0;
    }

    span {
      color: var(--accent);
      font-weight: 500;
    }
  }

  .hero-links-container {
    @media only screen and (min-width: 768px) {
      display: flex;
      width: 484px;
      margin: 0 auto;
    }
  }

  .hero-link-projects {
    margin-bottom: 35px;

    @media only screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  .hero-link-contact {
    transition: 1s ease-out;
    background: none;
    color: var(--primary);
    border: 1px solid var(--primary);
    transition: 0.3s ease-in-out;

    &:hover {
      box-shadow: 0px 0px 0px 4px var(--secondary) inset,
        0px 0px 0px 6px var(--accent) inset;
      color: var(--text-light);
    }
  }

  .chevron-down {
    display: none;
    position: absolute;
    bottom: 50px;
    left: calc(50% - 23px);
    cursor: pointer;
    animation: bounce 2s infinite;
    animation-delay: 2s;

    @media only screen and (min-width: 768px) {
      display: block;
    }
  }

  @keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
      transform: (translateY(0));
    }

    40% {
      transform: (translateY(-28px));
    }

    60% {
      transform: (translateY(-14px));
    }
  }
}
</style>
