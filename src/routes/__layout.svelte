{#if $loading}
  <Loader />
{/if}
<Navigation />
<slot />
<Footer />

<script lang="ts">
  import { loading } from '../states/loading';
  import { navigating } from '$app/stores';
  import Loader from '$lib/components/Loader.svelte'
  import Navigation from '$lib/components/Navigation.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import '$lib/assets/main.scss'

  $: $loading = !!$navigating
</script>
