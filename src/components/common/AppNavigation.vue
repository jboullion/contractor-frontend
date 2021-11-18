<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    class="
      flex flex-col flex-grow
      border-r border-gray-200
      pt-5
      pb-4
      bg-white
      overflow-y-auto
    "
  >
    <div class="flex items-center flex-shrink-0 px-4">
      <img
        class="h-8 w-auto"
        src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
        alt="Workflow"
      />
    </div>
    <div class="mt-5 flex-grow flex flex-col">
      <nav class="flex-1 px-2 space-y-1 bg-white" aria-label="Sidebar">
        <MenuWalker :navigation="navigation" />
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { NavigationItem } from '../../types/UI';
import MenuWalker from './MenuWalker.vue';

const props = defineProps({
  navigation: {
    type: Array as PropType<NavigationItem[]>,
    required: true,
  },
});
</script>
