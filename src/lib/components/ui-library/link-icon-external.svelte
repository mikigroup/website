<script lang="ts">
  export let href: string;
  export let icon: string;
  export let size: "small" | "big" = "small";
  export let variant: "white" | "gray" = "white";
</script>

<style lang="postcss">
  a {
    @apply text-important;
  }
  a,
  span {
    /* Move to markup once src/lib/assets/markdown-commons.scss is gone */
    @apply leading-4;
  }

  :global(body.dark) .link-icon-external {
    img {
      filter: invert(80%) grayscale(80%);
      @apply transition-all duration-200;
    }
  }
</style>

<a
  class="link-icon-external inline-flex px-4 text-center leading-4 shadow-light dark:shadow-none font-semibold {variant ===
  'white'
    ? 'bg-card'
    : 'bg-sand-dark dark:bg-light-black'} hover:bg-white focus:bg-tertiary dark:hover:bg-light-black-hover {size ===
  'small'
    ? 'py-2 text-btn-small rounded-xl'
    : 'py-4 text-xl rounded-2xl'}"
  {href}
  target="_blank"
  rel="noopener"
  ><span class="">{icon}</span>
  <img
    class="inline-block my-0 mx-2 h-3 w-3"
    src="/svg/external.svg"
    alt="External"
  /><slot /></a
>
