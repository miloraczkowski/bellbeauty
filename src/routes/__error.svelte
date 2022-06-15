<section class="error">
  <div class="wrapper">
    <h1>{status}</h1>
    <h2>Ups, coś poszło nie tak :(</h2>
    <div>{message}</div>
    <Button text="Strona główna" href="/" big/>
  </div>
</section>

<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ status }) => {
    return {
      props: {
        status
      }
    }
  }
</script>

<script lang="ts">
  import Button from '$lib/components/Button.svelte';

  export let status: number

  const message = (() => {
    switch (status) {
      case 404:
        return 'Strona której szukasz nie została znaleziona. Mogła ona zostać usunięta, przeniesiona na inny adres lub nigdy nawet nie istniała.'
      case 500:
        return 'Wystąpiły problemy po naszej stronie. Przepraszamy za wszelkie uniedogodnienia i prosimy spróbować ponownie później.'
    }
  })()
</script>

<style lang="scss">
  .error {
    padding: 100px 0;

    > .wrapper {
      display: grid;
      gap: 50px;
      text-align: center;

      > div {
        margin: 0 auto;
        max-width: 600px;
      }

      > :global(.button) {
        margin: 0 auto;
      }
    }
  }
</style>
