<script setup>
import { useFlash } from '@/composables/useFlash.js'

let { flash } =  useFlash();



</script>

<template>

<main>
  <p>

    <button @click="flash('Text', 'its works!')"> click me</button>
  </p>
</main>
</template>
