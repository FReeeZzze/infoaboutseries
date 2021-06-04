<template>
  <div v-if="character" class="character">
    <div class="about">
      <h1>{{ character.name }}</h1>
      <h2>
        {{ character.nickname }},
        <time datetime="character.birthday"> {{ character.birthday }}</time>
      </h2>
      <template v-if="deaths.length">
        <h2>Responsible of deaths:</h2>
        <div class="responsible">
          <div
            :key="responsible.death_id"
            v-for="responsible of deaths"
            class="death"
          >
            {{ responsible.death }}
          </div>
        </div>
      </template>
    </div>
    <div v-if="quotes.length" class="quotes">
      <h3>Quotes:</h3>
      <ul>
        <li :key="item.quote_id" v-for="item in quotes">
          {{ item.quote }}
        </li>
      </ul>
    </div>
    <img :src="character.img" :alt="character.name" />
  </div>
  <div v-else>Нет информации о персонаже.</div>
</template>

<script>
import { getCharacterByName, getQuoteByAuthor } from "@/api";
import store from "@/store";
export default {
  name: "Character",
  props: {
    params: Object,
  },
  data: function () {
    return { character: null, quotes: [], deaths: [], store: store.state };
  },
  created: function () {
    if (this.store.characters.length && this.store.quotes.length) {
      this.character = store.state.characters.find((character) =>
        character.name.includes(this.params.name)
      );
      this.quotes = store.state.quotes.filter((quote) =>
        quote.author.includes(this.params.name)
      );
    } else {
      getCharacterByName(this.params.name).then((res) => {
        const character = res.data[0];
        if (character) {
          this.character = character;
        }
      });
      getQuoteByAuthor(this.params.name).then((res) => {
        this.quotes = res.data;
      });
    }
  },
  watch: {
    character: function (value) {
      this.deaths = store.state.deaths
        .filter((death) => death.responsible.includes(value.name))
        .sort((a, b) => {
          if (a.death < b.death) {
            return -1;
          }
          if (a.death > b.death) {
            return 1;
          }
          return 0;
        });
    },
  },
};
</script>

<style scoped>
.responsible {
  display: grid;
  grid-gap: 5px;
  grid-template: auto / auto;
}
.death {
  width: 100%;
}
h1 {
  grid-row: 1 / 3;
}
li {
  margin: 5px;
  text-align: left;
}
.about {
  text-align: left;
  margin: 10px;
}
.quotes {
  grid-column: 1 / 3;
}
.character {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 2fr 2fr;
  max-width: 1024px;
  margin: auto;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  grid-column: 1;
  grid-row: 1 / 3;
}
</style>
