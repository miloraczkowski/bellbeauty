<svelte:head>
  <title>BellBeauty - {category.name}</title>
</svelte:head>

<TreatmentsList
  category={category.name}
  treatments={category.treatments}
  currentTreatment={treatment.name}
/>
<section class="description">
  <div class="wrapper">
      
      <img src="/uploads/{parseName(category.name, treatment.name)}/index.png" alt="{treatment.name}">
      <h2><span class="underline">{treatment.name}</span></h2>
      <p>{description}</p>
    
  </div>
</section>
<section class="additional">
  <div class="wrapper">
    <div class="additional__tab">
      <h3><span class="underline">Przeciwwskazania</span></h3>
      <p>{contraindications}</p>
    </div>
    <div class="additional__spacer"></div>
    <div class="additional__tab">
      <h3><span class="underline">Zalecenia po zabiegu</span></h3>
      <p>{recommendations}</p>
    </div>
  </div>
</section>
<section class="price">
  <div class="wrapper">
    <div>Interesują cię ceny zabiegów?</div>
    <Button text="Cennik" href="/cennik" big/>
  </div>
</section>
<Gallery path="/uploads/{parseName(category.name, treatment.name)}" images={images} />

<script lang="ts">
  import TreatmentsList from "$lib/components/TreatmentsList.svelte";
  import { parseName } from "$lib/assets/main";
  import Button from "$lib/components/Button.svelte";
  import Gallery from "$lib/components/Gallery.svelte";

  export let category: {
    name: string
    description: string
    contraindications: string
    recommendations: string
    treatments: string[]
  }

  export let treatment: {
    name: string
    description: string
    contraindications: string
    recommendations: string
    images: number
  }

  export let images: number | 'error'

  function replaceIfEmpty(field: 'description' | 'contraindications' | 'recommendations') {
    if (treatment[field] === undefined || treatment[field] === '')
      return category[field]
    return treatment[field]
  }

  const description = replaceIfEmpty('description')
  const contraindications = replaceIfEmpty('contraindications')
  const recommendations = replaceIfEmpty('recommendations')
</script>

<style lang="scss">
  .description {
    > .wrapper {
      max-width: 1200px;
    }

    h2 {
      margin: 0 0 20px;
    }

    img {
      float: right;
      border: 2px solid #000000;
      width: 400px;
      height: 400px;
      margin: 0 0 50px 50px;
    }
  }

  .additional {
    padding: 0;

    > .wrapper {
      display: grid;
      grid-template-columns: 1fr max-content 1fr;
      gap: 50px;
    }

    &__tab {
      padding: 50px 0;

      > h3 {
        margin: 0 0 20px;
      }
    }

    &__spacer {
      width: 2px;
      height: 100%;
      background: #000000;
    }
  }

  .price {
    @include fontSize(20px);
    text-align: center;

    :global(.button) {
      margin: 50px auto 0;
    }
  }

  // Responsiveness

  @media (max-width: 1000px) {
    .description {
      > .wrapper {
        grid-template-columns: 1fr;
      }

      h2 {
        text-align: center;
      }

      img {
        display: none;
      }
    }

    .additional {
      padding: 50px 0;
      > .wrapper {
        grid-template-columns: 1fr;
      }

      &__tab {
        padding: 0;

        > h3 {
          text-align: center;
        }
      }

      &__spacer {
        display: none;
      }
    }
  }
</style>
