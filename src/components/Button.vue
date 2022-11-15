<script lang="ts">
export default {
    props: {
        label: {
            type: String,
            default: 'Click here',
        },
        styled: {
            type: String,
            default: 'primary',
            validator (value: string) {
                return [
                    'primary', 'outline-transparent'
                ].includes(value)
            }
        }
    },
}
</script>

<template>
    <button
        @click="$emit('anchor')"
        :className="`v-button v-button-${styled}`"
        type="button"
        :value="label"
    >{{ label }}</button>
</template>


<style scoped>
.v-button {
    padding: 0.5rem 3rem;
    border-width: 0;
    background-color: transparent;
    margin: 0.5rem 2rem;
    cursor: pointer;
}

.v-button-outline-transparent {
    border: 1px solid black;
    border-radius: 1rem;
}

</style>
