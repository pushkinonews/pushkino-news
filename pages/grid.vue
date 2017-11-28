<template>
  <div class="container grid-md">
    <div class="columns">
      <div class="column col-6 col-md-12" v-for="i in items">
        <div class="card">
          <modal :name="' '">
            <div slot="button" class="card-image">
              <img class="img-fit-cover rounded video-item"
                   :src="i.data.items[0].snippet.thumbnails.high.url">
              <div class="play"></div>
            </div>
            <iframe slot="body"
                    :src="'https://www.youtube.com/embed/' + i.data.items[0].snippet.resourceId.videoId"
                    frameborder="0" allowfullscreen></iframe>
            <a slot="footer" class="btn btn-primary"
               :href="'https://youtube.com/watch?v=' + i.data.items[0].snippet.resourceId.videoId"
               target="_blank">Смотреть на YouTube</a>
          </modal>
          <div class="card-header">
            <a :href="'https://youtube.com/watch?v=' + i.data.items[0].snippet.resourceId.videoId"
               class="card-title" target="_blank">{{i.data.items[0].snippet.title}}</a>
            <!--div class="card-subtitle text-gray">{{i.data.items[0].snippet.description}}</div-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'
  import modal from '../components/modal.vue'

  export default {
    data: () => ({
      items: [],
      apiKey: 'AIzaSyD-LhABoFuuKzpP0veIBRy1peemzZYPbEI',
      playlist: [
        'PLNSc5udP4rcrwkbCRe3Bz3E3DoY-j0UKY', // Репортажи
        'PLNSc5udP4rcq2hK4HJAcNKe75EDUFhnO8', // Выпуск новостей
        'PLNSc5udP4rcqrRsnRTNn62UwcAxXm563P', // Помни меня
        'PLNSc5udP4rcpg_6-PzEEag2NvdTBFXi3G', // Вопрос дня
        'PLNSc5udP4rcp7H8jOaPIwEyVhkof3HKdA', // Афиша
        'PLNSc5udP4rcowVNjjTB1b3KoaYIGckSHG' // Актуальное интервью
      ]
    }),
    created () {
      for (let i = 0; i < this.playlist.length; i++) {
        axios.get('https://content.googleapis.com/youtube/v3/playlistItems?maxResults=1&part=snippet&key=' + this.apiKey + '&playlistId=' + this.playlist[i]).then(data => this.items.push(data))
      }
    },
    components: {
      'modal': modal
    }
  }
</script>
