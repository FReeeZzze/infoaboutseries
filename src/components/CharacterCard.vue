<template>
  <div class="card" @click="handleClick(name)">
    <div class="name">{{ name }}</div>
    <template v-if="character">
      <img :src="character.img" :alt="name" />
    </template>
    <template v-else>
      <img :src="noImg" :alt="name" />
    </template>
  </div>
</template>

<script>
import noImg from '@/assets/noImg.jpg';
import { getCharacterByName } from '@/api';
export default {
  name: 'CharacterCard',
  props: {
    name: String,
    children: {
      type: Object,
      required: false,
    },
  },
  methods: {
    handleClick: function(value) {
      this.$router.push(`/character/${value}`);
    },
  },
  data: function() {
    return { character: null, noImg: noImg };
  },
  created: function() {
    if (this.children) {
      this.character = this.children;
    } else {
      getCharacterByName(this.name).then((res) => {
        this.character = res.data[0];
      });
    }
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
  margin: auto;
  background: rgba(255, 255, 255, 0.993);
  padding: 5px;
  max-width: 200px;
  -webkit-box-shadow: 4px 3px 6px -1px rgba(0, 0, 0, 0.46);
  -moz-box-shadow: 4px 3px 6px -1px rgba(0, 0, 0, 0.46);
  box-shadow: 4px 3px 6px -1px rgba(0, 0, 0, 0.46);
}
.name {
  margin-bottom: 5px;
}
img {
  max-width: 200px;
  max-height: 200px;
  object-fit: contain;
}
</style>
