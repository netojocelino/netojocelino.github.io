<script lang="ts">
export default {
    computed: {
        hasAnchor() {
            return this.$props.anchorTo !== undefined && this.$props.anchorTitle !== undefined
        },
        hasDescription() {
            return this.$props.description !== undefined
        },
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        anchorTo: {
            type: String,
            required: false,
        },
        anchorTitle: {
            type: String,
            required: false,
        },
    }

}
</script>

<template>
<div className="Menu-Item">
    <span className="Menu-Item-Title">{{ title }}</span>
    <span className="Menu-Item-Description" v-if="hasDescription">
        {{ description }}
        <a
            v-if="hasAnchor"
            :href="anchorTo"
            target="_blank"
        > {{ anchorTitle }} </a>
    </span>
</div>
</template>

<style scoped>
.Menu-Item {
    display: flex;
    flex-direction: column;
}

.Menu-Item .Menu-Title {
    font-weight: normal;
}

.Menu-Item .Menu-Item-Title {
    font-size: 1.1rem;
}

.Menu-Item .Menu-Item-Description {
    color: var(--jt-main-gray);
}
</style>
