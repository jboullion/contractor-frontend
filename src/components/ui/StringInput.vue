<template>
  <div
    class="
      sm:grid
      sm:grid-cols-3
      sm:gap-4
      sm:items-start
      sm:border-t
      sm:border-gray-200
      sm:pt-5
    "
  >
    <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
      {{ label }}
    </label>
    <div class="mt-1 sm:mt-0 sm:col-span-2">
      <input
        :type="type"
        :name="name"
        :id="name"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLFormElement).value)"
        v-bind="$attrs"
        class="
          max-w-lg
          block
          w-full
          shadow-sm
          focus:ring-indigo-500 focus:border-indigo-500
          sm:max-w-xs sm:text-sm
          border-gray-300
          rounded-md
        "
      />
      <span>{{ error }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    // type is included as a prop to require we pass it in
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
  },
  error: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss"></style>
