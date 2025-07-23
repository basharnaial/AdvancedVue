<template>

  <!-- ✅ سيناريو آخر لتجربة التواصل بين المكون الأب والابن -->
  <!-- 👨‍👦 الأب يحتوي على أزرار لاختيار اللون -->
  <!-- 🎨 الابن يعرض لون الخلفية حسب القيمة القادمة من الأب، ويرسل حدث عند النقر -->

  <!-- الأب يختار اللون ويرسله للابن عبر props -->
  <!-- :color="selectedColor" -->
  <div>
    <h2>Choose a color:</h2>
    <button @click="selectedColor = 'red'">Red</button>
     <button @click="selectedColor = 'blue'">Blue</button>

    <!-- استدعاء المكون الابن -->
    <!-- نستمع لحدث emit المرسل من الابن -->
    <!-- عند وصول الحدث boxClicked، ننفذ دالة handleBoxClick -->
    <ChildComponent
      :color="selectedColor"
      @boxClicked="handleBoxClick"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from '@/components/ChildComponent.vue'

const selectedColor = ref('red')

function handleBoxClick(color) {
  alert(`You clicked the ${color} box!`)
}
</script>
