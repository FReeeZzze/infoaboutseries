<template>
  <div class="seasons">
    <div
      class="season"
      :key="season + idx"
      v-for="(season, idx) of seasons"
      :class="{
        'active-tab': active === season,
        'not-active': active != season,
      }"
      @click.prevent="handleClick(season)"
    >
      Season: <span>{{ season }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabSeasons',
  props: {
    seasons: Array,
  },
  data: function() {
    return { active: null };
  },
  methods: {
    handleClick: function(value) {
      if (this.active === value) {
        this.active = null;
      } else {
        this.active = value;
      }
      this.$emit('change-tab', value);
    },
  },
};
</script>

<style sciped>
.active-tab {
  color: #42b983;
  border: 2px solid #42b983;
}
.not-active {
  border: 2px solid black;
}
.seasons {
  display: grid;
  grid-gap: 15px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 150px);
}
.season {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding: 5px;
  width: 150px;
  cursor: pointer;
  user-select: none;
}
</style>
