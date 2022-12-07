<script lang="ts">
export default {
  computed: {
    hasIcon() {
      const isUndef = this.icon === undefined;
      const isNil = this.icon === null;
      const isString = typeof this.icon === "string";

      if (isUndef || isNil || !isString) {
        return false;
      }

      const isFill = this.icon!.length > 0;

      return !isUndef && !isNil && isFill;
    },
    isAlternative() {
      if (this.hasIcon) {
        return false;
      }

      const hasTitle = this.$props.detailsTitle !== undefined;
      const hasAnchor = this.$props.detailsAnchor !== undefined;
      const hasSubtitle = this.$props.detailsSubtitle !== undefined;
      const hasParagraph = this.$props.detailsParagraph !== undefined;

      return (hasAnchor && hasTitle) || hasSubtitle || hasParagraph;
    },
  },
  props: {
    icon: {
      type: String,
      required: false,
    },
    itemKey: {
      type: String,
      required: false,
    },
    itemValue: {
      type: String,
      required: false,
    },
    detailsTitle: {
      type: String,
      required: false,
    },
    detailsAnchor: {
      type: String,
      required: false,
    },
    detailsSubtitle: {
      type: String,
      required: false,
    },
    detailsParagraph: {
      type: String,
      required: false,
    },
  },
};
</script>

<template>
  <div className="Card-Body">
    <template v-if="!isAlternative">
      <span v-if="hasIcon" className="icon">{{ icon }}</span>

      <div
        v-if="itemKey !== undefined && itemValue !== undefined"
        className="details"
      >
        <span>{{ itemKey }}</span>
        <span>{{ itemValue }}</span>
      </div>
    </template>
    <template v-else>
      <div className="details">
        <a className="details-title" :href="detailsAnchor" target="_blank">
          {{ detailsTitle }}
        </a>
        <span className="details-subtitle">{{ detailsSubtitle }}</span>
        <p>{{ detailsParagraph }}</p>
      </div>
    </template>
  </div>
</template>

<style scoped>
.Card-Body {
  display: flex;
  flex-direction: row;
}

.Card-Body .icon {
  font-size: 2.5rem;
  user-select: none;
}

.Card-Body .details {
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0 0 0.5rem;
}

.Card-Body .details .details-title {
  font-size: 1.2rem;
}
.Card-Body .details .details-subtitle {
  font-size: 1rem;
  color: var(--jt-main-gray);
}

.Card-Body .details p {
  padding-top: 0.5rem;
  padding-left: 0.5rem;
}
</style>
