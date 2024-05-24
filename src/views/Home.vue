<template>
    <div>
      <Filters @filter="applyFilters" />
      <div class="character-list">
        <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
      </div>
      <Pagination :page="page" @updatePage="updatePage" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import axios from 'axios';
  import CharacterCard from '../components/CharacterCard.vue';
  import Pagination from '../components/Pagination.vue';
  import Filters from '../components/Filters.vue';
  
  const characters = ref([]);
  const page = ref(1);
  const name = ref('');
  const status = ref('');
  
  const fetchCharacters = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character', {
      params: {
        page: page.value,
        name: name.value,
        status: status.value,
      }
    });
    characters.value = response.data.results;
  };
  
  const applyFilters = (filters) => {
    name.value = filters.name;
    status.value = filters.status;
    page.value = 1;
    fetchCharacters();
  };
  
  const updatePage = (newPage) => {
    page.value = newPage;
    fetchCharacters();
  };
  
  onMounted(fetchCharacters);
  
  watch([page, name, status], fetchCharacters);
  </script>
  
  <style scoped>
  .character-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  </style>
  