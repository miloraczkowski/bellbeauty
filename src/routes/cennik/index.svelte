<svelte:head>
  <title>Bell Beauty - Cennik</title>
</svelte:head>

<Header title="Cennik" subtitle="Zapoznaj się z cenami naszych usług" image="price-list" />
{#each lists as list}
  <section class="list">
    <div class="wrapper">
      <div class="list__name">
        <h2><span class="underline">{list.name}</span></h2>
      </div>
      {#if list.description}
        <div class="list__description">{list.description}</div>
      {/if}
      {#each list.items as item}
        <div class="list__item">
          <div class="list__item__name">{item.name}</div>
          <div class="list__item__price">{parsePrice(item.price)}</div>
          {#if item.description}
            <div class="list__item__description">{item.description}</div>
          {/if}
          {#each item.additional as additional}
            <div class="list__additional">
              + {additional.name} - {additional.price} zł
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </section>
{/each}

<script lang="ts">
import Header from '../../lib/components/Header.svelte'

  interface List {
    description: string | null
    items: Item[]
    name: string
    order: number
    show: boolean
  }

  interface Item {
    additional: Additional[]
    description: string
    name: string
    order: number
    price: {
      base: number
      top: number | null
    }
    show: boolean
  }

  interface Additional {
    name: string
    order: number
    price: number
    show: boolean
  }

  export let lists: List[]

  function parsePrice(price: { base: number, top: number | null }): string {
    if (!price.top) return `${price.base} zł`
    return `${price.base} - ${price.top} zł`
  }
</script>

<style lang="scss">
  .list {
    > .wrapper {
      max-width: 1400px;
    }
  
    &__name {
      margin: 0 0 50px;
      text-align: center;
    }

    &__description {
      margin: 0 auto 50px;
      max-width: 800px;
    }

    &__item {
      display: grid;
      grid-template-columns: 1fr max-content;
      gap: 0 20px;
      border-top: 2px solid #000;
      padding: 10px 0 0;

      &:not(:last-of-type) {
        padding-bottom: 40px;
      }

      &__name, &__price {
        font-size: 20px;
      }

      &__description {
        grid-column: 1/-1;
        margin: 10px 0 0;
      }
    }

    &__additional {
      grid-column: 1/-1;
      margin: 10px 0 0 30px;
    }
  }
</style>
