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
        class: "h-6",
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
        class: "h-6 w-8",
      },
    },
    text: "Matt Ellis is a developer advocate at JetBrains, working with lots of different IDEs and technologies such as the Unity and Unreal Engine game development tools in Rider, Code With Me for collaborative editing and remote development with JetBrains Gateway.",
  },
];
