<script setup>
import { ref, watch } from "vue";
import { Button } from "@/components/ui/button";
let count = ref(Number(localStorage.getItem("count")) || 0);
function add() {
  count.value++;
}

watch(count, (newValue) => {
  localStorage.setItem("count", newValue);
});
</script>

<template>
  <header class="border-b">
    <div class="container mx-auto flex items-center justify-between px-4 py-4">
      <h1 class="text-xl font-bold">VueShop</h1>
      <Button @click="add" variant="outline">
        Cart ({{ count }})
      </Button>
    </div>
  </header>
</template>
