<template>
  <Bit v-bind="bit"/>
</template>

<script>
import apollo from "~/lib/apollo";
import Bit from "~/components/Bit.vue";
import gql from "graphql-tag";

export default {
  async asyncData({ params, error }) {
    try {
      const { data } = await apollo.query({
        query: gql`
          {
            bit(id:"${params.id}") {
              id
              title
              markdown
              type
            }
          }
        `
      });
      return {
        bit: data.bit
      };
    } catch (ex) {
      error({ statusCode: 404, message: "Bit not found." });
    }
  },
  components: {
    Bit
  }
};
</script>
