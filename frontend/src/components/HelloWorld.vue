<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1 class="text-stone-400">{{ msg }}</h1>
  <p class="text-stone-500">Click on the Vite and Vue logos to learn more</p>
</template>

