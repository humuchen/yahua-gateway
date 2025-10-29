<template>
  <div class="page">
    <header class="hero">
      <VideoSection />
    </header>
    <main class="main">
      <ImageSphere @image-click="openImage" />
    </main>
    <ImageModal
      v-if="modalVisible"
      :src="modalSrc"
      @close="modalVisible = false"
    />
  </div>
</template>

<script setup lang="ts">
import VideoSection from '@/components/VideoSection.vue';
import ImageSphere from '@/components/ImageSphere.vue';
import ImageModal from '@/components/ImageModal.vue';
import { ref } from 'vue';

const modalVisible = ref(false);
const modalSrc = ref('');
function openImage(src: string) {
  modalSrc.value = src;
  modalVisible.value = true;
}
</script>

<style scoped></style>
