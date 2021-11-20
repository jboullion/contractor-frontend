<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div v-if="loading">Loading...</div>
    <div v-else-if="job">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {{ job.title }}
        </h3>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
          <div
            class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            v-for="jobfield in jobInfo"
          >
            <dt class="text-sm font-medium text-gray-500">
              {{ jobfield.title }}
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{
                // @ts-ignore
                job[jobfield.key]
              }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div v-else>Job not found!</div>
  </div>
</template>

<script setup lang="ts">
import { PaperClipIcon } from '@heroicons/vue/solid';
import { inject, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import JobService from '../../../services/JobService';
import { IJob } from '../../../types/Job';

const $route = useRoute();

const _jobService: JobService = inject('jobService') as JobService;

const loading = ref(true);
const jobId: string = $route.params.id as string;
const job = ref<IJob>();

const jobInfo = [
  {
    key: 'title',
    title: 'Title',
  },
  {
    key: 'description',
    title: 'Description',
  },
  {
    key: 'firstName',
    title: 'Contact First Name',
  },
  {
    key: 'lastName',
    title: 'Contact Last Name',
  },
  {
    key: 'phone',
    title: 'Phone',
  },
  {
    key: 'email',
    title: 'Email',
  },
  {
    key: 'address',
    title: 'Address',
  },
  {
    key: 'city',
    title: 'City',
  },
  {
    key: 'state',
    title: 'State',
  },
  {
    key: 'zip',
    title: 'Zip',
  },
  {
    key: 'country',
    title: 'Country',
  },
];

onMounted(async () => {
  job.value = await _jobService.getJob(jobId);
  loading.value = false;
});
</script>
