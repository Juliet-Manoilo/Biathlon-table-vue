<template >
  <div class="table is-hoverable">
    <b-table :data="biathlonData">
      <b-table-column
        field="rank"
        label="Rank"
        width="90"
        sortable
        numeric
        v-slot="props"
      >
        {{ props.row.rank }}
      </b-table-column>

      <b-table-column
        field="name"
        label="Name"
        sortable
        searchable
        width="300"
        v-slot="props"
      >
        {{ props.row.name }}
      </b-table-column>
      <b-table-column
        field="shooting"
        label="Time range in seconds"
        numeric
        sortable
        centered
        width="300"
        v-slot="props"
      >
        {{ props.row.shooting }}
      </b-table-column>
      <b-table-column
        field="speed"
        label="Speed in seconds"
        numeric
        sortable
        centered
        width="250"
        v-slot="props"
      >
        {{ props.row.speed }}
      </b-table-column>
    </b-table>
  </div>
</template>

<script>
import { biathlonData } from "./data.js";

export default {
  name: "Table",
  data() {
    return {
      biathlonData,
    };
  },
};
</script>


<style lang="scss">
.table {
  max-width: 70%;
  margin: auto;
}
</style>
