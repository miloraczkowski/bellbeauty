<svelte:head>
  <title>Bell Beauty - Zabiegi</title>
</svelte:head>

<Header title="Zabiegi" subtitle="Zobacz oferowane przez nas zabiegi" image="treatments" />
<Note>Chwilowo informacje na tej podstronie są ograniczone. W przeciągu kilku dni pojawi się tutaj dużo więcej szczegółowych informacji o zabiegach które oferujemy. Przepraszamy za uniedogodnienia i zapraszamy do naszego salonu!</Note>
{#each treatments as treatment}
  <section class="treatment">
    <div class="wrapper">
      <h2><span class="underline">{treatment.name}</span></h2>
      <p>{treatment.description}</p>
    </div>
  </section>
{/each}

<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Note from "$lib/components/Note.svelte";

  const treatments = [
    {
      name: 'Wypełnianie ust',
      description: 'Modelowanie ust to zabieg, podczas którego podajemy kwas hialuronowy w usta, sprawiając, że stają się nawilżone, większe, jędrne, bardziej symetryczne i kształtne.'
    }, {
      name: 'Rozpuszczanie ust hialuronidazą',
      description: 'Podczas zabiegu podawany jest preparat, który rozpuszcza nieprawidłowo podany kwas hialuronowy, taki który migrował lub jego zbyt dużą ilość.'
    }, {
      name: 'Wolumetria',
      description: 'Wolumetria jest modelowaniem kwasem hialuronowym żuchwy, policzków i brody. Możemy dzięki niej zniwelować dziurkę w brodzie lub zbudować kąt żuchwy.'
    }, {
      name: 'Piercing',
      description: 'Od dłuższego czasu zajmujemy się piercingiem ciała, wykonując go w sterylnych warunkach i zakładając bezpieczne, tytanowe kolczyki. '
    }, {
      name: 'Botoks',
      description: 'Botoks to zabieg z użyciem toksyny botulinowej, który poraża wybrane mięśnie, uniemożliwiając lub mocno ograniczając napinanie ich, dzięki czemu zapobiegamy utrwaleniu się powstającym na twarzy bruzd i zmarszczek.'
    }, {
      name: 'Stylizacja rzęs',
      description: 'Stylizacja rzęs polega na doklejeniu rzęs syntetycznych do naturalnych. Rzęsy możemy przedłużyć i zagęścić.'
    }
  ]
</script>

<style lang="scss">
  .treatment {
    h2 {
      text-align: center;
    }

    p {
      margin: 50px auto 0;
      max-width: 600px;
    }
  }
</style>
