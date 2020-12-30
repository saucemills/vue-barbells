<template>
  <CThemeProvider>
    <CReset />
    <Header />
    <Nuxt />
  </CThemeProvider>
</template>

<script>
import Header from "../components/Header";
import { CThemeProvider, CReset, CButton } from "@chakra-ui/vue";

export default {
  name: "DefaultLayout",
  components: {
    CThemeProvider,
    CReset,
    CButton
  }
};
</script>
