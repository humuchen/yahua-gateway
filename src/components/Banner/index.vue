<template>
  <div class="banner">
    <div class="content-wrapper">
      <div class="title-wrapper">
        <div class="title" v-html="title" />
      </div>
      <div class="subtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string;
  title: string;
  subtitle: string;
  src: string;
}>();

const src = `url('${props.src}')`;
</script>

<style scoped>
.banner {
  height: 100vh;
  background: v-bind(src) no-repeat 50%;
  background-size: cover;
}

.content-wrapper {
  position: absolute;
  left: 50%;
  top: 15.8rem;
  transform: translateX(-50%);
  text-align: center;

  .title-wrapper {
    display: inline-block;
  }

  .title {
    color: #0c58b5;
    font-weight: bolder;
    font-family: HYYakuHei, serif;
    font-size: 4rem;
    line-height: 4rem;
    letter-spacing: 0.6rem;
    margin-bottom: 1.6rem;
  }

  .subtitle {
    color: rgba(0, 0, 0, 1);
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.5rem;
    letter-spacing: 0.6rem;
  }
}
</style>
