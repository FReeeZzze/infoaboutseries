<template>
  <div class="home">
    <search-bar />
    <tab-seasons :seasons="seasons" @change-tab="handleChange" />
    <about-serial v-if="serial && !currentSeason" :serial="serial" />
    <list-of-episodes v-else :episodes="filteredEpisodes" />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import TabSeasons from '@/components/TabSeasons.vue';
import ListOfEpisodes from '@/components/ListOfEpisodes';
import AboutSerial from '@/components/AboutSerial';
import { getEpisodes, getInfoSerial } from '@/api';
import { nameSeries, serials } from '@/constants';
import { uniqueNumOfSeasons } from '@/utils/with-functions';
import store from '@/store';

export default {
  name: 'Home',
  components: {
    SearchBar,
    TabSeasons,
    ListOfEpisodes,
    AboutSerial,
  },
  data: function() {
    return {
      currentSeason: null,
      episodes: [],
      seasons: [],
      serial: null,
      store: store.state,
    };
  },
  computed: {
    filteredEpisodes: function() {
      return this.episodes.filter((c) => c.season === this.currentSeason);
    },
  },
  created: function() {
    getEpisodes(nameSeries).then((res) => {
      this.episodes = res.data;
      store.setEpisodes(this.episodes);
      this.seasons = uniqueNumOfSeasons(res.data);
      store.setSeasons(this.seasons);
    });
    const serial = serials.find((c) =>
      new RegExp(c.name, 'gmi').test(nameSeries)
    );
    if (serial) {
      getInfoSerial(serial.apikey, serial.idIMDb).then((res) => {
        this.serial = res.data;
      });
    }
  },
  methods: {
    handleChange: function(value) {
      if (value === this.currentSeason) {
        this.currentSeason = null;
      } else {
        this.currentSeason = value;
      }
    },
  },
};
</script>
