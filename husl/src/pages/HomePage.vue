<script setup>
import AboutHusl from '../sections/AboutHusl.vue';
import GeographySection from '../sections/GeographySection.vue';
import HeroSection from '../sections/HeroSection.vue';
import HuslStats from '../sections/HuslStats.vue';
import BenefitsSection from '../sections/BenefitsSection.vue';
import CooperationProcess from '../sections/CooperationProcess.vue';
import PartnerCta from '../sections/PartnerCta.vue';
import HuslFooter from '../components/HuslFooter.vue';

</script>

<template>
    <main class="home-page">
        <HeroSection />
        <HuslStats />
        <AboutHusl />
        <GeographySection />
        <CooperationProcess />
        <PartnerCta />
        <HuslFooter />
    </main>
</template>

<style>
/* Phones: the countries block moves straight under the header. */
@media (max-width: 760px) {
  .home-page {
    display: flex;
    flex-direction: column;
  }

  .home-page > #geography {
    order: -1;
  }
}
</style>
