<template>
  <!--  -->
  <v-layout column>
    <!--  -->
    <v-flex xs8 offset-xs2>
      <panel title="Login">
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
            @click="login">
            Login
          </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
color: white;
}
</style>
