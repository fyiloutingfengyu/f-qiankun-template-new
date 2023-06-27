<script setup lang="ts">
import { ref } from 'vue';
import microApps from './micro-apps-config.ts';

const current = ref('/sub-vue');
const goto = (item) => {
  history.pushState(null, item.activeRule, item.activeRule);
  current.value = item.activeRule;
};

</script>

<template>
  <ul class="app-list">
    <li
      v-for="item in microApps"
      :key="item.name"
      :class="{active:item.activeRule === current}"
      @click="goto(item)"
    >
      {{ item.name }}
    </li>
  </ul>
  <div id="container" class="container"></div>
</template>

<style lang="scss" scoped>
.app-list {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  .active {
    color: skyblue;
  }
}

.container {
  margin-top: 100px;
}
</style>
