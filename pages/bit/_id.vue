<template>
  <Bit v-bind="bit"/>
</template>

<script>
import apollo from "~/lib/apollo";
import Bit from "~/components/Bit.vue";
import gql from "graphql-tag";

export default {
  async asyncData({ params }) {
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
  },
  components: {
    Bit
  }
};
</script>
