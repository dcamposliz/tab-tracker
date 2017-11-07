<template>
  <v-toolbar fixed class="pink darken-4" dark>

    <v-toolbar-title class="mr-4">
      <span
        class="home"
        @click="navigateTo({name: 'root'})">
          TabTracker
      </span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn
        flat
        dark
        @click="navigateTo({name: 'songs'})">
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
        @click="navigateTo({name: 'login'})">
          Login
      </v-btn>
    </v-toolbar-items>

    <!-- register -->
    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        @click="navigateTo({name: 'register'})">
          Sign Up
      </v-btn>
    </v-toolbar-items>

    <!-- logout -->
    <v-toolbar-items>
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        dark
        @click="logout">
          Log Out
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
</style>
