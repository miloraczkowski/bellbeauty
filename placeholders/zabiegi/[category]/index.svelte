<svelte:head>
  <title>Bell Beauty - {category.name}</title>
</svelte:head>

<TreatmentsList category={category.name} treatments={category.treatments}/>
{#each treatments as treatment}
  <section class="treatment">
    <div class="wrapper">
      <div class="treatment__description">
        <h3>{treatment.name}</h3>
        <img
          src="/uploads/{parseName(category.name, treatment.name)}/index.png"
          alt="{treatment.name}"
          class="treatment__description__image"
        >
        <div>{treatment.shortDescription}</div>
        <Button text="Czytaj więcej" href="/{parseName(category.name, treatment.name)}" />
      </div>
      <img
        src="/uploads/{parseName(category.name, treatment.name)}/index.png"
        alt="{treatment.name}"
        class="treatment__image"
      >
    </div>
  </section>
{/each}

<script lang="ts">
  import TreatmentsList from "$lib/components/TreatmentsList.svelte";
  import { parseName } from "$lib/assets/main";
  import Button from "$lib/components/Button.svelte";

  export let category: {
    name: string
    treatments: string[]
  }

  export let treatments: {
    name: string
    shortDescription: string
  }[]
</script>

<style lang="scss">
  .treatment {
    padding: 50px 0;
    
    > .wrapper {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 400px));
      gap: 50px;
      place-items: center;
      width: fit-content;
    }

    &__description {
      > h3 {
        text-align: center;
      }

      &__image {
        display: none;
        margin: 50px 0 0;
        border: 2px solid #000000;
        width: 100%;
      }

      > div {
        margin: 50px 0;
        text-align: justify;
      }

      > :global(.button) {
        margin: 0 auto;
      }
    }

    &__image {
      border: 2px solid #000000;
      width: 100%;
    }
  }

  @media (max-width: 700px) {
    .treatment{
      > .wrapper {
        grid-template-columns: minmax(0, 500px);
      }

      &__description__image {
        display: block;
      }

      &__image {
        display: none;
      }
    }
  }
</style>
