
<script setup>
import Quiz from "@/components/Quiz/Quiz.vue";
import {state} from "@/stores/quizStore";

</script>


<template>
  <div class="contact">
    <Quiz :quiz="state" ></Quiz>
  </div>
</template>
