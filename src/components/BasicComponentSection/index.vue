<template>
  <section class="basic-component-section">
    <div class="flow">
      <div class="flex-center block-center">
        <div class="scale-card-list-wrapper column-wrapper">
          <div class="section-title">
            <span class="simple-text section-text-title">{{ title }}</span>
          </div>
          <span class="simple-text desc">
            {{ desc }}
          </span>

          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  desc: string;
}>();
</script>

<style scoped>
.basic-component-section {
  position: relative;
  margin: 0 auto;
  box-sizing: content-box;
  padding-top: 32px;

  .flow {
    width: 100%;
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    z-index: 1;
  }
  .flex-center.block-center {
    -ms-flex-pack: center;
    height: 100%;
    justify-content: center;
  }
  .flex-center .scale-card-list-wrapper {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: 24px;
    overflow: hidden;
    position: relative;

    &:last-child {
      padding-bottom: 30px;
    }

    span:nth-child(2) {
      margin-bottom: 36px;
    }
  }
  .section-title {
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
  }

  .simple-text {
    text-align: center;
    font-size: 4.8rem;
    font-weight: bolder;
    font-style: initial;
    text-decoration: initial;
    display: inline-block;
    word-break: break-word;
    color: rgba(0, 0, 0, 1);
  }

  .desc {
    font-size: 1.8rem;
  }
}
</style>
