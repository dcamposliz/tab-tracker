<template>
  <!--  -->
  <v-layout column>
    <!--  -->
    <v-flex xs8 offset-xs2>
      <panel title="Register">
        <form
          name="tab-tracker-form"
          autocomplete="off">
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
            autocomplete="new-password"
          ></v-text-field>
          <br/>
          <div class="error" v-html="error" />
          <v-btn
            class="teal accent-4"
            dark
            @click="register">
            Register
          </v-btn>
        </form>
      </panel>
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
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
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
}
</style>
