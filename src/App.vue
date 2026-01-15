<script setup>
import Header from "./components/layout/Header.vue";
</script>
<template>
  <div class="min-h-screen bg-background text-foreground">
    <Header />
    <main class="container mx-auto px-4 py-6">
      <RouterView />
    </main>
  </div>
</template>
