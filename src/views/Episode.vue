<template>
  <div class="episode">
    <template v-if="episode">
      <h1>Characters:</h1>
      <div class="charactes">
        <template v-if="charactersOfEpisode.length">
          <character-card
            :children="character"
            :name="character.name"
            :key="character.char_id + idx"
            v-for="(character, idx) in charactersOfEpisode"
          />
        </template>
        <template v-else>
          <character-card
            :name="character"
            :key="character + idx"
            v-for="(character, idx) in episode.characters"
          />
        </template>
      </div>
    </template>
    <h1 v-else>Такого эпизода не существует!</h1>
    <template v-if="deaths.length">
      <h1>Deaths:</h1>
      <div class="deaths">
        <character-card
          :name="death.death"
          :key="death.death_id + idx"
          v-for="(death, idx) in deaths"
        />
      </div>
    </template>
  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard.vue';
import { getEpisodeById, getDeaths } from '@/api';
import { nameSeries } from '@/constants';
import store from '@/store';
export default {
  name: 'Episode',
  components: {
    CharacterCard,
  },
  props: {
    params: Object,
  },
  data: function() {
    return {
      episode: null,
      charactersOfEpisode: [],
      deaths: [],
      season: null,
      store: store.state,
    };
  },
  created: function() {
    getEpisodeById(this.params.id).then((res) => {
      const data = res.data[0];
      if (new RegExp(data.series, 'gmi').test(nameSeries)) {
        this.episode = data;
      }
    });
  },
  watch: {
    episode: function(value) {
      if (this.store.characters.length) {
        this.charactersOfEpisode = this.store.characters.filter((character) =>
          value.characters.includes(character.name)
        );
      }
      this.season = +value.season;
      getDeaths().then((res) => {
        this.deaths = res.data.filter(
          (c) => c.season === +value.season && c.episode === +value.episode
        );
      });
    },
  },
};
</script>

<style scoped>
.charactes,
.deaths {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
}
</style>
