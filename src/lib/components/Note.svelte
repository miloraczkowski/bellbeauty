<section class="note">
  <div class="wrapper">
    <h3>Uwaga</h3>
    <p>
      <slot />
    </p>
  </div>
</section>

<style lang="scss">
  .note {
    h3 {
      text-align: center;
    }

    p {
      margin: 20px auto 0;
      max-width: 1000px;
    }
  }
</style>
