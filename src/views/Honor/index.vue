<template>
  <BasicComponentSection title="荣誉资质" class="basic-component-section">
    <Grid columns="3" item-width="31.8rem" gap="2.2rem">
      <div class="content-item" v-for="item in honors" :key="item.title">
        <ScalableImage :src="item.pictureUrl" />
        <div class="name">
          {{ item.title }}
        </div>
      </div>
    </Grid>
  </BasicComponentSection>
</template>

<script setup lang="ts">
import Grid from '@/components/Grid/Grid.vue';
import ScalableImage from '@/components/ScalableImage/ScalableImage.vue';
import BasicComponentSection from '@/components/BasicComponentSection/index.vue';
import { honors } from './resources';
</script>

<style scoped>
.basic-component-section {
  padding-top: 10rem;
}

.content-item {
  border: 1px solid #0b248d;
  border-radius: 4px;
  .name {
    position: absolute;
    bottom: 0;
    /* left: 3.2rem; */
    font-size: 1.6rem;
    font-weight: 400;
    color: #fff;
    width: 100%;
    padding-left: 3.2rem;
    background: rgba(0, 0, 0, 0.3);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}
</style>
