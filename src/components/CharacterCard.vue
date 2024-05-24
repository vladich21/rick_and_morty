<template>
    <div class="character-card">
      <img :src="character.image" :alt="character.name" />
      <h2>{{ character.name }}</h2>
      <p>Status: {{ character.status }}</p>
      <p>Species: {{ character.species }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    character: Object
  });
  </script>
  
  <style scoped>
  .character-card {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    text-align: center;
  }
  .character-card img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  </style>
  