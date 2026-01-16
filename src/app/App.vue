<script setup lang="ts">
import Header from '../widgets/header/Header.vue';

</script>

<template>
  <div class="w-full min-h-screen bg-background text-foreground">
    <Header />
    <main class="max-w-7xl mx-auto px-6 py-6">
      <RouterView />
    </main>
  </div>
</template>
