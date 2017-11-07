<template>
  <v-layout column>
    <v-flex xs8 offset-xs2>
      <panel title="Songs">
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
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: [
        {
          title: 'I Need U',
          artist: 'Sci-Fi Scheme',
          album: 'dynmk'
        },
        {
          title: 'If I Told You',
          artist: 'Show Clothes',
          album: 'dynmk'
        },
        {
          title: 'If',
          artist: 'XONA',
          album: 'dynmk'
        },
        {
          title: 'U & I',
          artist: 'The Theorist',
          album: 'dynmk'
        },
        {
          title: 'Love (BAILE Remix)',
          artist: 'Daughter',
          album: 'dynmk'
        },
        {
          title: 'Ekali',
          artist: 'Unfaith',
          album: 'dynmk'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
