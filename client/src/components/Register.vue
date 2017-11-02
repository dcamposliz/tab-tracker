<template>
  <!--  -->
  <v-layout column>
    <!--  -->
    <v-flex xs8 offset-xs2>
      <!--  -->
      <div class="white elevation-2">
        <!--  -->
        <v-toolbar flat dense class="pink darken-4" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <!--  -->
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="email"
            v-model="email"
            hint="Must be a valid email"
          ></v-text-field>
          <br/>
          <v-text-field
            name="password"
            label="password"
            hint="At least 8 characters"
            min="8"
            type="password"
            v-model="password"
          ></v-text-field>
          <br/>
          <div class="error" v-html="error" />
          <v-btn
            class="pink darken-4"
            dark
            @click="register">
            Register
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
