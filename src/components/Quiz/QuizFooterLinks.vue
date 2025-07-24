<script setup>
import {state} from "@/stores/quizStore";

</script>

<template>
  <div class="space-y-4">
    <h5 class="text-red-600 font-medium">{{state.name}}</h5>

    <button 
      @click="state.name= 'a new state name hhhhhh'"
      class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
    >
      Change Name
    </button>

    <ul class="flex space-x-6">
      <li><a href="#" class="text-blue-600 hover:text-blue-800 underline">Get a Job</a></li>
      <li><a href="#" class="text-blue-600 hover:text-blue-800 underline">Contact Us</a></li>
    </ul>
  </div>
</template>
