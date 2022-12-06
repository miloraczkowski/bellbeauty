<svelte:head>
  <title>Bell Beauty - Cennik</title>
</svelte:head>

<img class="background" src="pricelists-background.png" alt="Background">
<Header title="Cennik" subtitle="Zapoznaj się z cenami naszych usług" image="price-list" />
{#each lists as list}
  <section class="list">
    <div class="wrapper">
      <h2 class="list__name">{list.name}</h2>
      {#if list.description}
        <div class="list__description">{@html list.description}</div>
      {/if}
      {#each list.items as item}
        {#if item.type === 'item'}
          <div class="list__item" class:line={item.line}>
            <div class="list__item__name">{item.name}</div>
            <div class="list__item__price">{parsePrice(item.price)}</div>
            {#if item.description}
              <div class="list__item__description">{item.description}</div>
            {/if}
            {#each item.additional as additional}
              <div class="list__item__additional">• {additional.name} - {additional.price} zł</div>
            {/each}
          </div>
        {:else if item.type === 'title'}
          <h3 class="list__title">{item.text}</h3>
        {:else if item.type === 'note'}
          <div class="list__note">{@html item.text}</div>
        {/if}
      {/each}
    </div>
  </section>
{/each}

<script lang="ts">
  import Header from '$lib/components/Header.svelte'

  interface List {
    description: string | null
    items: (Item | Title | Note)[]
    name: string
    order: number
    show: boolean
  }

  interface Item {
    additional: Additional[]
    description: string | null
    line: boolean
    name: string
    order: number
    price: {
      base: number
      top: number | null
    }
    show: boolean
    type: 'item'
  }

  interface Title {
    order: number
    text: string
    type: 'title'
  }

  interface Note {
    order: number
    text: string
    type: 'note'
  }

  interface Additional {
    name: string
    price: number
    show?: boolean
  }

  import type { PageData } from './$types';

  export let data: PageData
  const unorderedLists: List[] = data.unorderedLists as List[]

  // Reorder lists based on thir order number

  const lists = (() => {
    if (!unorderedLists) return []
    const result = Array(unorderedLists.length)

    for (let i = 0; i < unorderedLists.length; i++) {
      const list = unorderedLists[i]
      const unorderedItems = list.items
      const items = Array(unorderedItems.length)

      for (let j = 0; j < unorderedItems.length; j++)
        items[unorderedItems[j].order] = unorderedItems[j]
      
      list.items = items
      result[list.order] = list
    }

    return result
  })()

  function parsePrice(price: { base: number, top: number | null }): string {
    if (!price.top) return `${price.base} zł`
    return `${price.base} - ${price.top} zł`
  }
</script>

<style lang="scss">
  .background {
    z-index: -100;
    position: fixed;
    top: 0;
    left: 0;
    height: calc(100vh);
  }

  :global(.header) {
    background: #fff;
  }

  .list {
    &__name, &__description {
      margin: 0 0 50px;
      text-align: center;
    }

    &__item {
      display: grid;
      grid-template-columns: 1fr max-content;
      gap: 10px 20px;
      margin: 30px 0;
      border-top: 2px solid rgba(0, 0, 0, .20);
      padding: 10px 0 0;

      &.line {
        border-color: rgba(0, 0, 0, 1);
      }
      
      &__name, &__price {
        font-size: 20px;
      }

      &__description {
        grid-column: 1/-1;
      }

      &__additional {
        grid-column: 1/-1;
        margin: 0 0 0 30px;
      }
    }

    &__title {
      margin: 30px 0;
    }

    &__note {
      margin: 30px 0;
    }
  }
</style>
