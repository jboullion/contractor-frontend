<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <div>Jobs</div>
        <ul>
          <li>
            <router-link to="/jobs">View Jobs</router-link>
          </li>
          <li>
            <router-link to="/jobs/create">Create Job</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'AppNavigation',
  components: {},
  setup() {
    return {};
  },
};
</script>

<style></style>
