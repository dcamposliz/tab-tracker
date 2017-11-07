<template>
  <v-layout column>
    <v-flex xs8 offset-xs2>
      <panel title="Songs">
        <v-btn
          slot="action"
          @click="navigateTo({name: 'songs-create'})"
          dark
          class="pink darken-1"
          medium
          absolute
          right
          large
          fab>
          <v-icon>add</v-icon>
        </v-btn>
        <div v-for="song in songs"
          :key="song.title">
          <strong>{{song.title}}</strong> -
          {{song.artist}} -
          {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    // do a request to the backend for all the songs
    this.songs = (await SongsService.index()).data
    console.log('songs', this.songs)
  }
}
</script>

<style scoped>
</style>
