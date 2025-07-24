<script setup>
import QuizHeader from "@/components/Quiz/QuizHeader.vue";
import QuizQuestion from "@/components/Quiz/QuizQuestion.vue";
import QuizFooter from "@/components/Quiz/QuizFooter.vue";
import { provide, ref} from "vue";
import {state} from "@/stores/quizStore";

</script>

<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="max-w-4xl mx-auto px-4">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h1 class="text-3xl font-bold text-blue-600 mb-6">{{ state.name }}</h1>
        <QuizHeader />
        <QuizQuestion />
        <QuizFooter />
      </div>
    </div>
  </div>
</template>
