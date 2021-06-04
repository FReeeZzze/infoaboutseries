<template>
  <div class="episode">
    <h1>{{ episode.title }}</h1>
    <h2>Characters:</h2>
    <div class="characters">
      <div :key="character" v-for="character of episode.characters">
        {{ character }}
      </div>
    </div>
    <time :datetime="episode.air_date">{{ episode.air_date }}</time>
  </div>
</template>

<script>
export default {
  name: 'EpisodeCard',
  props: {
    episode: Object,
  },
};
</script>

<style scoped>
.episode {
  cursor: pointer;
  position: relative;
  background: rgb(236, 235, 235);
  padding: 10px;
  height: 330px;
  align-items: center;
  display: grid;
  grid-template: auto auto minmax(200px, auto) auto / auto;
  text-align: center;
  border-radius: 2px;
  -webkit-box-shadow: -1px 3px 5px -3px rgba(0, 0, 0, 0.78);
  -moz-box-shadow: -1px 3px 5px -3px rgba(0, 0, 0, 0.78);
  box-shadow: -1px 3px 5px -3px rgba(0, 0, 0, 0.78);
}

.characters {
  margin-bottom: auto;
}

a {
  color: rgb(88, 88, 88);
  text-decoration: none;
}
h1 {
  margin: 0;
  font-size: 20px;
}

h2 {
  color: rgba(43, 43, 43, 0.712);
  margin: 0;
  font-size: 18px;
}

h1::after {
  background: rgb(89 85 85 / 57%);
  width: 100%;
  height: 28px;
  position: absolute;
  content: '';
  left: 0;
  right: 0;
  top: 16px;
}

time {
  margin-left: auto;
}
</style>
