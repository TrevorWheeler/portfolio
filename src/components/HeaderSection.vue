<template>
  <header class="menu--mobile">
    <a href="https://github.com/trevorwheeler" target="_blank" rel="noreferrer">
      <IconGithub />
    </a>
    <a href="mailto: sendtrevmail@gmail.com" target="_blank" rel="noreferrer">
      <IconEmail />
    </a>
    <a href="https://www.linkedin.com/in/trevor-wheeler-95a46659/" target="_blank" rel="noreferrer">
      <IconLinkedIn />
    </a>
  </header>
  <header class="menu--desktop">
    <router-link to="/" data-aos="fade" data-aos-duration="1000" v-slot="{ href, navigate }">
      <h1 class="name" :href="href" @click="navigate">Trevor Wheeler</h1>
    </router-link>
    <div class="links">
      <a href="https://github.com/trevorwheeler" target="_blank" rel="noreferrer" data-aos="fade" data-aos-delay="200"
        data-aos-duration="1000"> Github </a>
      <a href="mailto: sendtrevmail@gmail.com" target="_blank" rel="noreferrer" data-aos="fade" data-aos-delay="300"
        data-aos-duration="1000"> Contact </a>
      <a href="https://www.linkedin.com/in/trevor-wheeler-95a46659/" target="_blank" rel="noreferrer" data-aos="fade"
        data-aos-delay="400" data-aos-duration="1000"> LinkedIn </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import IconEmail from './icons/IconEmail.vue';
import IconGithub from './icons/IconGithub.vue';
import IconLinkedIn from './icons/IconLinkedIn.vue';


</script>
<style scoped lang="scss">
a {
  align-self: center;
}

.menu--mobile {
  z-index: 2;
  position: fixed;
  bottom: 0;
  height: 72px;
  width: 100%;
  background-color: var(--secondary);
  display: flex;
  justify-content: space-between;
  padding: 0 4em;

  @media only screen and (min-width: 768px) {
    display: none;
  }

  a {
    height: 37px;
  }
}

.menu--desktop {
  padding: 0 3vw;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  display: none;
  position: absolute;
  top: 0;
  z-index: 2;

  @media only screen and (min-width: 768px) {
    display: flex;
  }

  @media only screen and (min-width: 1024px) {
    height: 100px;
  }

  .name {
    color: var(--primary);
    font-size: 1.8em;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1rem;
    letter-spacing: 1px;
    margin: 0;
    align-self: center;
    cursor: pointer;

    &:hover {
      color: var(--accent);
      transition: 0.2s ease-in-out;
    }
  }

  .links {
    align-self: center;

    a {
      color: var(--primary);
      font-weight: 400;
      display: inline-block;
      letter-spacing: 1px;
      font-size: 1.8em;
      margin: 0 0.7em;

      &:hover {
        color: var(--accent);
        transition: 0.2s ease-in-out;
      }
    }
  }
}
</style>
