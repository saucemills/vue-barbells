<template>
  <c-box
    display="flex"
    flexDirection="column"
    bg="gray.200"
    width="100%"
    borderTop="2px solid white"
    justifyContent="center"
    alignItems="center"
  >
    <c-heading as="h1" size="xl" color="black" my="6">Featured Items</c-heading>
    <c-box
      display="flex"
      max-w="1200px"
      justifyContent="center"
      flexWrap="wrap"
    >
      <FeaturedItem />
      <FeaturedItem />
      <FeaturedItem />
    </c-box>
  </c-box>
</template>

<script>
import { CBox, CHeading } from "@chakra-ui/vue";
import FeaturedItem from "./FeaturedItem";

export default {};
</script>
