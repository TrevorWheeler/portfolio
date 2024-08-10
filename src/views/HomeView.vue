<template>
  <main>
    <HeroSection />
    <ProjectsSection />
    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import HeroSection from '@/components/HeroSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import FooterSection from '@/components/FooterSection.vue';
</script>

<style lang="scss"></style>
