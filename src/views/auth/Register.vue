<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Create your account today!
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
        <AuthForm @onSubmit="onSubmit" />

        <AuthSocialLogin />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AuthService from '../../services/AuthService';
import { AxiosError } from 'axios';
import { inject, ref } from 'vue';
import { IAuthCredentials, IAuthForm, IUser } from '../../types/Auth';
import AuthForm from '../../components/auth/AuthForm.vue';
import AuthSocialLogin from '../../components/auth/AuthSocialLogin.vue';
//import Bugsnag from '@bugsnag/js';

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

    const res: IUser = await _authService.signup(credentials);

    if (res.id) {
      // TODO: user created, router redirect to login page?
      // TODO: auth
    }
  } catch (error: AxiosError | any) {
    errorHeading.value = 'Unable to login';
    if (error.response) {
      if (error.response.data?.message?.length) {
        errors.value = error.response.data.message;
      }
    } else {
      //Bugsnag.notify(new Error(error));
    }
  } finally {
    loading.value = false;
  }
}
</script>
