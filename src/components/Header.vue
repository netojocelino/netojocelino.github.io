<script lang="ts">
export default {
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
      default: '',
      validator(value: string) {
        return (typeof value) === 'string'
      }
    },
  }
}
</script>

<template>
</template>

<style scoped>
.header {
  background-color: #FAFAFA;
  text-align: center;

  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 100%;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  color: #333;
  font-weight: 600;
}

h3 {
  font-size: 1.2rem;
  color: #333;
}

@media (min-width: 1024px) {
}
</style>
