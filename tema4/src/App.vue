<script setup>
import { useVerseStore } from './stores/verseStore';
import { storeToRefs } from 'pinia';

const verseStore = useVerseStore();
const { currentVerse, verses } = storeToRefs(verseStore);

const testFunction = async () => {
  console.log('Buton apăsat!');
  await verseStore.fetchVerse();
};
</script>

<template>
  <div
    class="flex flex-col items-center space-y-4 p-6 bg-gray-100 min-h-screen"
  >
    <h1 class="text-3xl font-bold text-gray-800">Versete Biblice</h1>

    <button
      @click="testFunction"
      class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all"
    >
      Obține un verset
    </button>

    <p
      v-if="currentVerse"
      class="text-xl font-semibold text-center p-4 bg-white shadow-md rounded-lg"
    >
      {{ currentVerse }}
    </p>

    <h2 class="text-2xl font-semibold text-gray-700 mt-4">
      Ultimele 5 versete
    </h2>
    <ul class="bg-white shadow-md p-4 rounded-lg w-96 text-center">
      <li
        v-for="(verse, index) in verses"
        :key="index"
        class="border-b last:border-0 py-2 text-gray-600"
      >
        {{ verse }}
      </li>
    </ul>
  </div>
</template>
