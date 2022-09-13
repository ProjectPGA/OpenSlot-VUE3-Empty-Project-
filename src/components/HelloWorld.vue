<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button class="button is-danger" type="button" @click="counter.increment">
      count is {{ counter.count }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter';

const counter = useCounterStore();

defineProps<{ msg: string }>();
</script>

<style lang="scss" scoped></style>
