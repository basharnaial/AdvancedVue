<template>
  <!-- 🎨 نجعل الخلفية ديناميكية باستخدام :style بناءً على اللون المُرسل من الأب -->
  <!-- 🖱️ عند الضغط، نُرسل الحدث 'boxClicked' للأب باستخدام emit ونمرر له اللون -->
  <div
    :style="{ backgroundColor: color, color: 'yellow', padding: '20px', cursor: 'pointer' }"
    @click="emit('boxClicked', color)"
  >
    I am a {{ color }} box. Click me!
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// 🎁 تعريف الـ props التي سيستقبلها الابن من الأب
const props = defineProps({
  color: String
})

// 📤 تعريف الـ emit التي سيستخدمها الابن لإرسال حدث إلى الأب
const emit = defineEmits(['boxClicked'])
</script>
