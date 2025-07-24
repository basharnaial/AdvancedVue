<script setup>
import { useFlash } from '@/composables/useFlash.js'

let { flash } =  useFlash();



</script>
<template>

  <main>
    <p>

      <button @click="flash('Yo! ','its works on the about page!','info')"> click me</button>
    </p>
    <br>
  </main>
</template>
