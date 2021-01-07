<template>
  <c-box
    bg="white"
    maxW="sm"
    border-width="1px"
    rounded="lg"
    overflow="hidden"
    boxShadow="md"
    m="4"
  >
    <img :src="product.media.source" alt="vegas strong tee" />
    <c-box p="6" w="300px">
      <c-box d="flex" align-items="baseline">
        <c-badge rounded="full" px="2" variant-color="red">
          NEW
        </c-badge>
      </c-box>
      <c-box
        mt="1"
        font-weight="semibold"
        as="h4"
        p="2"
        line-height="tight"
        is-truncated
      >
        {{ product.title }}
      </c-box>
      <c-text fontSize="sm" px="2">
        {{ product.description }}
      </c-text>
      <c-button
        as="nuxt-link"
        to="/shop"
        color="black"
        m="2"
        size="sm"
        variant-color="black"
        variant="outline"
        :_hover="{ borderColor: 'red.400', color: 'red.400' }"
      >
        VIEW MORE
      </c-button>
    </c-box>
  </c-box>
</template>

<script>
import { CBox, CImage, CBadge, CText } from "@chakra-ui/vue";

export default {
  name: "FeaturedItem",
  props: {
    product: {
      type: Object,
      default: () => ({
        id: "",
        media: null,
        name: "",
        price: "",
        description: ""
      })
    }
  }
};
</script>

<style scoped>
img {
  width: 300px;
  height: auto;
  object-fit: contain;
}
</style>
