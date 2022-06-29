<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={'true'}>
  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap" rel="stylesheet">
</svelte:head>

{#if $loading}
  <Loader />
{/if}
<Navigation />
<slot />
<Footer />

<script lang="ts">
  import { loading } from './../states/loading'
  import { navigating } from '$app/stores'
  import Loader from '$lib/components/Loader.svelte'
  import Navigation from '$lib/components/Navigation.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import '$lib/assets/main.scss'

  $: $loading = !!$navigating
</script>
