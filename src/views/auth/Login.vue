<template>
  <div
    class="min-h-full flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
        {{ ' ' }}
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
          start your 14-day free trial
        </a>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <AuthError
          v-if="errorHeading"
          class="mb-4"
          :heading="errorHeading"
          :errors="errors"
        />
        <AuthForm @onSubmit="onSubmit" />

        <AuthSocialLogin />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AuthService from '../../services/AuthService';
import { AxiosError } from 'axios';
import { computed, inject, onMounted, reactive, ref } from 'vue';
import { IAuthCredentials, IAuthForm, ISignInResponse } from '../../types/Auth';
import AuthError from '../../components/auth/AuthError.vue';

import { useRouter } from 'vue-router';
import AuthForm from '../../components/auth/AuthForm.vue';
import AuthSocialLogin from '../../components/auth/AuthSocialLogin.vue';

//import Bugsnag from '@bugsnag/js';

const $router = useRouter();

const _authService: AuthService = inject('authService') as AuthService;

const loading = ref(false);
const formValid = ref(true);
const errorHeading = ref('');
const errors = ref<String[]>([]);

async function onSubmit(form: IAuthForm) {
  if (!form.email) {
    form.errors.email = 'Email is Required';
    formValid.value = false;
  }

  if (!form.password) {
    form.errors.password = 'Password is Required';
    formValid.value = false;
  }

  if (!formValid.value) return;

  try {
    loading.value = true;

    const credentials: IAuthCredentials = {
      email: form.email,
      password: form.password,
    };

    const res: ISignInResponse = await _authService.signin(credentials);

    if (res.accessToken) {
      $router.push({ path: '/dashboard' });
    } else {
      //Bugsnag.notify(new Error('No access token returned'));
    }
  } catch (error: AxiosError | any) {
    errorHeading.value = 'Unable to login';
    if (error.response) {
      if (error.response.data?.statusCode === 400) {
        errors.value = error.response.data.message;
      } else if (error.response.data?.statusCode === 401) {
        errorHeading.value = error.response.data.message;
        errors.value = [];
      }
    } else {
      //Bugsnag.notify(new Error(error));
    }
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  // if (!window.gapi) {
  //   err('"https://apis.google.com/js/api:client.js" needs to be included as a <script>.')
  //   return
  // }
  // if (!this.params.clientId && !this.params.client_id) {
  //   err('Client Id must be specified.')
  //   return
  // }
  // window.gapi.load('auth2', () => {
  //   const auth2 = window.gapi.auth2.init(this.params)
  //   auth2.attachClickHandler(this.$refs.signinBtn, {}, googleUser => {
  //     this.$emit('success', googleUser)
  //   }, error => {
  //     this.$emit('error', error)
  //     this.$emit('failure', error) // an alias
  //   })
  // })
});
</script>
