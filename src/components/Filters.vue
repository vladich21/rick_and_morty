<template>
    <div class="filters">
      <input v-model="name" type="text" placeholder="Name" />
      <select v-model="status">
        <option value="">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <button @click="applyFilters">Apply</button>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  
  const name = ref('');
  const status = ref('');
  
  const emits = defineEmits(['filter']);
  
  const applyFilters = () => {
    emits('filter', { name: name.value, status: status.value });
  };
  </script>
  
  <style scoped>
  .filters {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }
  .filters input, .filters select {
    padding: 8px;
  }
  .filters button {
    padding: 8px 16px;
  }
  </style>
  