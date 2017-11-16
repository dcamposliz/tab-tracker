<template>
  <v-toolbar fixed>

    <v-toolbar-title class="mr-4">
      <router-link
      :to="{ name: 'songs', params: {} }"
      class="home"
      tag="span"
      >
      TabTracker
    </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn
        flat
        dark
        :to="{ name: 'songs', params: {} }"
      >
          Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <!-- login -->
    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        :to="{ name: 'login', params: {} }"
      >
          Login
      </v-btn>
    </v-toolbar-items>

    <!-- register -->
    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        :to="{ name: 'register', params: {} }"
        >
          Sign Up
      </v-btn>
    </v-toolbar-items>

    <!-- logout -->
    <v-toolbar-items>
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        dark
        @click="logout"
        >
          Log Out
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
      })
    }
  }
}
</script>

<style scoped>
</style>
