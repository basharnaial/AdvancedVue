<script setup>
import { useStorage } from "@/composables/useStorage";

let food = useStorage('food', 'tacos');
let age = useStorage('age', 23);

</script>

<template>

<main>
  <p>
  what is your fav food?
    <input type="text" v-model="food" >
  </p>

<p>
  how old are you?
  <input type="text" v-model="age">
</p>

</main>
</template>
