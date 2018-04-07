<template>
  <article>
    <header>
      <h2><nuxt-link :to="`/bit/${id}`">{{ title }}</nuxt-link></h2>
      <h3> {{ type }} </h3>
    </header>
    {{ markdown }}
  </article>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "markdown"
    },
    markdown: {
      type: String,
      default: ""
    }
  }
};
</script>
