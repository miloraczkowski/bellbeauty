{#if href}
  <a
    class="button"
    class:big
    class:disabled
    href="{href}"
  >
    {text}
  </a>
{:else}
  <div
    class="button"
    class:big
    class:disabled
  >
    {text}
  </div>
{/if}

<script lang="ts">
  export let text: string
  export let big = false
  export let href: string | undefined = undefined
  export let disabled = false
</script>

<style lang="scss">
  .button {
    display: block;
    transition: .2s;
    cursor: pointer;
    border: 2px solid #000000;
    //border-radius: 50px;
    padding: 7px 20px;
    width: fit-content;
    background: $accent;
    text-transform: uppercase;

    &:hover {
      background: #000000;
      color: $accent;
    }

    &.big {
      @include fontSize(20px);
      padding: 10px 25px;
    }

    &.disabled {
      opacity: .5;
      cursor: default;

      &:hover, &:focus {
        background: $accent;
        color: #000000;
      }
    }
  }
</style>
