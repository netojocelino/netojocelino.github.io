<script lang="ts">
export default {
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
    <span className="Menu-Item-Description" v-if="description !== undefined">
        {{ description }}
        <a
            v-if="anchorTo !== undefined && anchorTitle !== undefined"
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
