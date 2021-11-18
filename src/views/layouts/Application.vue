<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="fixed inset-0 flex z-40 md:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="
              relative
              flex-1 flex flex-col
              max-w-xs
              w-full
              pt-5
              pb-4
              bg-white
            "
          >
            <TransitionChild
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  class="
                    ml-1
                    flex
                    items-center
                    justify-center
                    h-10
                    w-10
                    rounded-full
                    focus:outline-none
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-white
                  "
                  @click="sidebarOpen = false"
                >
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="flex-shrink-0 flex items-center px-4">
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                alt="Workflow"
              />
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="px-2 space-y-1">
                <router-link
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.to"
                  :class="[
                    item.current
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                  ]"
                >
                  <component
                    :is="item.icon"
                    :class="[
                      item.current
                        ? 'text-gray-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      'mr-4 flex-shrink-0 h-6 w-6',
                    ]"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </router-link>
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <AppNavigation />
    </div>
    <div class="md:pl-64 flex flex-col flex-1">
      <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
        <button
          type="button"
          class="
            px-4
            border-r border-gray-200
            text-gray-500
            focus:outline-none
            focus:ring-2
            focus:ring-inset
            focus:ring-indigo-500
            md:hidden
          "
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex-1 px-4 flex justify-between">
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div
                class="relative w-full text-gray-400 focus-within:text-gray-600"
              >
                <div
                  class="
                    absolute
                    inset-y-0
                    left-0
                    flex
                    items-center
                    pointer-events-none
                  "
                >
                  <SearchIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  class="
                    block
                    w-full
                    h-full
                    pl-8
                    pr-3
                    py-2
                    border-transparent
                    text-gray-900
                    placeholder-gray-500
                    focus:outline-none
                    focus:placeholder-gray-400
                    focus:ring-0
                    focus:border-transparent
                    sm:text-sm
                  "
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
            </form>
          </div>
          <div class="ml-4 flex items-center md:ml-6">
            <button
              type="button"
              class="
                bg-white
                p-1
                rounded-full
                text-gray-400
                hover:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-500
              "
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="ml-3 relative">
              <div>
                <MenuButton
                  class="
                    max-w-xs
                    bg-white
                    flex
                    items-center
                    text-sm
                    rounded-full
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-indigo-500
                  "
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="
                    origin-top-right
                    absolute
                    right-0
                    mt-2
                    w-48
                    rounded-md
                    shadow-lg
                    py-1
                    bg-white
                    ring-1 ring-black ring-opacity-5
                    focus:outline-none
                  "
                >
                  <MenuItem
                    v-for="item in userNavigation"
                    :key="item.name"
                    v-slot="{ active }"
                  >
                    <router-link
                      :to="item.to"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      >{{ item.name }}</router-link
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      @click.prevent="logout"
                    >
                      Sign Out
                    </a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <main class="flex-1">
        <div class="py-6">
          <router-view v-slot="{ Component }">
            <transition name="route" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </main>
    </div>
    <AuthTimeoutModal :open="sessionExpired" />
  </div>
</template>

<script setup lang="ts">
import { ref, inject, onMounted, onBeforeUnmount } from 'vue';
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from '@heroicons/vue/outline';
import { SearchIcon } from '@heroicons/vue/solid';
import AppNavigation from '@/components/common/AppNavigation.vue';
import AuthService from '../../services/AuthService';
import AuthTimeoutModal from '@/components/auth/AuthTimeoutModal.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { IAuthRefreshCredentials } from '../../types/Auth';
import { throttle, parseJwt } from '../../utils';

const $router = useRouter();
const $store = useStore();

const _authService: AuthService = inject('authService') as AuthService;

const navigation = [
  { name: 'Dashboard', to: '/', icon: HomeIcon, current: true },
  { name: 'Team', to: '/', icon: UsersIcon, current: false },
  { name: 'Jobs', to: '/jobs', icon: FolderIcon, current: false },
  { name: 'Calendar', to: '/', icon: CalendarIcon, current: false },
  { name: 'Documents', to: '/', icon: InboxIcon, current: false },
  { name: 'Reports', to: '/', icon: ChartBarIcon, current: false },
];
const userNavigation = [
  { name: 'Your Profile', to: '/profile' },
  { name: 'Settings', to: '/settings' },
];

const sidebarOpen = ref(false);
const sessionExpired = ref(false);
const tHandler = throttle(60 * 1000, reAuth);
const focusListener = (_e: Event) => {
  if (document.visibilityState === 'visible' && !sessionExpired.value) {
    checkAuth();
  }
};

function logout() {
  _authService.signout();
  $router.push({ path: '/' });
}

function checkAuth() {
  const now = new Date();
  const accessExpires = new Date($store.state.accessExpires);

  if (now.getTime() < accessExpires.getTime()) {
    document.removeEventListener('click', tHandler);
    document.removeEventListener('visibilitychange', focusListener);
    sessionExpired.value = true;
  }
}

function reAuth() {
  const accessToken: string = localStorage.getItem('accessToken') as string;
  const refreshToken: string = localStorage.getItem('refreshToken') as string;

  const decodedToken = parseJwt(accessToken);

  const credentials: IAuthRefreshCredentials = {
    email: decodedToken?.email,
    refreshToken: refreshToken,
  };
  _authService.refresh(credentials);
}

onMounted(() => {
  document.addEventListener('click', tHandler);
  document.addEventListener('visibilitychange', focusListener);
  setInterval(checkAuth, 60 * 1000);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', tHandler);
  document.removeEventListener('visibilitychange', focusListener);
});
</script>

<style>
.route-enter-from {
  opacity: 0;
  /*transform: translateY(-30px);*/
}

.route-leave-to {
  opacity: 0;
  /*transform: translateY(30px);*/
}

.route-enter-active {
  transition: all 0.2s ease-out;
}

.route-leave-active {
  transition: all 0.2s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  /* transform: translateY(0); */
}
</style>
