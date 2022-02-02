<template>
<div>
  <div v-for="(item) of items" :key="item">
    <v-sheet>
      <v-skeleton-loader class="card" type="card-avatar"></v-skeleton-loader>
    </v-sheet>
  </div>
</div>
</template>
<script>
export default {
  name: 'AppSkeletonLoader',
  computed: {
    items() {
      const arr = [];
      for (let i = 0; i <= 20; i += 1) {
        if (i) {
          arr.push(i);
        }
      }
      return arr;
    },
  },
};
</script>
<style scoped>
.card {
  width: 220px;
  height: 330px;
  margin-right: 20px
}
</style>
