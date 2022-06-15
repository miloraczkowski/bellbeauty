<svelte:head>
  <title>Bell Beauty - Zabiegi</title>
</svelte:head>

<Header title="Zabiegi" subtitle="Oferowane przez nas zabiegi" image="treatments" />
{#each items as item}
  <section class="category">
    <div class="wrapper">
      <div>
        <h2 class="category__name"><span class="underline">{item.name}</span></h2>
        <img src="/uploads/{parseName(item.name)}/index.png" alt="{item.name}">
        <div class="category__description">{item.shortDescription}</div>
        {#if item.treatments.length > 0}
          <div class="category__treatments">
            <h3>Zabiegi:</h3>
            {#each item.treatments as treatment}
              <a href="/{parseName(item.name, treatment)}">{treatment}</a>
            {/each}
          </div>
        {/if}
        <Button text="Czytaj więcej" href="{parseName(item.name)}"/>
      </div>
      <img src="/uploads/{parseName(item.name)}/index.png" alt="{item.name}">
    </div>
  </section>
{/each}

<script lang="ts">
  import Header from '$lib/components/Header.svelte'
  import Button from '$lib/components/Button.svelte'
  import { parseName } from '$lib/assets/main'

  export let items: {
    name: string
    shortDescription: string
    treatments: string[]
  }[]
</script>

<style lang="scss">
  .category {
    > .wrapper {
      display: grid;
      grid-template-columns: 1fr max-content;
      gap: 50px;
      align-items: center;
      padding: 50px;
      max-width: 1200px;

      > div {
        display: grid;
        gap: 50px;

        > img {
          display: none;
          border: 2px solid #000000;
          width: 100%;
        }
      }

      > img {
        border: 2px solid #000000;
        width: 400px;
        height: 400px;
        background: lightgrey;
      }
    }

    &__name{
      margin: 0 auto;
      width: fit-content;
    }

    &__description {
      text-align: justify;
    }

    &__treatments {
      margin: 0 -15px -20px;
      text-align: center;

      > h3 {
        margin: 0 auto 20px;
        width: fit-content;
      }

      > a {
        @include fontSize(20px);
        display: inline-block;
        transition: color .2s;
        margin: 0 15px 20px;

        &:hover {
          color: $accent;
        }
      }
    }

    & :global(.button) {
      margin: 0 auto;
    }
  }

  // Responsiveness

  @media (max-width: 950px) {
    .category .wrapper {
      grid-template-columns: 1fr;
      max-width: 600px;

      > div > img {
        display: block;
      }

      > img {
        display: none;
      }
    }
  }

  @media (max-width: 500px) {
    .category .wrapper {
      padding: 50px 20px;
    }
  }
</style>
