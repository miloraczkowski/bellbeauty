<svelte:head>
  <title>Bell Beauty - Cennik</title>
</svelte:head>

<Header title="Cennik" subtitle="Zapoznaj się z cenami naszych usług" image="price-list" />
{#each tables as table}
  <section class="table">
    <div class="wrapper">
      <h2 class="table__title"><span class="underline">{table.name}</span></h2>
      {#if table.description}
        <div class="table__description">{table.description}</div>
      {/if}
      {#each table.items as item}
        <div class="table__item">
          <div class="table__item__name">{item.name}</div>
          <div class="table__item__price">{parsePrice(item.price)}</div>
          {#if item.description}
            <div class="table__item__description">{item.description}</div>
          {/if}
        </div>
      {/each}
    </div>
  </section>
{/each}

<script lang="ts">
  import Header from '../../lib/components/Header.svelte'

  interface Price {
    type: 'flat' | 'adjustable'
    base: number
    top: number | null
  }

  export let tables: {
    name: string
    description: string | null
    items: {
      name: string
      description: string | null
      price: Price
    }[]
  }[]

  function parsePrice(price: Price): string {
    if (price.top === null)
      return `${price.base} zł`

    return `${price.base} zł - ${price.top} zł`
  }
</script>

<style lang="scss">
  .table {
    padding: 50px 0;

    & .wrapper {
      max-width: 1200px;
    }
    
    &__title {
      margin: 0 0 50px;
      text-align: center;
    }

    &__description {
      margin: 0 auto 50px;
      max-width: 800px;
      text-align: justify;
    }

    &__item {
      display: grid;
      grid-template-columns: 1fr max-content;
      gap: 10px 50px;
      border-top: 2px solid #000000;
      padding: 10px 0;
      transition: background .2s;

      padding: 0px 0 30px;

      &:not(:last-of-type) {
        //min-height: 70px;
      }

      &__name, &__price {
        @include fontSize(20px);
      }

      &__description {
        grid-column: 1/3;
      }

      &:hover {
        background: rgba(0, 0, 0, .1);
      }
    }
  }

  // Responsiveness

  @media (max-width: 500px) {
    .table {

    }
  }
</style>
