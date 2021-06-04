<template>
  <div>
    <strong>{{ name }}:</strong> <span> {{ value }} </span>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    name: String,
    value: String,
  },
};
</script>
