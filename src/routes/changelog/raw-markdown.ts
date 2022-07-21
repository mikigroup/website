import { basename } from "path";

export const get: import("@sveltejs/kit").RequestHandler = async ({
  url,
  locals,
}) => {
  const changelogEntries = Object.entries(
    import.meta.glob("/src/lib/contents/changelog/*.md", { as: "raw" })
  )
    .filter(([path]) => !path.endsWith("_template.md"))
    .reduce((acc, [filePath, content]) => {
      const fileName = basename(filePath);
      acc[fileName] = content;
      return acc;
    }, {});
  const releaseId = url.searchParams.get("releaseId");
  const fileName = releaseId
    ? `${releaseId}.md`
    : locals.changelogEntries[0].fileName;
  const body = changelogEntries[fileName];
  if (!body) {
    return {
      status: 404,
      statusText: "Not Found",
    };
  }
  return {
    headers: {
      "Cache-Control": "public, max-age=86400",
    },
    body,
  };
};
