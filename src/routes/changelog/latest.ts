import type { ChangelogEntry as ChangelogEntryType } from "$lib/types/changelog-entry.type";

export const get: import("@sveltejs/kit").RequestHandler = async ({
  locals,
}) => {
  const { fileName } = locals.changelogEntries[0] as ChangelogEntryType;
  return {
    headers: {
      "Cache-Control": "public, max-age=86400",
    },
    body: {
      releaseId: fileName.replace(".md", ""),
    },
  };
};
