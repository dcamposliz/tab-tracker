<template>
  <v-toolbar fixed class="pink darken-4" dark>
    <v-toolbar-title class="mr-4">
      <span
        class="home"
        @click="navigateTo({name: 'root'})">
          TabTracker
      </span>
    </v-toolbar-title>

    <!-- TODO: Implement Me -->
    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items> -->

    <v-spacer></v-spacer>
    <!-- login -->
    <v-toolbar-items>
      <v-btn flat dark
        @click="navigateTo({name: 'login'})">
          Login
      </v-btn>
    </v-toolbar-items>
    <!-- register -->
    <v-toolbar-items>
      <v-btn flat dark
        @click="navigateTo({name: 'register'})">
          Sign Up
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
</style>
