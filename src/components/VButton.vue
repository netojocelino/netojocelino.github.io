<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      default: "Click here",
    },
    styled: {
      type: String,
      default: "primary",
      validator(value: string) {
        return ["primary", "outline-transparent"].includes(value);
      },
    },
  },
};
</script>

<template>
  <button
    @click="$emit('anchor')"
    :className="`v-button v-button-${styled}`"
    type="button"
    :value="label"
  >
    {{ label }}
  </button>
</template>

<style scoped>
.v-button {
  min-width: 10rem;
  margin: 1rem;
  padding: 0.5rem 1.5rem;

  border-width: 1px;
  border-color: var(--jt-button-main-border);
  border-radius: 0.2rem;

  background-color: var(--jt-main-white);

  cursor: pointer;
}

.v-button:hover,
.v-button:active {
  box-shadow: 2px 2px 4px var(--jt-button-hover-border);
  background-color: var(--jt-button-hover-background-color);
}

.v-button-outline-transparent {
  background-color: var(--jt-main-white);
}
</style>
