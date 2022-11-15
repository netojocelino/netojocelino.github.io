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
    <header className="Header">
            <div>
                <h1>{{ title }}</h1>
                <h3>{{ subtitle }}</h3>
            </div>

            <slot slot="default"></slot>
        </header>
</template>

<style scoped>
.Header {
    margin: 1.5rem 1.5rem 1rem;
    padding: 2rem 1.5rem;
    border-radius: 0.2rem;

    text-align: center;

    background-color: var(--jt-main-white);
}

.Header h1 {
    font-weight: bolder;
}

</style>
