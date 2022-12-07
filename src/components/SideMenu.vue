<script lang="ts">
import VMenuItem from "./ExternalMenuItem.vue";

import { isItemMenuType } from "../types/MenuItemType";

export default {
  components: {
    VMenuItem,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    ["items"]: {
      type: [Object],
      required: true,
      validator(values: any[]) {
        return values.reduce(isItemMenuType, true);
      },
    },
  },
};
</script>

<template>
  <div className="Menu-Block">
    <h2 className="Menu-Title">{{ title }}</h2>

    <v-menu-item
      v-for="(item, index) in items"
      :key="index"
      :title="item.title"
      :description="item.description"
      :anchor-to="item.anchorTo"
      :anchor-title="item.anchorTitle"
    />
  </div>
</template>

<style scoped>
.Menu-Block {
  background-color: var(--jt-main-white);

  box-shadow: 4px 4px 8px var(--jt-shadow-rgba-main-black);

  padding: 1rem 1.5rem;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
}
</style>
