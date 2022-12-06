<Navigation />
<main><slot /></main>
<Footer />

<script lang="ts">
  import '$lib/global.scss'
  import Navigation from '$lib/components/Navigation.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { onMount } from 'svelte'

  onMount(() => {
    const root = document.querySelector(':root') as HTMLElement
    const setVhVar = () => {
      const vh = window.innerHeight / 100
      root.style.setProperty('--vh', `${vh}px`)
    }
    setVhVar()
    window.addEventListener('resize', () => setVhVar())
  })
</script>
