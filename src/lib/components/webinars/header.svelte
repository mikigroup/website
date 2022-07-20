<script>
  import Header from "../header.svelte";
  import Pill from "../pill.svelte";
  import Jetbrains from "../svgs/brands/jetbrains.svelte";
  import Calendar from "../svgs/webinars/calendar.svelte";
  import Clock from "../svgs/webinars/clock.svelte";
</script>

<Header
  title="Remote Development with IntelliJ & Gitpod"
  text="Curious how the biggest tech companies are using remote development to speed up their development cycles? We’ll explore using Gitpod to enable Java development in the cloud with your local IntelliJ IDEA."
  centered={false}
  textAlign="left"
  fullWidth={true}
>
  <Pill text="Webinar" class="mb-3" slot="top" />
  <div slot="content" class="text-large space-y-micro my-x-small">
    <div class="flex items-center">
      <Calendar class="h-7 w-7 mr-micro" /> August 04 – 5:00 pm CEST
    </div>
    <div class="flex items-center">
      <Clock class="h-7 w-7 mr-micro" /> 45min
    </div>
    <p class="flex items-center">
      Hosted by <img
        src="/images/gitpod-logo.svg"
        alt="Gitpod"
        class="h-9 w-9 mx-micro"
      />
      <Jetbrains isDark={true} class="h-9 w-9" />
    </p>
  </div>
</Header>
