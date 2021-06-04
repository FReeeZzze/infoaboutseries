<template>
  <div class="episodes">
    <episode-card
      v-for="episode of episodes"
      :episode="episode"
      :key="episode.episode_id + episode.title"
      @click.native="handleClick(episode.episode_id)"
    />
  </div>
</template>

<script>
import EpisodeCard from './components/EpisodeCard.vue';
export default {
  name: 'ListOfEpisodes',
  components: {
    EpisodeCard,
  },
  props: {
    episodes: Array,
  },
  methods: {
    handleClick: function(value) {
      this.$router.push(`/episode/${value}`);
    },
  },
};
</script>

<style scoped>
.episodes {
  display: grid;
  grid-template: auto / repeat(auto-fit, 300px);
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  margin: 10px 0;
  justify-content: center;
}
</style>
