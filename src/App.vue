<template>
  <AppHeader />
  <div class="flex">
    <AppNavigation />
    <div class="flex-1">
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
  <AppFooter />
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import AppHeader from './layout/AppHeader.vue';
import AppNavigation from './layout/AppNavigation.vue';
import AppFooter from './layout/AppFooter.vue';
</script>
