<template>
  <div class="hero__container">
    <c-heading as="h1" size="2xl" color="white" p="4">
      Hustle in Business,
      <br />Grind in Fitness
    </c-heading>
    <c-button
      as="nuxt-link"
      to="/shop"
      color="white"
      mx="4"
      size="lg"
      variant-color="white"
      variant="outline"
      :_hover="{ borderColor: 'red.400', color: 'red.400' }"
    >
      SHOP
    </c-button>
  </div>
</template>

<script>
import { CHeading, CButton } from "@chakra-ui/vue";
import HeroImage from "../assets/hero.JPG";

export default {};
</script>

<style scoped>
.hero__container {
  background-image: url("../assets/hero.JPG");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  padding-top: 20%;
  padding-bottom: 20%;
  opacity: 0.95;
}
</style>
