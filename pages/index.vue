<template>
  <div>
    <Bit
      v-for="bit in allBits"
      :key="bit.id"
      v-bind="bit"
    />
  </div>
</template>

<script>
import apollo from "~/lib/apollo";
import Bit from "~/components/Bit.vue";
import gql from "graphql-tag";

export default {
  async asyncData({ error }) {
    try {
      const { data } = await apollo.query({
        query: gql`
          {
            allBits {
              id
              title
              markdown
              type
            }
          }
        `
      });
      return {
        allBits: data.allBits
      };
    } catch (ex) {
      error({ statusCode: 503, message: "Failed loading data." });
    }
  },
  components: {
    Bit
  }
};
</script>
