<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import {  ref } from 'vue'


let message = ref('hello bashar');

setTimeout(() =>{
  message.value = 'i have been changed';
}, 2000);


let doSomething = () =>{ 
  alert('doSomething');
}
</script>

<template>

  <main>
    <TheWelcome />
  </main>
  <input type="text" v-model="message">
  <button @click="doSomething">doSomething</button>
  {{ message }}

</template>
