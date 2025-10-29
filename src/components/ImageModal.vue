<template>
  <div class="modal-backdrop" @click.self="close">
    <div class="modal-content">
      <img :src="src" alt="preview" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['src'],
  emits: ['close'],
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>
