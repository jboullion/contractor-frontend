<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
    <div class="bg-white sm:rounded-lg">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <form
          class="space-y-8 divide-y divide-gray-200"
          @submit.prevent="onSubmit"
        >
          <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div class="space-y-6 sm:space-y-5">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Job Information
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Basic Job Information
                </p>
              </div>
              <div class="space-y-6 sm:space-y-5">
                <StringInput
                  :name="'job-name'"
                  :label="'Job Name'"
                  v-model="form.jobName"
                  :type="'text'"
                  :error="form.errors.jobName"
                  maxlength="100"
                />

                <StringInput
                  :name="'first-name'"
                  :label="'First Name'"
                  v-model="form.firstName"
                  :type="'text'"
                  :error="form.errors.firstName"
                  autocomplete="given-name"
                  maxlength="50"
                />

                <StringInput
                  :name="'last-name'"
                  :label="'Last Name'"
                  v-model="form.lastName"
                  :type="'text'"
                  :error="form.errors.lastName"
                  autocomplete="family-name"
                  maxlength="50"
                />

                <StringInput
                  :name="'email'"
                  :label="'First Name'"
                  v-model="form.email"
                  :type="'email'"
                  :error="form.errors.email"
                  autocomplete="email"
                  maxlength="100"
                />

                <StringInput
                  :name="'street-address'"
                  :label="'Address'"
                  v-model="form.address"
                  :type="'text'"
                  :error="form.errors.address"
                  autocomplete="street-address"
                  maxlength="200"
                />

                <StringInput
                  :name="'city'"
                  :label="'City'"
                  v-model="form.city"
                  :type="'text'"
                  :error="form.errors.city"
                  autocomplete="address-level2"
                  maxlength="100"
                />

                <!-- 
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
                  <label
                    for="region"
                    class="
                      block
                      text-sm
                      font-medium
                      text-gray-700
                      sm:mt-px sm:pt-2
                    "
                  >
                    State / Province
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autocomplete="address-level1"
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
                  </div>
                </div>

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
                  <label
                    for="postal-code"
                    class="
                      block
                      text-sm
                      font-medium
                      text-gray-700
                      sm:mt-px sm:pt-2
                    "
                  >
                    ZIP / Postal code
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autocomplete="postal-code"
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
                  </div>
                </div> -->
              </div>
            </div>

            <div
              class="
                divide-y divide-gray-200
                pt-8
                space-y-6
                sm:pt-10 sm:space-y-5
              "
            >
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Notifications
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  We'll always let you know about important changes, but you
                  pick what else you want to hear about.
                </p>
              </div>
              <div class="space-y-6 sm:space-y-5 divide-y divide-gray-200">
                <div class="pt-6 sm:pt-5">
                  <div role="group" aria-labelledby="label-email">
                    <div
                      class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline"
                    >
                      <div>
                        <div
                          class="
                            text-base
                            font-medium
                            text-gray-900
                            sm:text-sm sm:text-gray-700
                          "
                          id="label-email"
                        >
                          By Email
                        </div>
                      </div>
                      <div class="mt-4 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg space-y-4">
                          <div class="relative flex items-start">
                            <div class="flex items-center h-5">
                              <input
                                id="comments"
                                name="comments"
                                type="checkbox"
                                class="
                                  focus:ring-indigo-500
                                  h-4
                                  w-4
                                  text-indigo-600
                                  border-gray-300
                                  rounded
                                "
                              />
                            </div>
                            <div class="ml-3 text-sm">
                              <label
                                for="comments"
                                class="font-medium text-gray-700"
                                >Comments</label
                              >
                              <p class="text-gray-500">
                                Get notified when someones posts a comment on a
                                posting.
                              </p>
                            </div>
                          </div>
                          <div>
                            <div class="relative flex items-start">
                              <div class="flex items-center h-5">
                                <input
                                  id="candidates"
                                  name="candidates"
                                  type="checkbox"
                                  class="
                                    focus:ring-indigo-500
                                    h-4
                                    w-4
                                    text-indigo-600
                                    border-gray-300
                                    rounded
                                  "
                                />
                              </div>
                              <div class="ml-3 text-sm">
                                <label
                                  for="candidates"
                                  class="font-medium text-gray-700"
                                  >Candidates</label
                                >
                                <p class="text-gray-500">
                                  Get notified when a candidate applies for a
                                  job.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div class="relative flex items-start">
                              <div class="flex items-center h-5">
                                <input
                                  id="offers"
                                  name="offers"
                                  type="checkbox"
                                  class="
                                    focus:ring-indigo-500
                                    h-4
                                    w-4
                                    text-indigo-600
                                    border-gray-300
                                    rounded
                                  "
                                />
                              </div>
                              <div class="ml-3 text-sm">
                                <label
                                  for="offers"
                                  class="font-medium text-gray-700"
                                  >Offers</label
                                >
                                <p class="text-gray-500">
                                  Get notified when a candidate accepts or
                                  rejects an offer.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pt-6 sm:pt-5">
                  <div role="group" aria-labelledby="label-notifications">
                    <div
                      class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline"
                    >
                      <div>
                        <div
                          class="
                            text-base
                            font-medium
                            text-gray-900
                            sm:text-sm sm:text-gray-700
                          "
                          id="label-notifications"
                        >
                          Push Notifications
                        </div>
                      </div>
                      <div class="sm:col-span-2">
                        <div class="max-w-lg">
                          <p class="text-sm text-gray-500">
                            These are delivered via SMS to your mobile phone.
                          </p>
                          <div class="mt-4 space-y-4">
                            <div class="flex items-center">
                              <input
                                id="push-everything"
                                name="push-notifications"
                                type="radio"
                                class="
                                  focus:ring-indigo-500
                                  h-4
                                  w-4
                                  text-indigo-600
                                  border-gray-300
                                "
                              />
                              <label
                                for="push-everything"
                                class="
                                  ml-3
                                  block
                                  text-sm
                                  font-medium
                                  text-gray-700
                                "
                              >
                                Everything
                              </label>
                            </div>
                            <div class="flex items-center">
                              <input
                                id="push-email"
                                name="push-notifications"
                                type="radio"
                                class="
                                  focus:ring-indigo-500
                                  h-4
                                  w-4
                                  text-indigo-600
                                  border-gray-300
                                "
                              />
                              <label
                                for="push-email"
                                class="
                                  ml-3
                                  block
                                  text-sm
                                  font-medium
                                  text-gray-700
                                "
                              >
                                Same as email
                              </label>
                            </div>
                            <div class="flex items-center">
                              <input
                                id="push-nothing"
                                name="push-notifications"
                                type="radio"
                                class="
                                  focus:ring-indigo-500
                                  h-4
                                  w-4
                                  text-indigo-600
                                  border-gray-300
                                "
                              />
                              <label
                                for="push-nothing"
                                class="
                                  ml-3
                                  block
                                  text-sm
                                  font-medium
                                  text-gray-700
                                "
                              >
                                No push notifications
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-5">
            <div class="flex justify-end">
              <button
                type="button"
                class="
                  bg-white
                  py-2
                  px-4
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  text-sm
                  font-medium
                  text-gray-700
                  hover:bg-gray-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                Cancel
              </button>
              <button
                type="submit"
                class="
                  ml-3
                  inline-flex
                  justify-center
                  py-2
                  px-4
                  border border-transparent
                  shadow-sm
                  text-sm
                  font-medium
                  rounded-md
                  text-white
                  bg-indigo-600
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StringInput from '@/components/ui/StringInput.vue';
import { reactive } from 'vue';

const form = reactive({
  jobName: '',
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  city: '',
  errors: {
    jobName: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
  },
});

function onSubmit() {
  if (!form.jobName) {
    form.errors.jobName = 'Job Name is Required';
  }

  // if (!form.firstName) {
  //   form.errors.firstName = 'First Name is Required';
  // }
  // if (!form.lastName) {
  //   form.errors.lastName = 'Last Name is required';
  // }
  // if (!form.email) {
  //   form.errors.email = 'Email is required';
  // }
  // if (!form.address) {
  //   form.errors.address = 'Address is required';
  // }
  // if (!form.city) {
  //   form.errors.city = 'City is required';
  // }
}
</script>

<style lang="scss"></style>
