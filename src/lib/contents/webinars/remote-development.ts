import gitpodSvelte from "$lib/components/svgs/brands/gitpod.svelte";
import jetbrainsSvelte from "$lib/components/svgs/brands/jetbrains.svelte";
import type { Host } from "$lib/types/host.type";

export const hosts: Host[] = [
  {
    avatar: {
      src: "/images/webinars/sven-efftinge.png",
    },
    name: "Sven Efftinge",
    jobTitle: "Co-CEO & Co-founder",
    companyLogo: {
      component: gitpodSvelte,
      props: {
        class: "h-8",
      },
    },
    text: "Sven spent the last 15 years creating IDEs, compilers, and other developer tools and kicked-off open-source projects such as Open-VSX, Theia, and Xtext. In his spare time, Sven goes kitesurfing on the baltic sea and enjoys life with his kids.",
  },
  {
    avatar: {
      src: "/images/webinars/matt-ellis.png",
    },
    name: "Matt Ellis",
    jobTitle: "Developer Advocate",
    companyLogo: {
      component: jetbrainsSvelte,
      props: {
        class: "h-8 w-8",
      },
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
];
