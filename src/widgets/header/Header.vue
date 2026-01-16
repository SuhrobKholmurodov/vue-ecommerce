<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";
import { ShoppingBag, ShoppingCart } from "lucide-vue-next";
import { ref, watch } from "vue";

const router = useRouter();
const count = ref<number>(Number(localStorage.getItem("count")) || 0);

watch(count, (v) => {
  localStorage.setItem("count", String(v));
});

function addToCart() {
  count.value++;
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <div class="flex items-center gap-2 cursor-pointer" @click="router.push('/')">
        <ShoppingBag class="w-8 h-8 text-blue-600" />
        <span class="text-2xl font-extrabold text-blue-600">VueShop</span>
      </div>
      <nav class="flex items-center gap-8">
        <RouterLink to="/" v-slot="{ isExactActive }">
          <span class="text-sm font-medium transition pb-1" :class="isExactActive
            ? 'text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-700 hover:text-blue-600'">
            Home
          </span>
        </RouterLink>
        <RouterLink to="/about" v-slot="{ isActive }">
          <span class="text-sm font-medium transition pb-1" :class="isActive
            ? 'text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-700 hover:text-blue-600'">
            About
          </span>
        </RouterLink>
        <RouterLink to="/contacts" v-slot="{ isActive }">
          <span class="text-sm font-medium transition pb-1" :class="isActive
            ? 'text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-700 hover:text-blue-600'">
            Contacts
          </span>
        </RouterLink>
        <RouterLink to="/cart" v-slot="{ isActive }">
          <div class="flex items-center gap-2 transition text-sm font-medium pb-1"
            @click="addToCart" :class="isActive
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-700 hover:text-blue-600'">
            <ShoppingCart class="w-5 h-5" />
            Cart {{ count === 0 ? "" : count }}
          </div>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
