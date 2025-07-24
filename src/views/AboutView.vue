<script setup>
import { useFlash } from '@/composables/useFlash.js'
import { counter } from '@/stores/counterStore';

let { flash } =  useFlash();



</script>
<template>

  <main>
    <p>

      <button @click="flash('Yo! ','its works on the about page!','info')"> click me</button>
    </p>
    <br>
    the current count is {{ counter.count }}
  </main>
</template>
