<script setup lang="ts">
const props = defineProps<{
  columns: number | string;
  itemWidth?: string;
  gap?: string;
}>();

const gap = props.gap;
const gridTemplateColumns = `repeat(${props.columns}, ${props.itemWidth || '1fr'})`;
</script>

<template>
  <div class="grid">
    <slot />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  justify-content: center;
  gap: v-bind(gap);
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: v-bind(gridTemplateColumns);
  }
}
</style>
