import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz : recherche-buissonniere.cooplab.org
 * Le tiers secteur de la recherche en Sud Berry/Creuse.
 * Moteur copié de cooplab.org, configuration et layout dérivés de lisieres.cooplab.org (2026-10-21).
 */
const config: QuartzConfig = {
  contentDir: "mmw-content",

  configuration: {
    pageTitle: "Recherche buissonnière",
    pageTitleSuffix: " · cooplab.org",

    enableSPA: true,
    enablePopovers: true,

    baseUrl: "recherche-buissonniere.cooplab.org",

    ignorePatterns: ["private", "**/templates/", ".obsidian", "_static"],

    defaultDateType: "created",
    generateSocialImages: false,

    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8fb",       // fond blanc légèrement lilas
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#5B4A7A",   // mûre / prunelle, couleur signature de la haie
          tertiary: "#8E7BB0",
          highlight: "rgba(91, 74, 122, 0.10)",
          textHighlight: "#e3d9f088",
        },
        darkMode: {
          light: "#171419",
          lightgray: "#2e2a35",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#A594C4",
          tertiary: "#5B4A7A",
          highlight: "rgba(165, 148, 196, 0.15)",
          textHighlight: "#2d264088",
        },
      },
    },
  },

  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: { light: "github-light", dark: "github-dark" },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "relative", openLinksInNewTab: true }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.HardLineBreaks(),
    ],

    filters: [
      Plugin.RemoveDrafts(),
    ],

    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
