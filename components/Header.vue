<template>
  <c-box display="flex" bg="black" w="100%" color="white" my="auto">
    <c-box display="flex" justifyContent="space-between" w="1400px" mx="auto">
      <c-link display="flex" p="3" textDecoration="none" as="nuxt-link" to="/">
        <img src="../assets/logo.PNG" alt="logo" />
        <c-heading textDecoration="none" my="auto" p="2"
          >BARBELLS &amp; BRIEFCASES</c-heading
        >
      </c-link>
      <c-button-group
        my="auto"
        p="2"
        :spacing="4"
        :display="['none', 'none', 'flex', 'flex']"
      >
        <c-button
          as="nuxt-link"
          to="/about"
          variant-color="gray.50"
          variant="outline"
          :_hover="{ borderColor: 'red.400', color: 'red.400' }"
        >
          ABOUT US
        </c-button>
        <c-button
          as="nuxt-link"
          to="/podcasts"
          variant-color="gray.50"
          variant="outline"
          :_hover="{ borderColor: 'red.400', color: 'red.400' }"
        >
          PODCASTS
        </c-button>
        <c-button
          as="nuxt-link"
          to="/shop"
          variant-color="gray.50"
          variant="outline"
          :_hover="{ borderColor: 'red.400', color: 'red.400' }"
        >
          SHOP
        </c-button>
        <c-button
          as="nuxt-link"
          to="/login"
          variant-color="gray.50"
          variant="outline"
          :_hover="{ borderColor: 'red.400', color: 'red.400' }"
        >
          LOGIN
        </c-button>
      </c-button-group>
      <c-button
        my="auto"
        mx="3"
        p="2"
        variant-color="gray.50"
        variant="outline"
        @click="isOpen = true"
        :display="['flex', 'flex', 'none', 'none']"
        :_hover="{ borderColor: 'red.400', color: 'red.400' }"
      >
        <c-icon name="bars" fill="currentColor" color="white" />
      </c-button>

      <c-drawer :on-close="close" :isOpen="isOpen">
        <c-drawer-overlay />
        <c-drawer-content>
          <c-drawer-header borderBottomWidth="1px"
            >Basic Drawer</c-drawer-header
          >
          <c-drawer-body>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </c-drawer-body>
        </c-drawer-content>
      </c-drawer>
    </c-box>
  </c-box>
</template>

<script>
import {
  CBox,
  CHeading,
  CImage,
  CLink,
  CButton,
  CButtonGroup,
  CDrawer,
  CDrawerBody,
  CDrawerFooter,
  CDrawerHeader,
  CDrawerOverlay,
  CDrawerContent,
  CDrawerCloseButton,
  CIcon
} from "@chakra-ui/vue";

export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    close() {
      this.isOpen = false;
    }
  }
};
</script>

<style scoped>
img {
  height: 100px;
  width: 100px;
}

a:hover {
  text-decoration: none;
}
</style>
