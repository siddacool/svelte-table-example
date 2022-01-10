<script lang="ts">
  import Table from './Table.svelte';
  import data from './data.json';

  const columns = [
    {
      id: 'name',
      title: 'Name',
    },
    {
      id: 'age',
      title: 'Age',
    },
    {
      id: 'gender',
      title: 'Gender',
    },
    {
      id: 'company',
      title: 'Company',
    },
  ];
</script>

<Table {columns} {data} />

<style>
</style>
