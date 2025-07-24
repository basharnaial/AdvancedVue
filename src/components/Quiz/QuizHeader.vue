<script setup>
import { state } from '@/stores/quizStore';
</script>

<template>
  <header class="text-center mb-8">
    <h1 class="text-2xl font-semibold text-gray-800 mb-2">{{state.name}}</h1>
    <p class="text-gray-600">Welcome to your first quiz. How do you think you'll do?</p>
  </header>
</template>
