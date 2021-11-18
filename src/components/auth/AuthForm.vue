<template>
  <form class="space-y-6" @submit.prevent="$emit('onSubmit', form)">
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">
        Email address
      </label>
      <div class="mt-1 relative">
        <input
          id="email"
          name="email"
          type="email"
          v-model.trim="form.email"
          autocomplete="email"
          class="
            appearance-none
            block
            w-full
            px-3
            py-2
            border border-gray-300
            rounded-md
            shadow-sm
            placeholder-gray-400
            focus:outline-none
            sm:text-sm
          "
          :class="{
            'border-red-300 focus:ring-red-500 focus:border-red-500':
              form.errors.email,
            'focus:ring-indigo-500 focus:border-indigo-500': !form.errors.email,
          }"
        />
        <div
          v-if="form.errors.email"
          class="
            absolute
            inset-y-0
            right-0
            pr-3
            flex
            items-center
            pointer-events-none
          "
        >
          <ExclamationCircleIcon
            class="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>

    <div>
      <label for="password" class="block text-sm font-medium text-gray-700">
        Password
      </label>
      <div class="mt-1 relative">
        <input
          id="password"
          name="password"
          type="password"
          v-model.trim="form.password"
          autocomplete="current-password"
          class="
            appearance-none
            block
            w-full
            px-3
            py-2
            border border-gray-300
            rounded-md
            shadow-sm
            placeholder-gray-400
            focus:outline-none
            sm:text-sm
          "
          :class="{
            'border-red-300 focus:ring-red-500 focus:border-red-500':
              form.errors.password,
            'focus:ring-indigo-500 focus:border-indigo-500':
              !form.errors.password,
          }"
        />
        <div
          v-if="form.errors.password"
          class="
            absolute
            inset-y-0
            right-0
            pr-3
            flex
            items-center
            pointer-events-none
          "
        >
          <ExclamationCircleIcon
            class="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          class="
            h-4
            w-4
            text-indigo-600
            focus:ring-indigo-500
            border-gray-300
            rounded
          "
        />
        <label for="remember-me" class="ml-2 block text-sm text-gray-900">
          Remember me
        </label>
      </div>

      <div class="text-sm">
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
          Forgot your password?
        </a>
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="
          w-full
          flex
          justify-center
          py-2
          px-4
          border border-transparent
          rounded-md
          shadow-sm
          text-sm
          font-medium
          text-white
          bg-indigo-600
          hover:bg-indigo-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
        "
      >
        Sign in
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { ExclamationCircleIcon } from '@heroicons/vue/solid';

const form = reactive({
  email: '',
  password: '',
  errors: {
    email: '',
    password: '',
  },
});
</script>

<style></style>
