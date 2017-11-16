<template>
  <v-layout>
    <v-flex xs3 v-if="isUserLoggedIn">
      <songs-bookmarks />
      <recently-viewed-songs class="mt-2" />
    </v-flex>
    <v-flex xs7 class="ml-2">
      <songs-search-panel />
      <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>
<script>
import {mapState} from 'vuex'
import SongsSearchPanel from './SongsSearchPanel'
import SongsBookmarks from './SongsBookmarks'
import SongsPanel from './SongsPanel'
import SongsService from '@/services/SongsService'
import RecentlyViewedSongs from './RecentlyViewedSongs'

export default {
  components: {
    SongsSearchPanel,
    SongsPanel,
    SongsBookmarks,
    RecentlyViewedSongs
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
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    // do a request to the backend for all the songs
    this.songs = (await SongsService.index()).data
    console.log('songs', this.songs)
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title{
  font-size: 24px;
}
.song-artist{
  font-size: 20px;
}
.song-genre{
  font-size: 16px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
