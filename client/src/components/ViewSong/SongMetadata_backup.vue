<template>
  <panel title="Song Metadata">
    <v-layout>
      <!-- title, artist, genre -->
      <v-flex xs6>
        <div class="song-title">
          {{song.title}}
        </div>
        <div class="song-artist">
          {{song.artist}}
        </div>
        <div class="song-genre">
          {{song.genre}}
        </div>

        <!-- edit button -->
        <v-btn
          dark
          class="pink darken-1"
          :to="{
            name: 'song-edit',
            params () {
              return {
                songId: song.id
              }
            }
          }"
        >
          Edit
        </v-btn>

        <!-- bookmark button -->
        <v-btn
          v-if="$store.state.isUserLoggedIn && !bookmark"
          dark
          class="pink darken-1"
          @click="setAsBookmark"
          >
          Bookmark
        </v-btn>

        <!-- unbookmark button -->
        <v-btn
          v-if="$store.state.isUserLoggedIn && bookmark"
          dark
          class="pink darken-1"
          @click="unsetAsBookmark"
          >
          Un-bookmark
        </v-btn>

      </v-flex>
      <!-- album image, album -->
      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl"/>
        <br/>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) {
        return
      }

      try {
        const bookmarks = (await BookmarksService.index({
          songId: this.song.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
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
  font-size: 30px;
}
.song-artist{
  font-size: 24px;
}
.song-genre{
  font-size: 18px;
}
.album-image {
  width: 100%;
  margin: 0 auto;
}
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}

</style>
