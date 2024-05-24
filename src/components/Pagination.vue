<template>
    <div class="pagination">
      <button @click="previousPage" :disabled="page === 1">Previous</button>
      <span>Page {{ page }}</span>
      <button @click="nextPage">Next</button>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    page: Number,
  });
  
  const emits = defineEmits(['updatePage']);
  
  const previousPage = () => {
    if (props.page > 1) {
      emits('updatePage', props.page - 1);
    }
  };
  
  const nextPage = () => {
    emits('updatePage', props.page + 1);
  };
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    gap: 8px;
  }
  .pagination button {
    padding: 8px 16px;
  }
  </style>
  