<svelte:head>
  <title>Bell Beauty - Kontakt</title>
</svelte:head>

<Header title="Kontakt" subtitle="Umów się z nami na wizytę" image="contact"/>
<section class="contact-information">
  <div class="wrapper">
    {#each tabs as tab, index}
      <a
        class="contact-information__tab"
        href="{tab.link}"
        target="{index === 2 ? '_blank' : '_self'}"
      >
        <h2><span class="underline">{tab.title}</span></h2>
        <div>{tab.text}</div>
      </a>
    {/each}
  </div>
</section>
<section class="contact-hours">
  <div class="wrapper">
    <h3><span class="underline">Godziny otwarcia</span></h3>
    <div>Jesteśmy otwarci od poniedziałku do piątku w godzinach od 8:00 do 16:00.</div>
  </div>
</section>
<iframe class="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.9432220178815!2d22.330279015695957!3d49.466687479351684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c0b1e05e263c1%3A0x6900f5e02027041d!2sUnii%20Brzeskiej%2032%2C%2038-600%20Lesko!5e0!3m2!1spl!2spl!4v1652792138509!5m2!1spl!2spl" title="Mapa" allowfullscreen="{false}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

<script lang="ts">
  import Header from '../../lib/components/Header.svelte'

  let tabs = [
    {
      title: 'Email',
      text: 'bellbeautycontact@gmail.com',
      link: `mailto:bellbeautycontact@gmail.com`
    }, {
      title: 'Telefon',
      text: '+48 785 438 354',
      link: `tel:+48 785 438 354`
    }, {
      title: 'Adres',
      text: 'ul. Unii Brzeskiej 32 38-600 Lesko',
      link: `https://google.pl/maps/place/'ul. Unii Brzeskiej 32 38-600 Lesko'`
    }
  ]
</script>

<style lang="scss">
  .wrapper {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .contact-information {
    & .wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 50px;
    }

    &__tab {
      transition: color .2s;
      text-align: center;

      > h2 {
        margin: 0 0 50px;
      }

      &:hover, &:focus {
        color: $accent;

        > h2 > .underline {
          background-image: linear-gradient(#ffffff, #ffffff);
        }
      }
    }
  }

  .contact-hours {
    & .wrapper {
      text-align: center;
    }

    & h3 {
      margin: 0 0 50px;
    }
  }

  .contact-map {
    display: block;
    border: none;
    border-top: 2px solid #000000;
    width: 100%;
    height: 400px;
  }

  // Responsiveness

  @media (max-width: 900px) {
    .contact-information  {
      > .wrapper {
        grid-template-columns: 1fr;
        padding-top: 50px;
        padding-bottom: 50px;
      }

      &__tab > h2 {
        margin: 0 0 20px;
      }
    }

    .contact-hours > .wrapper {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  }
</style>
