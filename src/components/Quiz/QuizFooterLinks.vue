<script setup>
import {state} from "@/stores/quizStore";

</script>

<template>
  <div>
<h5 style="color:red;">{{state.name}}</h5>

    <button @click="state.name= 'a new state name hhhhhh'" >change rn</button>

 <ul>
      <li><a href="#">Get a Job</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </div>
</template>
