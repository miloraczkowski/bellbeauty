<section class="treatments-list">
  <div class="wrapper">
    <div class="treatments-list__title">
      <div class="treatments-list__title__back" on:click={back} on:keypress={back}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 19L10.41 17.59L5.83 13L22 13L22 11L5.83 11L10.42 6.41L9 5L2 12L9 19Z" fill="black"/>
        </svg>
        <div>Powróć</div>
      </div>
      <h2><span class="underline">{category}</span></h2>
      <div class="treatments-list__title__number">{treatmentsNumber}</div>
    </div>
    <div
      class="treatments-list__list"
      style="grid-template-columns: repeat({gridColumns()}, max-content);"
    >
      {#each treatments as treatment}
        {#if currentTreatment === treatment}
          <span class="underline">{treatment}</span>
        {:else}
          <a href="/{parseName(category, treatment)}">{treatment}</a>
        {/if}
      {/each}
    </div>
  </div>
</section>

<script lang="ts">
  import { parseName } from "$lib/main";

  export let category: string
  export let treatments: string[]
  export let currentTreatment: string | null = null

  function back() {
    history.back()
  }

  const treatmentsNumber = `${treatments.length} ${treatments.length < 5 ? 'zabiegi' : 'zabiegów'}`

  const gridColumns = (() => {
    if (treatments.length >= 3) return 3
    if (treatments.length == 2) return 2
    return 1
  })
</script>

<style lang="scss">
  .treatments-list {
    padding: 50px 0;

    &__title {
      display: grid;
      grid-template-columns: 1fr max-content 1fr;
      align-items: center;

      &__back {
        display: grid;
        grid-template-columns: max-content max-content;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        width: fit-content;
        transition: color .2s;

        > svg > path {
          transition: fill .2s;
        }

        &:hover {
          color: $accent;

          > svg > path {
            fill: $accent;
          }
        }
      }

      &__number {
        justify-self: end;
      }
    }

    &__list {
      @include fontSize(20px);
      display: grid;
      gap: 30px 50px;
      max-width: fit-content;
      margin: 50px auto 0;

      > a {
        transition: color .2s;

        &:hover {
          color: $accent;
        }
      }
    }
  }

  // Responsiveness

  @media (max-width: 800px) {
    .treatments-list {
      &__title {
        grid-template-columns: 1fr;
        text-align: center;

        &__back, &__number {
          display: none;
        }
      }
    }
  }
</style>
