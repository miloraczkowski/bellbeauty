<header class="header">
  <div class="wrapper">
    <div>
      <h1 class="header__title">{title}</h1>
      <div class="header__subtitle">{subtitle}</div>
    </div>
    <img class="header__image" src="/headers/{image}.png" alt="Porównianie przed i po zabiegu">
  </div>
</header>

<script lang="ts">
  import '$lib/assets/main.scss'

  export let title: string
  export let subtitle: string
  export let image: string
</script>

<style lang="scss">
  .header {
    border-bottom: 2px solid #000000;

    > .wrapper {
      display: grid;
      grid-template-columns: 1fr max-content;
      align-items: center;
      height: 400px;
    }

    &__subtitle {
      @include fontSize(20px);
      margin: 20px 0 0;
    }

    &__image {
      height: 400px;
    }
  }

  // Responsiveness

  @media (max-width: 1200px) {
    .header {
      > .wrapper {
        grid-template-columns: 1fr;
        padding: 50px;
        height: auto;
      }

      &__title {
        text-align: center;
      }

      &__subtitle {
        text-align: center;
      }

      &__image {
        display: none;
      }
    }
  }

  @media (max-width: 500px) {
    .header__title {
      font-size: 80px;
    }
  }

  @media (max-width: 400px) {
    .header__title {
      font-size: 70px;
    }
  }
</style>
