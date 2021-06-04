import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://breakingbadapi.com/api',
});

export const getEpisodes = (name) => instance.get(`/episodes?series=${name}`);

export const getEpisodeById = (id) => instance.get(`/episodes/${id}`);

export const getDeaths = () => instance.get('/deaths');

export const getCharacterByName = (name) =>
  instance.get(`/characters?name=${name}`);

export const getQuoteByAuthor = (author) =>
  instance.get(`/quote?author=${author}`);

export const getInfoSerial = (apikey, id) =>
  axios.get(`https://www.omdbapi.com/?apikey=${apikey}&i=${id}`);

export const getCharactersByCategory = (category) =>
  instance.get(`/characters?category=${category}`);

export const getQuoutesBySeries = (series) =>
  instance.get(`/quotes?series=${series}`);
