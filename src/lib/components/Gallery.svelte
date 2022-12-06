<section class="gallery">
  <div class="wrapper">
    {#if images === 'error'}
      <div class="gallery__error">Wystąpił błąd podczas ładowania zdjęć.</div>
    {:else}
      {#each Array(images) as _, i}
        <img class="gallery__image" src="{path}/{i}.png" alt="Zdjęcie {i + 1}">
      {/each}
    {/if}
  </div>
  <div class="overlay">
    <div class="overlay__wrapper">
      <img class="overlay__image" src="{path}/0.png" alt="">
      <div class="overlay__button" style="grid-column: 1;">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M68.3333 8.54166L74.1666 14.4792L38.4375 50.2083L74.1667 85.9375L68.3333 91.875L26.6667 50.2083L68.3333 8.54166Z" fill="white"/>
        </svg>
      </div>
      <div class="overlay__button" style="grid-column: 3;">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.6667 91.4583L25.8333 85.5208L61.5625 49.7917L25.8333 14.0625L31.6667 8.125L73.3333 49.7917L31.6667 91.4583Z" fill="white"/>
        </svg>
      </div>
    </div>
  </div>
</section>

<script lang="ts">
  export let images: number | 'error'
  export let path: string

  let enlargedImage: number
</script>

<style lang="scss">
  .gallery {
    > .wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 50px;
    }

    &__error {
      @include fontSize(20px);
      text-align: center;
    }

    &__image {
      cursor: pointer;
      border: 2px solid #000000;
      width: 100%;
      transition: border-color .2s;
      
      &:hover {
        border-color: $accent;
      }
    }
  }

  .overlay {
    z-index: 200;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .8);

    &__wrapper {
      display: grid;
      grid-template-columns: max-content 1fr max-content;
      grid-template-rows: max-content 1fr max-content;
      max-width: 1600px;
      height: 100%;
      margin: 0 auto;
    }

    &__image {
      grid-column: 1/-1;
      grid-row: 1/-1;
      place-self: center;
      width: auto;
      max-width: calc(100% - 100px);
      height: auto;
      max-height: calc(100% - 100px);
    }

    &__button {
      cursor: pointer;
      grid-row: 2;
      display: grid;
      place-items: center;
      transition: background-color .2s;
      width: 250px;
      height: 100%;

      > svg > path {
        transition: fill .2s;
      }

      &:hover {
        background: rgba(255, 255, 255, .2);

        > svg > path {
          fill: $accent;
        }
      }
    }
  }

  // Responsiveness

  @media (max-width: 1000px) {
    .gallery > .wrapper {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 800px) {
    .gallery > .wrapper {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 600px) {
    .gallery > .wrapper {
      grid-template-columns: 1fr;
    }
  }
</style>
