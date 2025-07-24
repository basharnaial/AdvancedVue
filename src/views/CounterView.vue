<script setup>
import {useCounterStore} from '@/stores/CounterStore.js';

// only diffrenet i need to call this function
let counter = useCounterStore();
</script>

<template>

  <div>
  <h1>{{counter.count}}</h1>

    <button @click="counter.increment()"
            :disabled="! counter.remaining"
    >add more
    {{ counter.remaining}}
    </button>

  </div>
</template>
