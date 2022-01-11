<script lang="ts">
  import Table from './Table.svelte';
  import { onMount } from 'svelte';

  let data = [];
  let loading = true;

  onMount(async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const dFetch = await fetch('data.json').then((response) =>
        response.json(),
      );

      data = [...dFetch];
    } catch (e) {
      console.log(e);
    } finally {
      loading = false;
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

<Table {columns} {data} {loading} />

<style>
</style>
