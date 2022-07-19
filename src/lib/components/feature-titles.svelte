<script lang="ts">
  import type { FeatureTitle as FeatureTitleProps } from "$lib/types/feature-title.type";
  import FeatureTitle from "./feature-title.svelte";

  export let featureTitles: FeatureTitleProps[];
  export let swap: boolean = false;
  export let featureTitlePadding: string = "p-x-small";
</script>

<div class="flex justify-center flex-wrap gap-micro">
  {#each featureTitles as featureTitle}
    <FeatureTitle
      featureTitle={{ ...featureTitle, swap }}
      {featureTitlePadding}
    />
  {/each}
</div>
