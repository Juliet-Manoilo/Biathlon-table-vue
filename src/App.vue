<template>
  <div id="app">
    <h1 class="title is-2">Biathlon Data Table</h1>
    <Table />
  </div>
</template>

<script>
import Table from "./components/Table.vue";

export default {
  name: "App",
  components: { Table },
};
</script>

<style lang="scss">
h1 {
  font-size: 40px;
  text-align: center;
  font-style: bold;
  padding-bottom: 50px;
}
</style>
