<script lang="ts">
  import type { ITableColumn } from '../types';

  export let columns: ITableColumn[];
  export let data: any[];

  let filteredData = data;

  const onSearch = (e) => {
    let { value } = e.target;

    value = value.trim().toLowerCase();

    const fdata = data.filter((d) => {
      if (d.name.trim().toLowerCase().includes(value)) {
        return d;
      } else if (d.company.trim().toLowerCase().includes(value)) {
        return d;
      }
    });

    filteredData = [...fdata];
  };
</script>

<div class="search">
  <input type="search" placeholder="search" on:input={onSearch} />
</div>

<div class="table">
  <div class="thead">
    <div class="tr">
      {#each columns as { title, id, Header = null }}
        <div class="th">
          {#if Header}
            {Header({ title, id })}
          {:else}
            {title}
          {/if}
        </div>
      {/each}
    </div>
  </div>
  <div class="tbody">
    {#each filteredData as item}
      <div class="tr">
        {#each columns as { id, Cell = null }}
          <div class="td">
            {#if Cell}
              {Cell(item)}
            {:else}
              {item[id]}
            {/if}
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .table {
    position: relative;
    font-size: 1.2rem;
    padding: 24px;
    padding-top: 0;
    height: 80vh;
    overflow: auto;
  }

  .thead,
  .tbody {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }

  .thead {
    position: sticky;
    top: 0;
    left: 0;
    background-color: #fff;
  }

  .tr {
    display: flex;
    width: 100%;

    &:hover {
      .td {
        background-color: #edf5ff;
      }
    }
  }

  .th,
  .td {
    flex: 1;
    padding: 6px;
  }

  .th {
    font-weight: 600;
  }

  .search {
    padding: 48px 24px;
    padding-bottom: 24px;
    input {
      font-size: 1.2rem;
      padding: 6px;
    }
  }
</style>
