<template>
  <div class="relative pt-6 min-h-full flex flex-col">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../marketing/Header.vue';
import Footer from '../marketing/Footer.vue';
</script>

<style></style>
