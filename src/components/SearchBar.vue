<template>
  <div class="search-bar">
    <div class="search">
      <label>Search: </label
      ><input
        type="search"
        @change="handleSearch($event)"
        placeholder="input name, title episode, quote, death..."
      />
    </div>
    <div class="result">
      <character-card
        :children="character"
        :name="character.name"
        :key="character.char_id"
        v-for="character in result"
      />
    </div>
  </div>
</template>

<script>
import { getCharactersByCategory, getQuoutesBySeries, getDeaths } from '@/api';
import CharacterCard from '@/components/CharacterCard.vue';
import { nameSeries } from '@/constants';
import store from '@/store';
export default {
  name: 'SearchBar',
  components: {
    CharacterCard,
  },
  data: function() {
    return {
      searchValue: '',
      result: [],
      store: store.state,
    };
  },
  created: function() {
    getCharactersByCategory(nameSeries).then((res) => {
      store.setCharacters(res.data);
    });
    getQuoutesBySeries(nameSeries).then((res) => {
      store.setQuotes(res.data);
    });
    getDeaths().then((res) => {
      store.setDeaths(res.data);
    });
  },
  methods: {
    handleSearch: function(event) {
      this.searchValue = event.target.value;
    },
  },
  watch: {
    searchValue: function(value) {
      const findEpisode = store.state.episodes.find((episode) =>
        episode.title.toLowerCase().includes(value.toLowerCase())
      );
      const findQuote = store.state.quotes.find((quote) =>
        quote.quote.toLowerCase().includes(value.toLowerCase())
      );
      const findDeath = store.state.deaths.find((death) =>
        death.death.toLowerCase().includes(value.toLowerCase())
      );
      const byEpisode = findEpisode ? findEpisode.characters : [];
      const byQuote = findQuote ? findQuote.author : '';
      const byDeath = findDeath ? findDeath.responsible : '';
      const findCharacters = store.state.characters.filter(
        (character) =>
          character.name.toLowerCase().includes(value.toLowerCase()) ||
          byEpisode.includes(character.name) ||
          byQuote.includes(character.name) ||
          byDeath.includes(character.name)
      );
      this.result = findCharacters;
    },
  },
};
</script>

<style>
.result {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  justify-content: center;
}
.search-bar {
  display: grid;
  grid-gap: 10px;
  margin: 10px;
}
.search {
  margin: auto;
}
</style>
