<template>
  <div class="serial">
    <img :src="serial.Poster" :alt="serial.Title" />
    <div class="info">
      <h1>{{ serial.Title }} (serial {{ serial.Year }})</h1>
      <span>{{ serial.Plot }}</span>
      <div class="about">
        <h2>About serial</h2>
        <div>
          <strong>Rating:</strong>
          <span
            :key="rating.Source + idx"
            v-for="(rating, idx) in serial.Ratings"
          >
            {{ rating.Source }} - <strong>{{ rating.Value }}</strong>
          </span>
        </div>
        <list-item :name="'Writer'" :value="serial.Writer" />
        <list-item :name="'Language'" :value="serial.Language" />
        <list-item :name="'Country'" :value="serial.Country" />
        <list-item :name="'Genre'" :value="serial.Genre" />
        <list-item :name="'Actors'" :value="serial.Actors" />
        <list-item :name="'Time'" :value="serial.Runtime" />
        <list-item :name="'Released'" :value="serial.Released" />
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from "./components/ListItem";
export default {
  name: "AboutSerial",
  components: {
    ListItem,
  },
  props: {
    serial: Object,
  },
};
</script>

<style scoped>
.info {
  margin: 10px;
}
.about {
  text-align: start;
}
.about div {
  margin: 8px;
}
.serial {
  max-width: 1024px;
  margin: 10px auto;
  display: grid;
  grid-template: auto / 1fr 2fr;
}
img {
  object-fit: contain;
  max-width: fit-content;
  width: 100%;
}
</style>
