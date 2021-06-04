const store = {
  debug: true,
  state: {
    characters: [],
    deaths: [],
    episodes: [],
    seasons: [],
    quotes: [],
  },
  setCharacters(payload) {
    if (this.debug) console.log('setCharacters вызвано с ', payload);
    this.state.characters = payload;
  },
  setDeaths(payload) {
    if (this.debug) console.log('setDeaths вызвано с ', payload);
    this.state.deaths = payload;
  },
  setEpisodes(payload) {
    if (this.debug) console.log('setEpisodes вызвано с ', payload);
    this.state.episodes = payload;
  },
  setSeasons(payload) {
    if (this.debug) console.log('setSeasons вызвано с ', payload);
    this.state.seasons = payload;
  },
  setQuotes(payload) {
    if (this.debug) console.log('setQuotes вызвано с ', payload);
    this.state.quotes = payload;
  },
};

export default store;
