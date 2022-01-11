<script lang="ts">
  import Table from './Table.svelte';
  import { onMount } from 'svelte';

  let data = [];

  onMount(async () => {
    try {
      const d = await import('./data.json');

      data = [...d.default];
    } catch (e) {
      console.log(e);
    }
  });

  const columns = [
    {
      id: 'name',
      title: 'Name',
      Header: ({ title }) => {
        return title;
      },
      Cell: ({ name }) => {
        return name;
      },
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
