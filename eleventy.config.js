import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("css");

  // Collection of posts sorted by date (newest first)
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("posts/*.md").sort((a, b) => b.date - a.date);
  });

  // Format date as YYYY-MM-DD
  eleventyConfig.addFilter("isoDate", (date) => {
    return new Date(date).toISOString().split("T")[0];
  });

  // Post number (oldest = 1)
  eleventyConfig.addFilter("postNumber", (posts, page) => {
    const reversed = [...posts].reverse();
    return reversed.findIndex((p) => p.url === page.url) + 1;
  });
}

export const config = {
  dir: {
    input: ".",
    includes: "_includes",
    output: "_site",
  },
};
